// Static navigation helper for exported sites
export const staticNavigate = (path: string) => {
  // Ensure trailing slash for static export
  const normalizedPath = path.endsWith("/") ? path : `${path}/`
  window.location.href = normalizedPath
}

export const getStaticPath = (path: string) => {
  // Ensure trailing slash for static export
  return path.endsWith("/") ? path : `${path}/`
}
