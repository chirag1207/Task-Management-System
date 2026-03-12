export function getIntials(fullName){
    const names = fullName.split(" ");
    const initials = names.slice(0,2).map(name => name.charAt(0).toUpperCase());
    const initialsStr = initials.join("");
    return initialsStr;
}