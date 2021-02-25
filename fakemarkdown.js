text
        .replace(/\*\*([^*]*)\*\*/gi, `<span class="emphasis">$1</span>`) // **text** => emphasis
        .replace(/\^\^([^^]*)\^\^/gi, '<sup>$1</sup>') // ^^text^^ => superscript
        .replace(/\[([^[]*)\]\(([^)]*)\)/gi, '<a href="$2" target="_blank" rel="noreferrer">$1</a>') // link
