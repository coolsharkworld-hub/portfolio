interface Patent {
  title: string;
  abstract: string;
  number: string;
  url: string;
  date: string;
}

interface CertificationProps {
  imageUrls: string[];
  patents: Patent[];
}

interface HackerRankCert {
  url: string;
  imgPath: string;
  title: string;
}

const defaultCertifications: CertificationProps & { hackerrank: HackerRankCert[] } = {
  imageUrls: [
    'https://camo.githubusercontent.com/af3e308b8b165550dccb270bfe4c55f906b9dd794d8681d997ea92699986e310/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f35613533303030642d666564342d343837372d623137642d6437363961353065656234652f696d6167652e706e67',
    'https://camo.githubusercontent.com/ec689b2a6fe9c79b94b86fd943c5ecccd6fe1a6206835101c0fa0c4b0b616c07/68747470733a2f2f696d616765732e637265646c792e636f6d2f696d616765732f61616632643033392d316235382d343766342d396438632d6463393466363836636132662f696d6167652e706e67',
    'https://camo.githubusercontent.com/6c1ab15eee37a078488fae601d3b2f8f468ee8e4dab375bba64d902b6d1f734e/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f65616166346134352d623933652d343164312d393164332d6433333163363231303331342f696d6167652e706e67',
    'https://camo.githubusercontent.com/b4884c95a3abd2366b9a3e2555dcba4cdacd8158faa87f239f0c3205a6b24551/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f39396163396437362d383961642d343264392d616261642d3062333136376334633536362f696d6167652e706e67',
    'https://camo.githubusercontent.com/1429f1ec72c1fdef2490b4c0d3374e7c488ffd490c12e15b4a54527ea59812cb/68747470733a2f2f696d616765732e637265646c792e636f6d2f696d616765732f34336561626662632d303664342d343633332d396265302d3066353663666264623630372f696d6167652e706e67',
    'https://camo.githubusercontent.com/753f67dcfb61de8f7b80ee0f9f11afc4b3a7f0d92429d98a9a2e1365d68a763e/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f36663435383336352d656136302d343465372d616364642d3838643964643131346366322f696d6167652e706e67',
    'https://camo.githubusercontent.com/e3b5d64d5d04f31f1a5773328a00fe98cfa46794e9c6dcbd1c10fad575b89954/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f33643130623566352d333837642d346362662d393865632d6134313832333166623135372f696d6167652e706e67',
    'https://camo.githubusercontent.com/fef9861afa66f21790cb98caa05b7b134451e1940cb95e6c0c77cd790470d271/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f33336564323931302d393735302d343631332d616132612d3539306538343563366564622f696d6167652e706e67',
    'https://camo.githubusercontent.com/8d579577747eefc89624629fff03f3141535d20bdb14061a58f3ed7a9ff83a00/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f39613032353565622d613437642d346633612d393631312d3234336266653365623965342f696d6167652e706e67',
    'https://camo.githubusercontent.com/80d8484527f4883c45d6e9f1d700685db54414c444d758bd704b6a9be39556ef/68747470733a2f2f696d616765732e637265646c792e636f6d2f696d616765732f32643137393764352d316465372d343737382d383937352d3965356336656337336131612f696d6167652e706e67',
    'https://camo.githubusercontent.com/a4e1c26ffdb551a0bfe1582b75e7af2fdd3719c15253f9b9a3f7d1858a26a059/68747470733a2f2f696d616765732e637265646c792e636f6d2f73697a652f363830783638302f696d616765732f61396430666538392d613131632d343236362d383934302d3965636137373632623239342f696d6167652e706e67',
    'https://camo.githubusercontent.com/f970667c2fbe45dedc2e640041b04af7e8eb3622eb7ba810c27c31ca338a4bee/68747470733a2f2f696d616765732e637265646c792e636f6d2f696d616765732f34306265653530322d613562332d343336352d393065372d3537656564353036373539342f696d6167652e706e67'
  ],
  hackerrank: [
    { url: 'https://www.hackerrank.com/certificates/5e3fa1e94629', imgPath: '/images/certification/hackerrank/angular_basic.png', title: 'Angular (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/d1d63731af16', imgPath: '/images/certification/hackerrank/java_basic.png', title: 'Java (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/020b4959a88f', imgPath: '/images/certification/hackerrank/frontend_react.png', title: 'React (Frontend)' },
    { url: 'https://www.hackerrank.com/certificates/50a52d314c99', imgPath: '/images/certification/hackerrank/software_intern.png', title: 'Software Engineer Intern' },
    { url: 'https://www.hackerrank.com/certificates/39e3bf52a775', imgPath: '/images/certification/hackerrank/software.png', title: 'Software Engineer' },
    { url: 'https://www.hackerrank.com/certificates/5e15656f44d4', imgPath: '/images/certification/hackerrank/python_basic.png', title: 'Python (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/4b74836a0112', imgPath: '/images/certification/hackerrank/csharp_basic.png', title: 'C# (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/e3b602d783ea', imgPath: '/images/certification/hackerrank/css_basic.png', title: 'CSS (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/be281b57353c', imgPath: '/images/certification/hackerrank/javascript_basic.png', title: 'JavaScript (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/495b882b9d58', imgPath: '/images/certification/hackerrank/problemsolving_basic.png', title: 'Problem Solving (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/0117fd9c703b', imgPath: '/images/certification/hackerrank/react_basic.png', title: 'React (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/ec55fcb614dd', imgPath: '/images/certification/hackerrank/node_basic.png', title: 'Node.js (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/ee082188b74f', imgPath: '/images/certification/hackerrank/go_basic.png', title: 'Go (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/94e38fd63e61', imgPath: '/images/certification/hackerrank/sql_basic.png', title: 'SQL (Basic)' },
    { url: 'https://www.hackerrank.com/certificates/1899a60cae65', imgPath: '/images/certification/hackerrank/javascript_intermediate.png', title: 'JavaScript (Intermediate)' },
    { url: 'https://www.hackerrank.com/certificates/4f4565eea3db', imgPath: '/images/certification/hackerrank/restapi_intermediate.png', title: 'REST API (Intermediate)' },
    { url: 'https://www.hackerrank.com/certificates/3c75f05393e3', imgPath: '/images/certification/hackerrank/problemsolving_intermediate.png', title: 'Problem Solving (Intermediate)' },
    { url: 'https://www.hackerrank.com/certificates/fc509bae81ca', imgPath: '/images/certification/hackerrank/sql_advanced.png', title: 'SQL (Advanced)' },
    { url: 'https://www.hackerrank.com/certificates/6888440efd46', imgPath: '/images/certification/hackerrank/node_intermediate.png', title: 'Node.js (Intermediate)' },
    { url: 'https://www.hackerrank.com/certificates/fc5f7df56416', imgPath: '/images/certification/hackerrank/go_intermediate.png', title: 'Go (Intermediate)' },
    { url: 'https://www.hackerrank.com/certificates/bc88dfc103a1', imgPath: '/images/certification/hackerrank/angular_basic.png', title: 'Angular (Basic)' }
  ],
  patents: [
    {
      title: "Method and apparatus for predicting time of arrival",
      abstract: "A method and apparatus for predicting time of arrival (TOA) of a vehicle at a destination. The method includes receiving current location data of the vehicle and historical location data of the vehicle, generating a predictive model based on the historical location data, and predicting the TOA at the destination based on the current location data and the predictive model.",
      number: "US11527259B2",
      url: "https://patents.google.com/patent/US11527259B2",
      date: "2023-09-19"
    },
    {
      title: "Method and apparatus for identifying distracted behavior",
      abstract: "A method and apparatus for identifying distracted behavior of a person. The method includes receiving motion data from a device, analyzing the motion data to identify patterns indicative of distracted behavior, and generating an alert when distracted behavior is detected.",
      number: "US11488516B2",
      url: "https://patents.google.com/patent/US11488516B2",
      date: "2023-08-01"
    }
  ]
};

