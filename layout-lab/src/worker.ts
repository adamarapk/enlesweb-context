interface Env {
  ASSETS: {
    fetch(request: Request): Promise<Response>;
  };
}

const PREVIEW_PATHS = new Set(['/pratinjau', '/pratinjau/']);

function isPreviewDocument(pathname: string): boolean {
  return PREVIEW_PATHS.has(pathname);
}

function isAstroAsset(pathname: string): boolean {
  return pathname.startsWith('/_astro/') && !pathname.endsWith('/');
}

function notFound(): Response {
  return new Response('Not Found', {
    status: 404,
    headers: { 'Cache-Control': 'no-store' }
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return notFound();
    }

    const { pathname } = new URL(request.url);

    // Client deployments expose only the clean preview page and its built assets.
    if (!isPreviewDocument(pathname) && !isAstroAsset(pathname)) {
      return notFound();
    }

    return env.ASSETS.fetch(request);
  }
};
