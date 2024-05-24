import { Route, Routes } from 'react-router-dom';
import { Announcements } from './announcements';

export const AnnouncementsRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Announcements />} />
      {/* You could have multiples routes here which would have /announcements as the base route */}
    </Routes>
  );
};
