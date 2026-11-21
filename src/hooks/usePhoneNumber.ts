import { useEffect, useState } from 'react';
import { CANONICAL_PHONE, TRACKING_PHONE } from '../data/phone';

/** Canonical number on SSR/first render, tracking number after mount. */
export const usePhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>(CANONICAL_PHONE.display);
  const [phoneHref, setPhoneHref] = useState<string>(`tel:${CANONICAL_PHONE.tel}`);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPhoneNumber(TRACKING_PHONE.display);
      setPhoneHref(`tel:${TRACKING_PHONE.tel}`);
    }
  }, []);

  return { phoneNumber, phoneHref };
};
