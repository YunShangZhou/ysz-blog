export const copyText =(value: string)=>{
    const textarea = document.createElement('textarea')
    textarea.value = value;
    
    document.append(textarea)
    
    textarea.select();
    textarea.setSelectionRange(0, textarea.value.length)
    
    document.execCommand('copy')

    document.removeChild(textarea)
}