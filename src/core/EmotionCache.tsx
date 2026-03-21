'use client';

import * as React from 'react';
import createCache from '@emotion/cache';
import { useServerInsertedHTML } from 'next/navigation';
import { CacheProvider } from '@emotion/react';

export function NextAppDirEmotionCacheProvider(props: { children: React.ReactNode; options: { key: string } }) {
  const { options, children } = props;
  const [cache] = React.useState(() => {
    const cache = createCache({ key: options.key });
    cache.compat = true;
    return cache;
  });

  useServerInsertedHTML(() => {
    const names = cache.key;
    const styles = cache.inserted;
    if (styles && Object.keys(styles).length > 0) {
      return (
        <style
          key={names}
          data-emotion={`${names} ${Object.keys(styles).join(' ')}`}
          dangerouslySetInnerHTML={{ __html: Object.values(styles).join('') }}
        />
      );
    }
    return null;
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}
