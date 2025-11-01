<h1 align="center">Pulseira de Ritmo (Pace Band)</h1>

<p align="center">
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
  <img src="https://img.shields.io/badge/Notepad++-90E59A.svg?style=for-the-badge&logo=notepad%2b%2b&logoColor=black" />
  <img src="https://img.shields.io/badge/status-active-success?style=for-the-badge" />
</p>
<p align="center">
  <img src="https://github.com/NunchuckCoder/paceband/blob/main/paceband.png?raw=true" />
</p>
<p align="center">Uma **pulseira de ritmo personalizada** para corridas (5K, 10K, Meia-Maratona, Maratona).</br>
Imprime em papel, corta e usa no pulso!
</p>

---

## Funcionalidades

- Tempo objetivo (hh:mm:ss)
- Distâncias: 5K, 10K, Meia-Maratona, Maratona (km ou milhas)
- **Contato de emergência opcional** (fundo vermelho claro)
- **Altura mínima de 20 cm** (200 mm)
- **Impressão otimizada** (só a pulseira aparece)

---

## Estrutura de ficheiros

```
paceband/
  ├── index.html        → Interface principal
  ├── style.css         → Estilos (tela + impressão)
  ├── script.js         → Lógica de cálculo
  ├── img/
  │   └── paceband.png  → Logo (150×? px)
  └── README.md         → Este ficheiro
```

---

## Como usar

1. **Abra `index.html` no navegador** (não precisa de servidor)
2. Preencha:
   - Tempo objetivo
   - Distância
   - Unidade (km ou milhas)
   - (Opcional) Nome + Telefone de emergência
3. Clique em **"Criar Banda"**
4. Clique em **"Imprimir"**
5. Corte pela linha tracejada

> Ideal para papel A4 comum ou papel adesivo fino.

---

## Impressão (dicas)

- Use **papel normal ou adesivo fino**
- Corte com **tesoura ou estilete**
- Dobre e cole com fita adesiva no pulso
- Teste em **5K** → 6 linhas × 20px = 120px + logo + emergência ≈ 180px → sobra espaço até 200mm

---

## Personalização

### Mudar altura das linhas
Edite em `style.css`:
```css
table.paceband th,
table.paceband td {
  height: 16px !important;   /* ← mude aqui */
  line-height: 16px !important;
}
.emergency .info {
  background: #ffeeee; /* vermelho mais claro */
}
```

---

## Trocar logo

Substitua img/paceband.png por sua imagem (150px de largura recomendada)

---

## Tecnologias

HTML5
CSS3
JavaScript

---

## Contato

- Desenvolvido por **NunchuckCoder**
- **Email:** code.wish815@passmail.com
- **GitHub:** [https://github.com/NunchuckCoder](https://github.com/NunchuckCoder)
  
---

## Licença

- Este projeto é open-source sob a licença MIT.
- Sinta-se à vontade para usar, modificar e contribuir.
