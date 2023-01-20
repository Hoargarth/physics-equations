export const averageSpeed = (s: number, t: number, decimals: number = 2): number => {
    if (!t) {
        throw new Error('Division by zero not allowed!');
    }

    const averageSpeed = s / t;
    const decimalConversion = Math.pow(10, decimals);

    return Math.round(averageSpeed * decimalConversion) / decimalConversion;
}

export default {
    averageSpeed,
}