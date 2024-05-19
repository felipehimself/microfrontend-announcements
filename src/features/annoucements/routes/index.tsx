import { Route, Routes, Navigate } from 'react-router-dom';
import { Announcements } from './announcments';

export const AnnouncementsRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Announcements />} />
      {/* <Route path="*" element={<Navigate to="/sales" />} /> */}
    </Routes>
  );
};
