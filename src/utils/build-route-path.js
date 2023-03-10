export function BuildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g

    console.log(path.matchAll(routeParametersRegex))
}