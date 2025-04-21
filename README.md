# 🧮 Calculadora de Factorial

> *Cálculos factoriales simples y rápidos*

## 📚 ¿Qué hace esta aplicación?

Calcula el factorial de cualquier número entero no negativo. El factorial de n (escrito como n!) es el producto de todos los enteros positivos desde 1 hasta n.

## 🚀 Inicio rápido

```bash
git clone https://github.com/tu-usuario/calculadora-factorial.git
cd calculadora-factorial
# Abre index.html en tu navegador
```

## 💻 Uso

1. Ingresa un número no negativo
2. Presiona "Calcular"
3. Obtén el resultado instantáneamente

## ⚙️ Cómo funciona

```javascript
const factorialCalculator = (num) => {
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i
    }
    return result;
}
```

## 🎯 Características

* **Simple**: Interfaz minimalista e intuitiva
* **Segura**: Validación completa de entradas
* **Responsive**: Funciona en todos los dispositivos
* **Rápida**: Resultados instantáneos

## 👥 ¿Para quién es?

* **Estudiantes** calculando problemas de probabilidad
* **Profesores** enseñando conceptos matemáticos
* **Programadores** probando algoritmos recursivos
* **Científicos** calculando permutaciones

## 💡 Datos curiosos

* El factorial de 0 es 1, no 0
* 70! ya supera el número de átomos en el universo observable

## 🔮 Futuras mejoras

* Soporte para BigInt en factoriales grandes
* Modo educativo con explicación paso a paso
* Visualización gráfica del crecimiento factorial

## ❓ FAQ

**P: ¿Por qué no puedo calcular factoriales negativos?**  
R: Los factoriales solo están definidos para números no negativos.

**P: ¿Hasta qué número puedo calcular?**  
R: Aproximadamente hasta 170 con precisión completa.

## 🤝 Contribuye

1. Fork el repositorio
2. Crea tu rama de funcionalidad
3. Envía tu pull request

## 📜 Licencia

MIT - Usa, modifica y comparte libremente.

**¡Felices cálculos factoriales! 🚀**
