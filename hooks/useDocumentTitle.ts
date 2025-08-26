
import { useEffect } from 'react';

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title} | Rohis Riyadushshalihin`;
  }, [title]);
};

export default useDocumentTitle;
