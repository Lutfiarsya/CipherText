import { cn } from "@/src/lib/utils";
import {
  BookIcon,
  CheckIcon,
  HomeIcon,
  InfoIcon,
} from "@/src/components/ui/icons";

const TABS = [
  { id: "home", label: "Home", icon: <HomeIcon /> },
  { id: "about", label: "About", icon: <InfoIcon /> },
  { id: "howItWorks", label: "How It Works", icon: <BookIcon /> },
  { id: "testCases", label: "Test Cases", icon: <CheckIcon /> },
];

export function Navbar({ activeTab, onTabChange }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <div>
            <div className="brand-name">CipherLab</div>
            <div className="brand-subtitle">Cryptography Demonstrator</div>
          </div>
        </div>

        <nav className="navigation">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={cn("nav-link", activeTab === tab.id && "active")}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
