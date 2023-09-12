import { readFile } from 'fs/promises';

async function processFileData() {
	try {
		const fileData = await readFile('./adventofcode.com_2022_day_1_input.txt', 'utf-8');
		const lines = fileData.trim().split('\n');
		const groups = lines.join('\n').split('\n\n');
		const sums = groups.map(group => {
			const values = group.split('\n').map(Number);
			return values.reduce((sum, value) => sum + value, 0);
		});

		sums.sort((a, b) => b - a);

		const largestSums = sums.slice(0, 3);
		const totalSum = largestSums.reduce((sum, value) => sum + value, 0);

		console.log(totalSum);
	} catch (error) {
		console.error('Error processing file data:', error);
	}
}

processFileData();