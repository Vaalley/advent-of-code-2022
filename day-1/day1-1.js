import { readFile } from 'fs/promises';

async function processFileData() {
	try {
		const fileData = await readFile('./adventofcode.com_2022_day_1_input.txt', 'utf-8');

		const groups = fileData.trim().split('\n\n');

		const sums = groups.map(group => {
			const values = group.split('\n').map(Number);
			return values.reduce((sum, value) => sum + value, 0);
		});

		const largestSum = Math.max(...sums);

		console.log(largestSum);
	} catch (error) {
		console.error('Error reading file:', error);
	}
}

processFileData();