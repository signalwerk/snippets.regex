// replace \n with newline but not \\n
// replace \\ with \

return text.replace(/(?<!\\)\\n/g, '\n').replace(/\\\\/g, '\\')
