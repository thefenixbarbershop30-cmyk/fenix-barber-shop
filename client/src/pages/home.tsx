import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

// Import images
import carlosManuelImg from "@assets/Barbero Carlos Manuel_1756685200542.jpg";
import kevinEliasImg from "@assets/Barbero Kevin Elías_1756685200552.jpg";
import jailSmithImg from "@assets/Barbero Jail Smith_1756685200548.jpg";
import davierEliasImg from "@assets/Barbero Davier Elías_1756685200545.jpg";
import corteNormalImg from "@assets/Servicio Corte Normal_1756686850118.jpg";
import barbaImg from "@assets/Barba_1756686090763.jpg";
import disenoImg from "@assets/Diseño_1756685200556.jpg";
import tinteImg from "@assets/Tinte_1756685200561.jpg";
import mechasImg from "@assets/Mechas_1756685200558.jpg";
import logoFenix from "@assets/Nuevo Logo_1756686857055.png";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(target.getAttribute('href')!);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleNavClick));

    // Header background on scroll
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add('bg-background/95', 'backdrop-blur-sm');
        } else {
          header.classList.remove('bg-background/95', 'backdrop-blur-sm');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      links.forEach(link => link.removeEventListener('click', handleNavClick));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bookingUrl = "https://forms.gle/FENPCuGqra2w64VJ9";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300" data-testid="header-navigation">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={logoFenix} alt="The Fenix Barber Shop Logo" className="w-12 h-12 object-contain" />
              <h1 className="text-2xl font-bold text-golden">The Fenix Barber Shop</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="text-muted-foreground hover:text-golden transition-colors" data-testid="nav-inicio">Inicio</a>
              <a href="#equipo" className="text-muted-foreground hover:text-golden transition-colors" data-testid="nav-equipo">Nuestro Equipo</a>
              <a href="#servicios" className="text-muted-foreground hover:text-golden transition-colors" data-testid="nav-servicios">Servicios</a>
              <a href="#contacto" className="text-muted-foreground hover:text-golden transition-colors" data-testid="nav-contacto">Contacto</a>
            </nav>
            
            <a href={bookingUrl} target="_blank" rel="noopener noreferrer" 
               className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
               data-testid="button-reservar-header">
              Reservar Cita
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-section min-h-screen flex items-center justify-center pt-20" data-testid="section-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-golden">Estilo urbano.</span><br />
              <span className="text-foreground">Precisión profesional.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Barbería profesional en el corazón de Madrid, especializada en fades, diseños y colorimetría de vanguardia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                 className="golden-gradient text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity inline-flex items-center"
                 data-testid="button-reservar-hero">
                <i className="fas fa-calendar-plus mr-2"></i>
                Reservar Cita Ahora
              </a>
              
              <a href="#equipo" className="border border-golden text-golden px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
                 data-testid="button-equipo-hero">
                Conocer Nuestro Equipo
              </a>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <i className="fas fa-map-marker-alt text-golden text-2xl mb-2"></i>
                <p className="text-muted-foreground" data-testid="text-direccion">Avenida Espinela 5, Madrid</p>
              </div>
              <div className="text-center">
                <i className="fas fa-clock text-golden text-2xl mb-2"></i>
                <p className="text-muted-foreground" data-testid="text-horario">10:00 am – 9:00 pm</p>
              </div>
              <div className="text-center">
                <i className="fas fa-phone text-golden text-2xl mb-2"></i>
                <a href="tel:+34604195300" className="text-muted-foreground hover:text-golden transition-colors" data-testid="link-telefono">
                  +34 604 19 53 00
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 bg-card" data-testid="section-equipo">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-golden">Nuestro</span> <span className="text-foreground">Equipo</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profesionales especializados en las últimas tendencias de barbería masculina
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Carlos Manuel */}
            <Card className="team-card bg-muted overflow-hidden hover-lift" data-testid="card-barbero-carlos">
              <div className="aspect-square relative">
                <img src={carlosManuelImg} alt="Carlos Manuel - Experto en colorimetría y fades" 
                     className="w-full h-full object-cover" data-testid="img-carlos-manuel" />
                
                <div className="contact-overlay">
                  <div className="flex space-x-4">
                    <a href="tel:+34604195300" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                       data-testid="link-phone-carlos">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </a>
                    <a href="https://instagram.com/carlosbarber_92" target="_blank" rel="noopener noreferrer"
                       className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                       data-testid="link-instagram-carlos">
                      <i className="fab fa-instagram text-white text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-golden mb-2" data-testid="text-nombre-carlos">Carlos Manuel</h4>
                <p className="text-muted-foreground mb-4" data-testid="text-especialidad-carlos">Experto en colorimetría y fades</p>
                
                <div className="flex flex-col space-y-2 text-sm">
                  <a href="https://instagram.com/carlosbarber_92" target="_blank" rel="noopener noreferrer"
                     className="text-muted-foreground hover:text-golden transition-colors flex items-center"
                     data-testid="link-instagram-text-carlos">
                    <i className="fab fa-instagram mr-2"></i>@carlosbarber_92
                  </a>
                  <a href="tel:+34604195300" className="text-muted-foreground hover:text-golden transition-colors flex items-center"
                     data-testid="link-phone-text-carlos">
                    <i className="fas fa-phone mr-2"></i>+34 604 19 53 00
                  </a>
                </div>
              </div>
            </Card>

            {/* Kevin Elías */}
            <Card className="team-card bg-muted overflow-hidden hover-lift" data-testid="card-barbero-kevin">
              <div className="aspect-square relative">
                <img src={kevinEliasImg} alt="Kevin Elías - Especialista en fades y diseños" 
                     className="w-full h-full object-cover" data-testid="img-kevin-elias" />
                
                <div className="contact-overlay">
                  <div className="flex space-x-4">
                    <a href="tel:+34673862218" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                       data-testid="link-phone-kevin">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </a>
                    <a href="https://instagram.com/velkan_es" target="_blank" rel="noopener noreferrer"
                       className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                       data-testid="link-instagram-kevin">
                      <i className="fab fa-instagram text-white text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-golden mb-2" data-testid="text-nombre-kevin">Kevin Elías</h4>
                <p className="text-muted-foreground mb-4" data-testid="text-especialidad-kevin">Fades y diseños</p>
                
                <div className="flex flex-col space-y-2 text-sm">
                  <a href="https://instagram.com/velkan_es" target="_blank" rel="noopener noreferrer"
                     className="text-muted-foreground hover:text-golden transition-colors flex items-center"
                     data-testid="link-instagram-text-kevin">
                    <i className="fab fa-instagram mr-2"></i>@velkan_es
                  </a>
                  <a href="tel:+34673862218" className="text-muted-foreground hover:text-golden transition-colors flex items-center"
                     data-testid="link-phone-text-kevin">
                    <i className="fas fa-phone mr-2"></i>+34 673 86 22 18
                  </a>
                </div>
              </div>
            </Card>

            {/* Jail Smith */}
            <Card className="team-card bg-muted overflow-hidden hover-lift" data-testid="card-barbero-jail">
              <div className="aspect-square relative">
                <img src={jailSmithImg} alt="Jail Smith - Especialista en fades y diseños" 
                     className="w-full h-full object-cover" data-testid="img-jail-smith" />
                
                <div className="contact-overlay">
                  <div className="flex space-x-4">
                    <a href="tel:+34643352344" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                       data-testid="link-phone-jail">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </a>
                    <a href="https://instagram.com/blessed_hairdresser" target="_blank" rel="noopener noreferrer"
                       className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                       data-testid="link-instagram-jail">
                      <i className="fab fa-instagram text-white text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-golden mb-2" data-testid="text-nombre-jail">Jail Smith</h4>
                <p className="text-muted-foreground mb-4" data-testid="text-especialidad-jail">Fades y diseños</p>
                
                <div className="flex flex-col space-y-2 text-sm">
                  <a href="https://instagram.com/blessed_hairdresser" target="_blank" rel="noopener noreferrer"
                     className="text-muted-foreground hover:text-golden transition-colors flex items-center"
                     data-testid="link-instagram-text-jail">
                    <i className="fab fa-instagram mr-2"></i>@blessed_hairdresser
                  </a>
                  <a href="tel:+34643352344" className="text-muted-foreground hover:text-golden transition-colors flex items-center"
                     data-testid="link-phone-text-jail">
                    <i className="fas fa-phone mr-2"></i>+34 643 35 23 44
                  </a>
                </div>
              </div>
            </Card>

            {/* Davier Elías */}
            <Card className="team-card bg-muted overflow-hidden hover-lift" data-testid="card-barbero-davier">
              <div className="aspect-square relative">
                <img src={davierEliasImg} alt="Davier Elías - Especialista en fades y diseños" 
                     className="w-full h-full object-cover" data-testid="img-davier-elias" />
                
                <div className="contact-overlay">
                  <div className="flex space-x-4">
                    <a href="tel:+34602463372" className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                       data-testid="link-phone-davier">
                      <i className="fas fa-phone text-white text-xl"></i>
                    </a>
                    <a href="https://instagram.com/the_wawa_barber" target="_blank" rel="noopener noreferrer"
                       className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                       data-testid="link-instagram-davier">
                      <i className="fab fa-instagram text-white text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-xl font-bold text-golden mb-2" data-testid="text-nombre-davier">Davier Elías</h4>
                <p className="text-muted-foreground mb-4" data-testid="text-especialidad-davier">Fades y diseños</p>
                
                <div className="flex flex-col space-y-2 text-sm">
                  <a href="https://instagram.com/the_wawa_barber" target="_blank" rel="noopener noreferrer"
                     className="text-muted-foreground hover:text-golden transition-colors flex items-center"
                     data-testid="link-instagram-text-davier">
                    <i className="fab fa-instagram mr-2"></i>@the_wawa_barber
                  </a>
                  <a href="tel:+34602463372" className="text-muted-foreground hover:text-golden transition-colors flex items-center"
                     data-testid="link-phone-text-davier">
                    <i className="fas fa-phone mr-2"></i>+34 602 46 33 72
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-background" data-testid="section-servicios">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-golden">Servicios</span> <span className="text-foreground">y Precios</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Especialistas en las últimas tendencias de barbería masculina con técnicas profesionales
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Corte Normal */}
            <Card className="service-card bg-card overflow-hidden flex flex-col md:flex-row" data-testid="card-servicio-corte-normal">
              <div className="md:w-1/2">
                <img src={corteNormalImg} alt="Corte Normal - Servicio profesional de barbería" 
                     className="w-full h-64 md:h-full object-cover" data-testid="img-corte-normal" />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-golden mb-2" data-testid="text-nombre-corte-normal">Corte Normal</h4>
                <p className="text-3xl font-bold text-foreground mb-4" data-testid="text-precio-corte-normal">12€</p>
                <p className="text-muted-foreground mb-6" data-testid="text-descripcion-corte-normal">
                  Corte clásico profesional adaptado a tu estilo personal con acabado impecable.
                </p>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                   className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                   data-testid="button-reservar-corte-normal">
                  <i className="fas fa-calendar-plus mr-2"></i>Reservar Cita
                </a>
              </div>
            </Card>


            {/* Corte y Barba */}
            <Card className="service-card bg-card overflow-hidden flex flex-col md:flex-row" data-testid="card-servicio-corte-barba">
              <div className="md:w-1/2">
                <img src={barbaImg} alt="Corte y Barba - Servicio completo de barbería" 
                     className="w-full h-64 md:h-full object-cover" data-testid="img-corte-barba" />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-golden mb-2" data-testid="text-nombre-corte-barba">Corte y Barba</h4>
                <p className="text-3xl font-bold text-foreground mb-4" data-testid="text-precio-corte-barba">17€</p>
                <p className="text-muted-foreground mb-6" data-testid="text-descripcion-corte-barba">
                  Servicio completo que incluye corte de cabello y arreglo de barba con técnicas profesionales.
                </p>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                   className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                   data-testid="button-reservar-corte-barba">
                  <i className="fas fa-calendar-plus mr-2"></i>Reservar Cita
                </a>
              </div>
            </Card>

            {/* Decoloración o Tinte */}
            <Card className="service-card bg-card overflow-hidden flex flex-col md:flex-row" data-testid="card-servicio-tinte">
              <div className="md:w-1/2">
                <img src={tinteImg} alt="Decoloración o Tinte - Colorimetría profesional" 
                     className="w-full h-64 md:h-full object-cover" data-testid="img-tinte" />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-golden mb-2" data-testid="text-nombre-tinte">Decoloración o Tinte</h4>
                <p className="text-3xl font-bold text-foreground mb-4" data-testid="text-precio-tinte">50€</p>
                <p className="text-muted-foreground mb-4" data-testid="text-descripcion-tinte">
                  Transformación completa del color con técnicas avanzadas de colorimetría.
                </p>
                <p className="text-sm text-golden mb-6" data-testid="text-nota-tinte">
                  <i className="fas fa-star mr-1"></i>Servicio exclusivo de Carlos Manuel
                </p>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                   className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                   data-testid="button-reservar-tinte">
                  <i className="fas fa-calendar-plus mr-2"></i>Reservar Cita
                </a>
              </div>
            </Card>

            {/* Mechas */}
            <Card className="service-card bg-card overflow-hidden flex flex-col md:flex-row md:col-span-2" data-testid="card-servicio-mechas">
              <div className="md:w-1/2">
                <img src={mechasImg} alt="Mechas - Técnica de iluminación capilar" 
                     className="w-full h-64 md:h-full object-cover" data-testid="img-mechas" />
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h4 className="text-2xl font-bold text-golden mb-2" data-testid="text-nombre-mechas">Mechas</h4>
                <p className="text-3xl font-bold text-foreground mb-4" data-testid="text-precio-mechas">40€</p>
                <p className="text-muted-foreground mb-4" data-testid="text-descripcion-mechas">
                  Técnica de iluminación profesional para crear efectos de luz y profundidad en el cabello.
                </p>
                <p className="text-sm text-golden mb-6" data-testid="text-nota-mechas">
                  <i className="fas fa-star mr-1"></i>Servicio exclusivo de Carlos Manuel
                </p>
                <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                   className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center"
                   data-testid="button-reservar-mechas">
                  <i className="fas fa-calendar-plus mr-2"></i>Reservar Cita
                </a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="reservar" className="py-20 bg-card" data-testid="section-reservar">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-golden">Reserva</span> <span className="text-foreground">tu Cita</span>
            </h3>
            <p className="text-xl text-muted-foreground mb-8">
              Agenda tu cita de forma rápida y sencilla. Nuestro horario de atención es de 10:00 am a 9:00 pm.
            </p>
            
            <Card className="bg-muted p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <i className="fas fa-clock text-golden text-3xl mr-4"></i>
                <div>
                  <h4 className="text-2xl font-bold text-foreground" data-testid="text-horario-titulo">Horario de Atención</h4>
                  <p className="text-xl text-muted-foreground" data-testid="text-horario-detalle">10:00 am – 9:00 pm</p>
                </div>
              </div>
              
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                 className="golden-gradient text-primary-foreground px-12 py-4 rounded-lg font-semibold text-xl hover:opacity-90 transition-opacity inline-flex items-center"
                 data-testid="button-reservar-principal">
                <i className="fas fa-calendar-check mr-3"></i>
                Reservar Cita Online
              </a>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <i className="fas fa-user-check text-golden text-2xl mb-3"></i>
                <h5 className="font-semibold text-foreground mb-2" data-testid="text-feature-profesionales">Profesionales Especializados</h5>
                <p className="text-muted-foreground text-sm">Equipo certificado en las últimas tendencias</p>
              </div>
              <div className="p-4">
                <i className="fas fa-clock text-golden text-2xl mb-3"></i>
                <h5 className="font-semibold text-foreground mb-2" data-testid="text-feature-horario">Horario Flexible</h5>
                <p className="text-muted-foreground text-sm">Abierto de 10:00 am a 9:00 pm todos los días</p>
              </div>
              <div className="p-4">
                <i className="fas fa-medal text-golden text-2xl mb-3"></i>
                <h5 className="font-semibold text-foreground mb-2" data-testid="text-feature-calidad">Calidad Garantizada</h5>
                <p className="text-muted-foreground text-sm">Satisfacción y estilo profesional asegurado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-background" data-testid="section-contacto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-golden">Contacto</span> <span className="text-foreground">y Ubicación</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuéntranos en el corazón de Madrid. Fácil acceso y ubicación privilegiada.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card p-8">
                <h4 className="text-2xl font-bold text-golden mb-6" data-testid="text-titulo-contacto">Información de Contacto</h4>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-map-marker-alt text-golden text-xl mt-1"></i>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Dirección</h5>
                      <p className="text-muted-foreground" data-testid="text-direccion-completa">Avenida Espinela 5, Madrid</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-phone text-golden text-xl mt-1"></i>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Teléfono</h5>
                      <a href="tel:+34604195300" className="text-muted-foreground hover:text-golden transition-colors"
                         data-testid="link-telefono-contacto">
                        +34 604 19 53 00
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <i className="fas fa-clock text-golden text-xl mt-1"></i>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">Horario</h5>
                      <p className="text-muted-foreground" data-testid="text-horario-contacto">10:00 am – 9:00 pm</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <h5 className="font-semibold text-foreground mb-4" data-testid="text-titulo-instagram">Síguenos en Instagram</h5>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="https://instagram.com/carlosbarber_92" target="_blank" rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-golden transition-colors text-sm flex items-center"
                       data-testid="link-instagram-carlos-contacto">
                      <i className="fab fa-instagram mr-2"></i>@carlosbarber_92
                    </a>
                    <a href="https://instagram.com/velkan_es" target="_blank" rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-golden transition-colors text-sm flex items-center"
                       data-testid="link-instagram-kevin-contacto">
                      <i className="fab fa-instagram mr-2"></i>@velkan_es
                    </a>
                    <a href="https://instagram.com/blessed_hairdresser" target="_blank" rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-golden transition-colors text-sm flex items-center"
                       data-testid="link-instagram-jail-contacto">
                      <i className="fab fa-instagram mr-2"></i>@blessed_hairdresser
                    </a>
                    <a href="https://instagram.com/the_wawa_barber" target="_blank" rel="noopener noreferrer"
                       className="text-muted-foreground hover:text-golden transition-colors text-sm flex items-center"
                       data-testid="link-instagram-davier-contacto">
                      <i className="fab fa-instagram mr-2"></i>@the_wawa_barber
                    </a>
                  </div>
                </div>
              </Card>
              
              <div className="text-center lg:text-left">
                <a href="https://maps.google.com/?q=Avenida+Espinela+5,+Madrid" target="_blank" rel="noopener noreferrer"
                   className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center"
                   data-testid="button-google-maps">
                  <i className="fas fa-directions mr-2"></i>Abrir en Google Maps
                </a>
              </div>
            </div>
            
            {/* Google Maps Embed */}
            <Card className="bg-card overflow-hidden" data-testid="container-google-maps">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.2!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4228a6b2c5f3e3%3A0x8b8b8b8b8b8b8b8b!2sAvenida%20Espinela%205%2C%20Madrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1609459200000!5m2!1sen!2sus"
                width="100%" 
                height="400" 
                style={{border: 0}} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96"
                data-testid="iframe-google-maps">
              </iframe>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t border-border" data-testid="footer-main">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <i className="fas fa-cut text-golden text-3xl"></i>
              <h2 className="text-3xl font-bold text-golden" data-testid="text-logo-footer">The Fenix Barber Shop</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h5 className="font-semibold text-foreground mb-2">Ubicación</h5>
                <p className="text-muted-foreground" data-testid="text-ubicacion-footer">Avenida Espinela 5, Madrid</p>
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-2">Teléfono</h5>
                <a href="tel:+34604195300" className="text-muted-foreground hover:text-golden transition-colors"
                   data-testid="link-telefono-footer">
                  +34 604 19 53 00
                </a>
              </div>
              <div>
                <h5 className="font-semibold text-foreground mb-2">Horario</h5>
                <p className="text-muted-foreground" data-testid="text-horario-footer">10:00 am – 9:00 pm</p>
              </div>
            </div>
            
            <div className="mb-8">
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer"
                 className="golden-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center"
                 data-testid="button-reservar-footer">
                <i className="fas fa-calendar-plus mr-2"></i>
                Reservar Cita
              </a>
            </div>
            
            <div className="border-t border-border pt-6">
              <p className="text-muted-foreground text-sm" data-testid="text-copyright">
                © 2024 The Fenix Barber Shop. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
