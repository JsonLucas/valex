const formatEmployeeCardName = (employeeName: string) => {
    const filteredName = employeeName.split(' ').filter((item) => { return item.length > 3 });
    let formatedName = '';
    for(let i = 0; i < filteredName.length; i++){
        const auxName = filteredName[i];
        ((i === 0) || (i === (filteredName.length - 1))) 
        ? formatedName += `${auxName} `
        : formatedName += `${auxName[0]} `;
    }
    return formatedName.trim();
}

export default formatEmployeeCardName;