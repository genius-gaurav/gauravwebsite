/**
 * Gaurav Yadav Portfolio - Main Entry Module
 */
import { 
  createIcons, 
  Flame, 
  Atom, 
  Database, 
  Terminal, 
  Paintbrush, 
  Heart, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  Globe, 
  Check, 
  X, 
  Info,
  Search
} from 'lucide';
import { initCursor } from './cursor.js';
import { initProjects } from './projects.js';
import { initFilters } from './filters.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  createIcons({
    icons: {
      Flame,
      Atom,
      Database,
      Terminal,
      Paintbrush,
      Heart,
      Star,
      ChevronLeft,
      ChevronRight,
      Menu,
      Globe,
      Check,
      X,
      Info,
      Search
    }
  });

  // Initialize modular features
  initCursor();
  initProjects();
  initFilters();
  initAnimations();
});
