async function extraerTextoPDF(file) {
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js';

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

    let textoCompleto = '';

    for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const items = content.items.map(item => item.str.trim());

        textoCompleto += items.join('\n') + '\n'; // Úsalo con saltos de línea por item
    }

    return textoCompleto;
}

function procesarTexto(texto) {
    // Arreglar fechas rotas tipo: "02-05-" y en la siguiente línea "2025"
    const lineas = texto.split('\n');
    const lineasUnidas = [];

    for (let i = 0; i < lineas.length; i++) {
        if (/^\d{2}-\d{2}-$/.test(lineas[i]) && /^\d{4}$/.test(lineas[i + 1])) {
            lineasUnidas.push(`${lineas[i]}${lineas[i + 1]}`);
            i++; // Saltar la siguiente
        } else {
            lineasUnidas.push(lineas[i]);
        }
    }

    const textoUnido = lineasUnidas.join(' ');

    // Regex para identificar movimientos válidos con ID de operación (12 dígitos)
    const regex = /(\d{2}-\d{2}-\d{4})\s+(.+?)\s+(\d{12})\s+\$ (-?\d{1,3}(?:,\d{3})*(?:\.\d{2}))\s+\$ \d{1,3}(?:,\d{3})*(?:\.\d{2})/g;
    
    const movimientos = [];
    let match;

    while ((match = regex.exec(textoUnido)) !== null) {
        const [_, fecha, descripcion, _id, valorStr] = match;
        const valor = parseFloat(valorStr.replace(/,/g, ''));
        const cargo = valor < 0 ? parseInt(Math.abs(valor).toFixed(2)) : '';
        const abono = valor >= 0 ? parseInt(valor.toFixed(2)) : '';
        movimientos.push({ fecha, descripcion, cargo, abono });
    }

    return movimientos;
}

async function convertirATXT() {
    const archivo = document.getElementById('archivoPDFATXT').files[0];
    if (!archivo) return alert("Selecciona un archivo PDF");

    const texto = await extraerTextoPDF(archivo);
    const datos = procesarTexto(texto);

    const encabezados = ["Fecha        Descripción                 Cargo   Abono\n"]
    const contenido = datos.map(d => `${d.fecha}   ${d.descripcion}   ${d.cargo}   ${d.abono}`).join('\n');
    const blob = new Blob([encabezados, contenido], { type: 'text/plain' });

    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'movimientos.txt';
    a.click();
}

async function convertirAExcel() {
    const archivo = document.getElementById('archivoPDFAExcel').files[0];
    if (!archivo) return alert("Selecciona un archivo PDF");

    const texto = await extraerTextoPDF(archivo);
    const datos = procesarTexto(texto);

    const hoja = datos.map(d => ({
        Fecha: d.fecha,
        Descripción: d.descripcion,
        Cargo: d.cargo,
        Abono: d.abono
    }));

    const ws = XLSX.utils.json_to_sheet(hoja);
    const colWidths = hoja.map((_, _colIdx) => ({ wch: 25 }));
    ws['!cols'] = colWidths;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Movimientos");

    XLSX.writeFile(wb, "movimientos.xlsx");
}