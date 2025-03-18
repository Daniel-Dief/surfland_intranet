export function redirect(path: string) {
    const redirectUrl = import.meta.env.VITE_PAGE_HREF + "/" + path;
    window.location.replace(redirectUrl);
}