export default function Certifications() {
  const { imageUrls, patents } = defaultCertifications;

  return (
    <section id="certifications" className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-white mb-6">Certifications & Patents</h2>

      <div className="space-y-12">
        {/* Patents */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Patents</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {patents.map((patent, idx) => (
              <div key={idx} className="card-3d">
                <a
                  href={patent.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-3d-inner block bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-lg overflow-hidden transform transition-all duration-200 shadow-sm hover:shadow-md hover:border-slate-300"
                >
                  <div className="relative p-6">
                    {/* Badge Header */}
                    <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-xs font-semibold">
                      Issued Patent
                    </div>
                    
                    {/* Patent Seal - Circular badge effect */}
                    <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full border-8 border-blue-300/20 flex items-center justify-center">
                      <div className="text-blue-600/10 text-xs font-mono rotate-45">
                        USPTO PATENT
                      </div>
                    </div>

                    {/* Patent Icon */}
                    <div className="absolute left-6 top-6 w-12 h-12 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-8 h-8 text-blue-600/80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 2L4 7l8 5 8-5-8-5zM4 12l8 5 8-5M4 17l8 5 8-5"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 4.5l-3 1.5 3 1.5M9 7.5l3 1.5-3 1.5"
                        />
                      </svg>
                    </div>

                    {/* Content */}
                    <div className="relative pl-14">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 pr-24">{patent.title}</h4>
                      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{patent.abstract}</p>
                      <div className="flex items-center gap-4 text-xs">
                        <div className="bg-slate-100 px-2 py-1 rounded">
                          <span className="font-semibold text-gray-900">{patent.number}</span>
                        </div>
                        <div className="text-gray-500">
                          Issued {new Date(patent.date).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* HackerRank Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">HackerRank Certifications</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {defaultCertifications.hackerrank.map((cert) => (
              <div key={cert.url} className="card-3d">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-3d-inner block bg-white border border-slate-200 rounded-lg p-3 transform transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <img
                    src={cert.imgPath}
                    alt={cert.title}
                    className="w-full h-40 object-contain rounded bg-white"
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* IBM Professional Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Professional Certifications</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {imageUrls.map((imageUrl, idx) => (
              <div key={idx} className="card-3d">
                <div className="card-3d-inner block bg-white border border-slate-200 rounded-lg p-3 transform transition-all duration-200 shadow-sm hover:shadow-md">
                  <img
                    src={imageUrl}
                    alt={`Certificate ${idx + 1}`}
                    className="w-full h-40 object-contain rounded bg-white"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((patent, idx) => (
            <div key={idx} className="card-3d">
              <a
                href={patent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-3d-inner block bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-lg overflow-hidden transform transition-all duration-200 shadow-sm hover:shadow-md hover:border-slate-300"
              >
                <div className="relative p-6">
                  {/* Badge Header */}
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 rounded-bl-lg text-xs font-semibold">
                    Issued Patent
                  </div>
                  
                  {/* Patent Seal - Circular badge effect */}
                  <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full border-8 border-blue-300/20 flex items-center justify-center">
                    <div className="text-blue-600/10 text-xs font-mono rotate-45">
                      USPTO PATENT
                    </div>
                  </div>

                  {/* Patent Icon */}
                  <div className="absolute left-6 top-6 w-12 h-12 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-blue-600/80"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2L4 7l8 5 8-5-8-5zM4 12l8 5 8-5M4 17l8 5 8-5"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 4.5l-3 1.5 3 1.5M9 7.5l3 1.5-3 1.5"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="relative pl-14">
                    <h4 className="text-lg font-bold text-gray-900 mb-2 pr-24">{patent.title}</h4>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">{patent.abstract}</p>
                    <div className="flex items-center gap-4 text-xs">
                      <div className="bg-slate-100 px-2 py-1 rounded">
                        <span className="font-semibold text-gray-900">{patent.number}</span>
                      </div>
                      <div className="text-gray-500">
                        Issued {new Date(patent.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
