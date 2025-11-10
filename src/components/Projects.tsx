import { useState, useEffect } from 'react';
import { X, ExternalLink, Images, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  url: string;
  previewImage: string;
  images: string[];
  description: string;
}

const projects: Project[] = [
  {
    id: 'ellipsishealth',
    name: 'Ellipsis Health',
    url: 'https://www.ellipsishealth.com/',
    previewImage: '/images/projects/ellipsishealth/1.png',
    images: [
      '/images/projects/ellipsishealth/1.png',
      '/images/projects/ellipsishealth/2.png',
      '/images/projects/ellipsishealth/3.png',
      '/images/projects/ellipsishealth/4.jpg'
    ],
    description: 'Mental health screening and monitoring platform'
  },
  {
    id: 'bluefountainmedia',
    name: 'Blue Fountain Media',
    url: 'http://bluefountainmedia.cc/',
    previewImage: '/images/projects/bluefountainmedia/1.png',
    images: ['/images/projects/bluefountainmedia/1.png', '/images/projects/bluefountainmedia/2.png'],
    description: 'Digital transformation and web development agency'
  },
  {
    id: 'comcast',
    name: 'Comcast Advertising',
    url: 'https://comcastadvertising.com/',
    previewImage: '/images/projects/comcast/1.png',
    images: [
      '/images/projects/comcast/1.png',
      '/images/projects/comcast/2.png',
      '/images/projects/comcast/3.png'
    ],
    description: 'Advanced advertising solutions platform'
  },
  {
    id: 'comcastmobile',
    name: 'Xfinity Mobile',
    url: 'https://www.xfinity.com/mobile/',
    previewImage: '/images/projects/comastmobile/1.png',
    images: [
      '/images/projects/comastmobile/1.png',
      '/images/projects/comastmobile/2.png',
      '/images/projects/comastmobile/3.png'
    ],
    description: 'Mobile service provider platform'
  },
  {
    id: 'crestron',
    name: 'Crestron Home',
    url: 'https://www.crestron.com/Products/Market-Solutions/Crestron-Home',
    previewImage: '/images/projects/cretron/1.png',
    images: [
      '/images/projects/cretron/1.png',
      '/images/projects/cretron/2.png',
      '/images/projects/cretron/3.png',
      '/images/projects/cretron/4.png',
      '/images/projects/cretron/5.png',
      '/images/projects/cretron/6.png',
      '/images/projects/cretron/7.png',
      '/images/projects/cretron/8.png',
      '/images/projects/cretron/9.png'
    ],
    description: 'Smart home automation solutions'
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce Platform',
    url: '#',
    previewImage: '/images/projects/e-commerce/1.webp',
    images: [
      '/images/projects/e-commerce/1.webp',
      '/images/projects/e-commerce/2.webp',
      '/images/projects/e-commerce/3.jpeg'
    ],
    description: 'Full-featured e-commerce solution'
  },
  {
    id: 'gsa',
    name: 'GSA Grading',
    url: 'https://gsagrading.com/',
    previewImage: '/images/projects/gsa/1.png',
    images: [
      '/images/projects/gsa/1.png',
      '/images/projects/gsa/2.png',
      '/images/projects/gsa/3.png',
      '/images/projects/gsa/4.png',
      '/images/projects/gsa/5.png',
      '/images/projects/gsa/6.png',
      '/images/projects/gsa/7.png',
      '/images/projects/gsa/8.png',
      '/images/projects/gsa/9.png',
      '/images/projects/gsa/10.png',
      '/images/projects/gsa/11.png'
    ],
    description: 'Professional grading services platform'
  },
  {
    id: 'nbcuniversal',
    name: 'NBCUniversal',
    url: 'https://www.nbcuniversal.com/',
    previewImage: '/images/projects/NBCUniversal/1.png',
    images: [
      '/images/projects/NBCUniversal/1.png',
      '/images/projects/NBCUniversal/2.png',
      '/images/projects/NBCUniversal/3.png'
    ],
    description: 'Media and entertainment platform'
  },
  {
    id: 'neuralnetwork',
    name: 'Neural Internet',
    url: 'https://neuralinternet.ai/',
    previewImage: '/images/projects/neuralnetwork/1.png',
    images: ['/images/projects/neuralnetwork/1.png', '/images/projects/neuralnetwork/2.png'],
    description: 'AI and machine learning solutions'
  },
  {
    id: 'omegaai',
    name: 'Omega AI',
    url: 'https://www.omegaai.com/',
    previewImage: '/images/projects/omegaai/1.png',
    images: [
      '/images/projects/omegaai/1.png',
      '/images/projects/omegaai/2.png',
      '/images/projects/omegaai/3.png'
    ],
    description: 'Advanced AI platform'
  },
  {
    id: 'peacock',
    name: 'Peacock TV',
    url: 'https://www.peacocktv.com/',
    previewImage: '/images/projects/peacock/1.webp',
    images: [
      '/images/projects/peacock/1.webp',
      '/images/projects/peacock/2.webp',
      '/images/projects/peacock/3.webp',
      '/images/projects/peacock/4.webp'
    ],
    description: 'Streaming platform development'
  },
  {
    id: 'invoicing',
    name: 'STAK Invoicing',
    url: 'https://stak.cc/',
    previewImage: '/images/projects/invoicing/1.png',
    images: ['/images/projects/invoicing/1.png'],
    description: 'Professional invoicing platform'
  },
  {
    id: 'smartnanny',
    name: 'Smart Nanny',
    url: 'https://www.figma.com/design/HOKF6vHAX7UGfHnBUu7Npa/Smart-Nanny?node-id=438-24632',
    previewImage: '/images/projects/SmartNanny/1.png',
    images: [
      '/images/projects/SmartNanny/1.png',
      '/images/projects/SmartNanny/2.png',
      '/images/projects/SmartNanny/3.png',
      '/images/projects/SmartNanny/4.png',
      '/images/projects/SmartNanny/5.png',
      '/images/projects/SmartNanny/6.png',
      '/images/projects/SmartNanny/7.png',
      '/images/projects/SmartNanny/8.png',
      '/images/projects/SmartNanny/9.png',
      '/images/projects/SmartNanny/10.png'
    ],
    description: 'Childcare management platform'
  },
  {
    id: 'smartwebdesigns',
    name: 'Smart Web Designers',
    url: 'https://smartwebdesigners.com/',
    previewImage: '/images/projects/smartwebdesigns/1.png',
    images: [
      '/images/projects/smartwebdesigns/1.png',
      '/images/projects/smartwebdesigns/2.png',
      '/images/projects/smartwebdesigns/3.png'
    ],
    description: 'Web design agency platform'
  },
  {
    id: 'social',
    name: 'Cool Shark',
    url: 'https://coolshark.dev/',
    previewImage: '/images/projects/social/1.webp',
    images: [
      '/images/projects/social/1.webp',
      '/images/projects/social/2.webp',
      '/images/projects/social/3.webp'
    ],
    description: 'Social media platform'
  },
  {
    id: 'wgsn',
    name: 'WGSN',
    url: 'https://www.wgsn.com/en',
    previewImage: '/images/projects/WGSN/1.png',
    images: ['/images/projects/WGSN/1.png', '/images/projects/WGSN/2.png'],
    description: 'Trend forecasting platform'
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play interval (5 seconds)
  useEffect(() => {
    if (selectedProject && isAutoPlaying && selectedProject.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => 
          prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);
    }
  }, [selectedProject, isAutoPlaying]);

  // Reset current image index when project changes
  useEffect(() => {
    if (selectedProject) {
      setCurrentImageIndex(0);
      setIsLoading(true);
      const img = new Image();
      img.src = selectedProject.images[0];
      img.onload = () => setIsLoading(false);
      // Prevent scrolling when modal is open
      document.body.style.overflow = 'hidden';
      // Reset auto-play to true when opening new project
      setIsAutoPlaying(true);
    } else {
      // Restore scrolling when modal is closed
      document.body.style.overflow = 'auto';
    }
  }, [selectedProject]);

  // Preload images for smooth transitions
  useEffect(() => {
    if (selectedProject && currentImageIndex > 0) {
      setIsLoading(true);
      const img = new Image();
      img.src = selectedProject.images[currentImageIndex];
      img.onload = () => setIsLoading(false);
    }
  }, [selectedProject, currentImageIndex]);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <>
      <section id="projects" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white mb-6">Featured Projects</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-slate-800 aspect-video cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <img
                src={project.previewImage}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                  <h3 className="text-xl font-semibold text-white text-center">{project.name}</h3>
                  <p className="text-slate-300 text-sm text-center mb-2">{project.description}</p>
                  
                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm font-medium transition-colors"
                    >
                      <Images className="w-4 h-4" />
                    </button>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white text-sm font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 w-screen h-screen bg-black z-[9999]">
          <div className="absolute inset-0 flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-b from-black to-transparent">
              <div>
                <h3 className="text-xl font-semibold text-white">{selectedProject.name}</h3>
                <p className="text-slate-400 text-sm">
                  Image {currentImageIndex + 1} of {selectedProject.images.length}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-3 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-7 h-7 text-white" />
              </button>
            </div>

            {/* Main Image Container */}
            <div className="flex-1 relative flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="relative w-full h-full max-h-[80vh] flex items-center justify-center">
                  {selectedProject.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedProject.name} preview ${index + 1}`}
                      className={`absolute w-auto h-auto max-w-full max-h-full object-contain transition-all duration-500 ${
                        currentImageIndex === index 
                          ? 'opacity-100 translate-x-0 scale-100' 
                          : index < currentImageIndex
                          ? 'opacity-0 -translate-x-full scale-95'
                          : 'opacity-0 translate-x-full scale-95'
                      }`}
                      style={{ zIndex: currentImageIndex === index ? 10 : 0 }}
                    />
                  ))}
                </div>

                {/* Loading Indicator */}
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 20 }}>
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Navigation Buttons */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={() => {
                      prevImage();
                      setIsAutoPlaying(false);
                    }}
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button
                    onClick={() => {
                      nextImage();
                      setIsAutoPlaying(false);
                    }}
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`absolute bottom-6 right-6 p-3 rounded-full transition-colors ${
                      isAutoPlaying 
                        ? 'bg-blue-500 hover:bg-blue-600' 
                        : 'bg-black/60 hover:bg-black/80'
                    }`}
                    title={isAutoPlaying ? 'Pause auto-play' : 'Start auto-play'}
                  >
                    {isAutoPlaying ? (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <rect x="6" y="4" width="4" height="16" fill="currentColor" />
                        <rect x="14" y="4" width="4" height="16" fill="currentColor" />
                      </svg>
                    ) : (
                      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M5 4l14 8-14 8V4z" fill="currentColor" />
                      </svg>
                    )}
                  </button>
                </>
              )}
            </div>

            {/* Bottom Container for Thumbnails and Visit Button */}
            <div className="p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
              {/* Thumbnail Navigation */}
              <div className="container mx-auto max-w-6xl">
                <div className="flex justify-center gap-3 mb-6 overflow-x-auto py-2">
                  {selectedProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all ${
                        currentImageIndex === index
                          ? 'border-blue-500 scale-110 opacity-100'
                          : 'border-transparent opacity-40 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>

                {/* Visit Site Button */}
                <div className="flex justify-center">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-medium transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Visit Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}