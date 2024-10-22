// redux/sidebarSlice.js
import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: true,  // Sidebar is open by default
    admissionFormTitle: '',  // Add field for AdmissionForm title
    addNewAdmissionTitle: '',  // Add field for AddNewAdmission title
    activeSection: 'Dashboard'  // Track the active section, default is 'Dashboard'
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
    setAdmissionTitles: (state, action) => {
      const { admissionForm, addNewAdmission } = action.payload;
      state.admissionFormTitle = admissionForm;
      state.addNewAdmissionTitle = addNewAdmission;
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;  // Set the active section
    },
  },
});

export const { toggleSidebar, setAdmissionTitles, setActiveSection } = sidebarSlice.actions;
export default sidebarSlice.reducer;
