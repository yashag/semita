const colorClassBank = [
    "semita-green",
    "semita-red",
    "semita-blue",
    "semita-orange",
    "semita-yellow",
    "semita-purple",
    "semita-gray",
    "semita-brown",
    "semita-turquoise",
    "semita-pink"
];

function colorizeBranches (data) {
    if(data && Array.isArray(data.children)) {
        let childIndex = 0;
        while(childIndex < data.children.length) {
            const colorClass = colorClassBank[childIndex % colorClassBank.length];
            
            data.children[childIndex].className = colorClass;
            applyClassToChildren(data.children[childIndex].children, colorClass);
            
            childIndex++;
        }
    }
}

function applyClassToChildren(children, className) {
    if(children && Array.isArray(children)) {
        children.forEach(child => {
            child.className = className;
            applyClassToChildren(child.children);
        });
    }
}

module.exports = {
    colorizeBranches
};