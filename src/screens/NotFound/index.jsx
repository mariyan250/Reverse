// React and style
import React from 'react';

// Translation
import { useTranslation } from 'react-i18next';

function NotFound() {
  const { t } = useTranslation();

  return (
    <main className="d-flex justify-content-center align-items-center vh-100">
      <h1>{t('not_found.heading')}</h1>
    </main>
  );
}

export default NotFound;
