const grade='E';
switch(grade){
    case 'A':
        console.log('A -> is very good');
        break;
    case 'B':
        console.log('B -> good,keep learning');
        break;
    case 'C':
        console.log('C -> need improvement');
        break;
    case 'D':
    case 'E':
        console.log('Not good');
        break;
    default:
        console.log('invalid grade');
}