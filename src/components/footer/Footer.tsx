import {
    FacebookLogoIcon,
    InstagramLogoIcon,
    LinkedinLogoIcon,
} from "@phosphor-icons/react";

export default function Footer() {
    return (
        <footer className="mt-auto w-full bg-indigo-900 text-white">
            <div className="flex flex-col items-center px-4 py-6 text-center">
                <p className="font-semibold">
                    Farmácia Generation | Copyright: 2025
                </p>

                <p className="mt-1 text-sm">
                    Acesse nossas Redes Sociais
                </p>

                <nav
                    className="mt-2 flex gap-3"
                    aria-label="Redes sociais"
                >
                    <a
                        href="#"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                        className="transition-transform hover:scale-110"
                    >
                        <LinkedinLogoIcon size={24} />
                    </a>

                    <a
                        href="#"
                        aria-label="Instagram"
                        title="Instagram"
                        className="transition-transform hover:scale-110"
                    >
                        <InstagramLogoIcon size={24} />
                    </a>

                    <a
                        href="#"
                        aria-label="Facebook"
                        title="Facebook"
                        className="transition-transform hover:scale-110"
                    >
                        <FacebookLogoIcon size={24} />
                    </a>
                </nav>
            </div>
        </footer>
    );
}