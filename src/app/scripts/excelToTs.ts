import XLSX from 'xlsx';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function toCamelCase(input: string): string {
    return input
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase())
        .replace(/\s+/g, '');
}

interface ProgressTowardsGoals {
    title: string;
    description: string;
    category: string;
    data: Record<string, any>[];
}

function convertExcelToTypeScriptVariable(filePath: string, outputFilePath: string) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const rawData: any[] = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    if (rawData.length === 0) {
        console.error("Error: No data found in the Excel file.");
        process.exit(1);
    }

    const titleRow = rawData[0];

    if (!Array.isArray(titleRow) || titleRow.length === 0) {
        console.error("Error: No header found in the specified header row.");
        process.exit(1);
    }

    const title = titleRow.join(' ') || 'Default Title';
    const camelCaseName = toCamelCase(title);

    const dataRows = rawData.slice(1);

    const data: Record<string, any>[] = [];

    dataRows.forEach(row => {
        if (!Array.isArray(row) || !row[0] || row[0].trim() === '') {
            return;
        }

        const entry: Record<string, any> = {};

        titleRow.forEach((header, index) => {
            if (row[index] !== undefined) {
                entry[header] = row[index] || '';
            } else {
                entry[header] = '';
            }
        });

        data.push(entry);
    });

    const variable: ProgressTowardsGoals = {
        title: title,
        description: '',
        category: '',
        data
    };

    const tsContent = `export const ${camelCaseName} = ${JSON.stringify(variable, null, 2)};\n`;

    fs.writeFileSync(outputFilePath, tsContent, { encoding: 'utf8' });
    console.log(`Success: ${outputFilePath}`);
}

const excelFilePath = join(__dirname, 'excel-file.xlsx');
const outputTsFilePath = join(__dirname, 'output.ts');

if (!fs.existsSync(excelFilePath)) {
    console.error(`Error: ${excelFilePath} does not exist.`);
    process.exit(1);
}

convertExcelToTypeScriptVariable(excelFilePath, outputTsFilePath);
