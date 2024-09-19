
import { DICoordinator } from "../dependencyInjectionHandler/DICoordinator";
import { redirect } from 'next/navigation';

/**
 * It handles setup the dependency injection, authentication, and other commonly used functionality for the rest of pages.
 * @returns 
 */
export default function App() {
  DICoordinator.initialize(false);

  redirect(`${process.env.NEXT_PUBLIC_WEB_URL}/catalog`)
}

