# Pulseira de Ritmo (Pace Band)

Uma **pulseira de ritmo personalizada** para corridas (5K, 10K, Meia-Maratona, Maratona).  
Imprime em papel, corta e usa no pulso!

---

## Funcionalidades

- Tempo objetivo (hh:mm:ss)
- Distâncias: 5K, 10K, Meia-Maratona, Maratona (km ou milhas)
- **Contato de emergência opcional** (fundo vermelho claro)
- **Altura mínima de 20 cm** (200 mm)
- **Linhas da tabela com 20px fixos**
- Espaço em branco até o final
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
CSS3 (Flexbox + @media print)
JavaScript (vanilla – sem dependências)

---

## Contato

- Desenvolvido por **NunchuckCoder**
- **Email:** code.wish815@passmail.com
- **GitHub:** [https://github.com/NunchuckCoder](https://github.com/NunchuckCoder)
  
---

## Licença

- Este projeto é open-source sob a licença MIT.
- Sinta-se à vontade para usar, modificar e contribuir.
