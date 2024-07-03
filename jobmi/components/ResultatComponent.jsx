import React from 'react'
import Image from 'next/image';

const stagesFormations = {
    "https://zupimages.net/up/24/26/gj3p.png": [
        { title: "Stage Gestion des Zones à Atmosphère Contrôlée", duration: "6 mois", link: "https://www.cidj.com/stage/stage-6-mois-gestion-des-zones-a-atmosphere-controlee-h-f-vitry-sur-seine-0" },
        { title: "Stage Assistant Laboratoire", duration: "2 mois", link: "https://www.welcometothejungle.com/fr/companies/900-care/jobs/stage-assistant-e-laboratoire_paris?q=b07ed64fab85f9c6c0bac2fc0c7ae002&o=29899f8d-7084-4db9-9abc-4e76d0c24c9c" },
        { title: "Stage Biotechnologies", duration: "2 mois", link: "https://www.welcometothejungle.com/fr/companies/onima/jobs/stage-biotechnologies-2-mois_evry-courcouronnes?q=b07ed64fab85f9c6c0bac2fc0c7ae002&o=a107653f-0772-414d-8e93-6e9655af5d0d" }
    ],
    "https://zupimages.net/up/24/26/rga6.png": [
        { title: "Assistant Création de Contenus", duration: "2 mois", link: "https://www.welcometothejungle.com/fr/companies/rouje/jobs/assistant-creation-de-contenus_paris_ROUJE_Yy4rQWe?q=82f34870f20164a2d175ac37e7c2a841&o=97a296f9-e72a-4b43-bdfe-d29d6a83bfcf" },
        { title: "Stage Graphisme et Création de Contenus", duration: "2 mois", link: "https://www.welcometothejungle.com/fr/companies/yay/jobs/stage-graphisme-et-creation-de-contenus_paris?q=82f34870f20164a2d175ac37e7c2a841&o=c14c80bd-5d34-4173-b186-4757a2083402" },
        { title: "Product Designer Stage", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/captain-contrat/jobs/product-designer-stage_paris?q=a4bb99483b0b5162f08bfcd84f22e778&o=9ec9faef-1932-4673-a016-fb3037b9324d" }
    ],
    "https://zupimages.net/up/24/26/mahp.png": [
        { title: "Stage Développeur Full Stack", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/equancy/jobs/stage-developpeur-full-stack-h-f_paris?q=c451db72a61eb75434e0adda8e00b0a3&o=1d86e834-317b-4909-a4c6-99c227fbfaf2" },
        { title: "Développeur Full Stack", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/amiral-gestion/jobs/developpeur-full-stack-stage_paris?q=c451db72a61eb75434e0adda8e00b0a3&o=a8e1230e-45eb-489f-9506-183929c00356" },
        { title: "Développeur(se) Frontend Stage", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/bene-bono/jobs/developpeur-se-frontend-stage-paris_paris?q=c451db72a61eb75434e0adda8e00b0a3&o=fd6987e9-4751-4c52-84e4-49f1777c99b8" }
    ],
    "https://zupimages.net/up/24/26/rqtw.png": [
        { title: "Stage Soignant", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+soignant&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=8408eb1445e46e4f" },
        { title: "Stage Diététicienne", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+diététicienne&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=8db741143adfd8df" },
        { title: "Stage Soignant", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+soignant&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=516122a87d3898ea" }
    ],
    "https://zupimages.net/up/24/26/7wma.png": [
        { title: "Accountant Intern", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/toucan-toco/jobs/accountant-intern_paris?q=d48f4ba756cf1fe7364fc50bdcff1314&o=3a277e6a-f6ef-4617-90cd-31b347679dbb" },
        { title: "Data Analyst IA", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/dataleon/jobs/data-analyst-ia-stage-h-f_paris_DATAL_lxeaAwx?q=5d0fde6135e94b30002d0cc0773f7f59&o=0c97fcd3-4f01-44a6-bf92-280417ba71ee" },
        { title: "Stage", duration: "6 mois", link: "https://fr.indeed.com/jobs?q=stage&l=Paris+%2875%29&from=searchOnHP&vjk=4bbaca0714fe127c&advn=6981731124978951" }
    ],
    "https://zupimages.net/up/24/26/k4fp.png": [
        { title: "Stage Chargé de Veille Programmes", duration: "6 mois", link: "https://www.cidj.com/stage/stage-charge-de-veille-programmes-f-h-paris" },
        { title: "Stage Assistant Community Manager", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/publicis-france-1/jobs/stage-assistant-community-manager-f-h_paris?q=d48f4ba756cf1fe7364fc50bdcff1314&o=3d7ab86a-e634-4f3e-8b48-7185f8e51b5a" },
        { title: "Chargé de Communication Junior", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/la-ruche-qui-dit-oui/jobs/charge-de-communication-junior_paris?q=ea69ce596be5413ac15e763f26f1cbe3&o=8298016c-86c2-42c0-ae1c-6abc1137a49e&p=true" }
    ],
    "https://zupimages.net/up/24/26/vyuz.png": [
        { title: "Stage Assistant Chef de Marque Suzi Wan", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/mars-france/jobs/stage-assistant-chef-de-marque-suzi-wan-h-f-x-juillet-2024_paris?q=f0fac9896afa8ef1ead9c3851903aeda&o=4ade01e7-5145-4599-bb08-5c26bf6ed79d" },
        { title: "Stage Assistant(e) Chef de Projet", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/hopscotch/jobs/stage-assistant-e-chef-de-projet-hopscotch-event-h-f_paris_HG_wbboXdk?q=ea69ce596be5413ac15e763f26f1cbe3&o=2ccb6730-4169-4040-8156-3502e64b60e6&p=true" },
        { title: "Stage Assistant Chef de Projet Digital Media", duration: "6 mois", link: "https://www.welcometothejungle.com/fr/companies/l-oreal/jobs/stage-de-6-mois-assistant-chef-de-projet-digital-media-website-juillet-2024_levallois-perret?q=d4e624643ef34409c97825031540743b&o=c6575025-fc82-4f14-91de-59f8e41fdedf" }
    ],
    "https://zupimages.net/up/24/26/12j9.png": [
        { title: "Stage Art", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+art&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=d7810dfe24868984&advn=4629412499192798" },
        { title: "Stage Art", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+art&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=274253e541b34911" },
        { title: "Stage Art", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+art&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=6273c72a137acd94" }
    ],
    "https://zupimages.net/up/24/26/g9o0.png": [
        { title: "Stage Tourisme", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+tourisme&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=0cf7903b51120c44" },
        { title: "Stage Tourisme", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+tourisme&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=abae3c029b12bbd9" },
        { title: "Stage Photo", duration: "2 mois", link: "https://fr.indeed.com/jobs?q=stage+photo&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=5867f0fb8201d5ae" }
    ],
    "https://zupimages.net/up/24/26/khqj.png": [
        { title: "Stage Ingénieur", duration: "6 mois", link: "https://fr.indeed.com/jobs?q=stage+ing%C3%A9nieur&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=ce65c2e12a801de0&advn=8565895322733034" },
        { title: "Stage Ingénieur", duration: "6 mois", link: "https://fr.indeed.com/jobs?q=stage+ing%C3%A9nieur&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=e3426f2b531ea1c5" },
        { title: "Stage Ingénieur", duration: "6 mois", link: "https://fr.indeed.com/jobs?q=stage+ing%C3%A9nieur&l=Paris+%2875%29&from=searchOnDesktopSerp&vjk=f25cbb08b6edcdb4" }
    ]
};


export const ResultatComponent = ({ results, image }) => {

    const selectedOffers = stagesFormations[image] || [];

    return (
        <div className="results-container max-w-4xl mx-auto p-8 rounded-lg text-center flex sm:flex-row flex-col gap-10">
            <div>
                <header className="results-header mb-4">
                    <h1 className="text-3xl font-bold text-gray-800">BRAVO pour ton GRAND pas !</h1>
                    <p className="text-lg text-gray-600 mt-2">Pour accéder à tes résultats...<br />...crées ton compte</p>
                </header>
                <div id="result-card" className="result-card mb-8">
                    <Image src={image} alt="Resultat Image" width={300} height={400} className="mx-auto" />
                </div>
            </div>

            <div>
                <section className="offers-section mt-8">
                    <h2 className="text-2xl font-bold mb-4">
                        Découvre nos offres faites pour toi !
                    </h2>
                    <p className="text-lg mb-8">
                        Voici une sélection de stages qui correspond aux résultats de ton test.
                    </p>
                    <div className="offers flex flex-col gap-2 justify-around sm:mx-0 mx-2">
                    {selectedOffers.map((offer, index) => (
                        <div key={index} className="offer-card bg-gray-100 p-5 rounded-lg w-full sm:text-left">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">
                                {offer.title}
                            </h3>
                            <div className='flex flex-row gap-1 my-1'>
                                <img src="/media/test/icon-stopwatch.svg" alt="Icone d'un chronomètre" />
                                <p className="text-lg">{offer.duration}</p>
                            </div>
                            
                            <Link href={offer.link} target="_blank" rel="noopener noreferrer">
                                <button className="px-4 py-2 bg-violet text-white rounded-lg hover:bg-purple-800">Postuler</button>
                            </Link>
                        </div>
                    ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
