const assert = require('assert');
const { sumar } = require('../src/calculadora');

// Test 1: Suma básica funciona
try {
    assert.strictEqual(sumar(2, 3), 5);
    console.log("✅ Test 1 aprobado: 2 + 3 es igual a 5");
} catch (error) {
    console.error("❌ Test 1 falló", error);
}

// Test 2: Controla errores si es texto
try {
    assert.throws(() => sumar(2, "hola"), /Ambos argumentos deben ser números/);
    console.log("✅ Test 2 aprobado: El sistema bloquea textos correctamente");
} catch (error) {
    console.error("❌ Test 2 falló", error);
}
