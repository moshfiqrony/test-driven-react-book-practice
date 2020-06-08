module.exports = num => {
    if(num % 15 === 0){
        return('Moshfiq Rony');
    }else if(num % 3 === 0){
        return 'Moshfiq'
    }else if (num % 5 === 0){
        return('Rony')
    }
    return num;
}