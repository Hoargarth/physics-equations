import SpeedVelocity from "./index";

test.each([
    [10, 2, undefined, 5],
    [10.5, 2, undefined, 5.25],
    [10, 2.3, 4, 4.3478],
    [10.5, 2.3, 5, 4.56522],
    [10.5, 2.3, 6, 4.565217],
])('Mechanics | Speed & Velocity | Calculate average speed', (s, t, decimals, expected) => {
    expect(SpeedVelocity.averageSpeed(s, t, decimals))
        .toBe(expected);
});

test('Mechanics | Speed & Velocity | Calculate average speed', () => {
    expect(() => SpeedVelocity.averageSpeed(10.5, 0, undefined))
        .toThrow('Division by zero not allowed!')
});