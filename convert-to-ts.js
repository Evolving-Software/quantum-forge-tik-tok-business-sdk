#!/usr/bin/env node

import { readdir, rename, stat } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Paths to process
const paths = [
    join(__dirname, 'src'),
    join(__dirname, 'src/api'),
    join(__dirname, 'src/model')
];

// Convert a single file from JS to TS
async function convertFile(filePath) {
    if (filePath.endsWith('.js')) {
        const newPath = filePath.replace(/\.js$/, '.ts');
        console.log(`Converting ${filePath} to ${newPath}`);
        await rename(filePath, newPath);
    }
}

// Process all files in directory
async function processDirectory(dir) {
    const files = await readdir(dir);
    for (const file of files) {
        const fullPath = join(dir, file);
        const stats = await stat(fullPath);
        if (stats.isDirectory()) {
            await processDirectory(fullPath);
        } else {
            await convertFile(fullPath);
        }
    }
}

// Convert all files
async function main() {
    for (const path of paths) {
        await processDirectory(path);
    }
}

main().catch(console.error);