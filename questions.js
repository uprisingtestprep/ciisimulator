const QUESTIONS = [
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A 3-year-old boy has had liver abscesses with Staphylococcus aureus, pneumonia with Burkholderia cepacia, and cervical lymphadenitis with Serratia marcescens. His neutrophil count is normal. Which test most directly identifies his underlying defect?",
    "options": {
      "A": "Flow cytometry for CD18 expression on the surface of circulating neutrophils",
      "B": "Dihydrorhodamine flow cytometry measuring the neutrophil oxidative burst after stimulation",
      "C": "Serum immunoglobulin levels with IgG subclass quantification and vaccine titers",
      "D": "CH50 assay measuring total hemolytic activity of the classical complement pathway from C1 through C9"
    },
    "answer": "B",
    "explanation": "Measuring CD18 expression screens for leukocyte adhesion deficiency, which presents with infections lacking pus, delayed cord separation, and marked neutrophilia rather than catalase-positive abscesses and granulomas. Quantifying immunoglobulins and vaccine responses evaluates humoral immunity, whose failure produces sinopulmonary infections with encapsulated bacteria, not recurrent Serratia and Burkholderia abscesses. Total hemolytic complement testing detects complement component deficiencies, which predispose to Neisseria or lupus-like disease, and would be normal in a phagocyte oxidative burst disorder.",
    "id": 1
  },
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A 34-year-old woman starting fingolimod for multiple sclerosis asks how it prevents relapses. The drug's mechanism is best described as which of the following?",
    "options": {
      "A": "Blockade of alpha4beta7 integrin binding to MAdCAM-1 on gut endothelium",
      "B": "Depletion of CD20-positive B lymphocytes from the blood, lymph nodes, and other secondary lymphoid organs",
      "C": "Neutralization of CCL19 and CCL21 so naive lymphocytes cannot enter nodes",
      "D": "Functional antagonism of the sphingosine-1-phosphate receptor, trapping lymphocytes inside lymph nodes"
    },
    "answer": "D",
    "explanation": "Blocking alpha4beta7 binding to MAdCAM-1 is the mechanism of vedolizumab, which restricts lymphocyte homing to intestinal tissue in inflammatory bowel disease. Depleting CD20-positive B cells describes rituximab and related antibodies, which remove B lymphocytes rather than sequestering all lymphocyte subsets. Neutralizing the CCR7 ligands would impair entry into nodes rather than exit; fingolimod instead prevents lymphocytes from following the sphingosine-1-phosphate gradient out of the node, producing the observed peripheral lymphopenia.",
    "id": 2
  },
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A 9-month-old boy has had two episodes of invasive pneumococcal disease. During both, he appeared surprisingly well, with minimal fever and a C-reactive protein far lower than expected. His lymphocyte subsets and immunoglobulins are normal. Which defect is most likely?",
    "options": {
      "A": "IRAK-4 deficiency impairing signaling downstream of MyD88-dependent Toll-like receptors",
      "B": "Absent splenic marginal zone function from congenital asplenia with Howell-Jolly bodies",
      "C": "A terminal complement component deficiency abolishing membrane attack complex formation",
      "D": "X-linked agammaglobulinemia with failed B-cell development and absent antibody"
    },
    "answer": "A",
    "explanation": "Congenital asplenia certainly predisposes to pneumococcal sepsis, but it does not blunt fever or the acute-phase response, and the smear would show Howell-Jolly bodies. Terminal complement deficiency predisposes to Neisseria bacteremia and meningitis rather than pneumococcus, and inflammation remains vigorous. Agammaglobulinemia is excluded by the normal immunoglobulins, and antibody-deficient children still mount fever and high acute-phase reactants; the combination of pyogenic infection with a paradoxically weak inflammatory response is the signature of IRAK-4 or MyD88 deficiency.",
    "id": 3
  },
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A 58-year-old man with rheumatoid arthritis on tocilizumab develops a perforated diverticulum. His temperature is 37.2 C and CRP is 4 mg/L. Which statement best explains these findings?",
    "options": {
      "A": "TNF blockade has prevented tissue factor induction and masked his peritonitis",
      "B": "His rheumatoid arthritis is quiescent, so systemic inflammatory responses are proportionally reduced",
      "C": "IL-6 receptor blockade suppresses hepatic CRP synthesis and hypothalamic fever responses",
      "D": "Corticosteroid premedication given with each infusion is suppressing the acute-phase response"
    },
    "answer": "C",
    "explanation": "Tocilizumab blocks the IL-6 receptor, not TNF, and tissue factor biology relates to coagulation rather than to fever or CRP production. Disease quiescence would not abolish the response to frank peritonitis, since acute infection generates its own cytokine surge regardless of baseline arthritis activity. Routine corticosteroid premedication is not part of standard tocilizumab administration and would not lower CRP this profoundly; the drug itself removes the principal hepatic stimulus for CRP, so treated patients can harbor serious infection with deceptively normal markers.",
    "id": 4
  },
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A 4-year-old girl has recurrent fevers, urticaria-like rash triggered by cold exposure, conjunctivitis, and progressive sensorineural hearing loss. Genetic testing shows a gain-of-function NLRP3 mutation. Which therapy targets the cytokine driving her disease?",
    "options": {
      "A": "Etanercept, a soluble receptor fusion protein that binds and neutralizes TNF",
      "B": "Anakinra, a recombinant antagonist blocking the interleukin-1 receptor from engaging its ligand",
      "C": "Secukinumab, a monoclonal antibody neutralizing circulating interleukin-17A produced by activated Th17 lymphocytes",
      "D": "Dupilumab, an antibody against the shared interleukin-4 receptor alpha chain"
    },
    "answer": "B",
    "explanation": "Neutralizing TNF helps many arthritides but does not address cryopyrin-associated periodic syndromes, where the mutant inflammasome overproduces caspase-1-activated cytokines. Blocking interleukin-17A treats psoriasis and axial spondyloarthritis, pathways downstream of Th17 cells rather than the inflammasome. Antagonizing the interleukin-4 receptor treats type 2 inflammation in atopic dermatitis and asthma; the NLRP3 inflammasome instead matures interleukin-1beta, so receptor-level blockade of interleukin-1 is the mechanistically matched therapy.",
    "id": 5
  },
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A 26-year-old man undergoes splenectomy after trauma. Three years later he presents with two hours of rigors and is hypotensive within another hour. Blood cultures grow gram-positive diplococci. Which immunologic loss best explains this fulminant course?",
    "options": {
      "A": "Loss of marginal zone B cells and resident macrophages that clear opsonized encapsulated bacteria",
      "B": "Loss of hepatic Kupffer cells and their portal filtration of gut-derived organisms entering the bloodstream",
      "C": "Failure of neutrophil rolling from deficient endothelial selectin ligand expression",
      "D": "Absent terminal complement components preventing direct lysis of the organism"
    },
    "answer": "A",
    "explanation": "Kupffer cells reside in the liver and remain intact after splenectomy; they cannot substitute for splenic clearance of poorly opsonized encapsulated organisms early in bacteremia. Selectin ligand deficiency describes leukocyte adhesion deficiency type 2, a congenital fucosylation defect unrelated to surgical asplenia. Terminal complement deficiency predisposes to Neisseria rather than pneumococcus, and complement synthesis is unaffected by splenectomy; the spleen's marginal zone B cells and macrophages are precisely the machinery for rapid antibody responses to polysaccharide capsules and blood filtration.",
    "id": 6
  },
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A previously healthy 17-year-old girl is evaluated for a third episode of disseminated cutaneous herpes simplex with viremia. Neutrophil count, immunoglobulins, and T-cell subsets are normal. Flow cytometry shows nearly absent CD3-negative CD56-positive lymphocytes. Which killing mechanism has she principally lost?",
    "options": {
      "A": "Antibody-initiated activation of the classical complement cascade on infected keratinocytes",
      "B": "Oxidative burst killing of virus-infected cells within phagolysosomes of tissue macrophages",
      "C": "Interferon-gamma-mediated activation of macrophages to restrict intracellular viral replication",
      "D": "Perforin and granzyme cytotoxicity triggered when inhibitory receptors detect missing MHC class I"
    },
    "answer": "D",
    "explanation": "Classical complement activation on infected cells contributes little to herpesvirus control and her humoral system is intact by testing. Oxidative burst chemistry is designed for ingested bacteria and fungi inside phagocytes, not for recognizing virally infected host cells. Interferon-gamma activation of macrophages matters most for intracellular bacteria such as mycobacteria, and her T cells remain normal; the absent population is NK cells, whose missing-self surveillance kills infected cells that have downregulated class I to escape cytotoxic T lymphocytes.",
    "id": 7
  },
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A 61-year-old man with gout asks why a joint full of uric acid crystals becomes acutely inflamed overnight. Which sequence correctly describes the initiating molecular events?",
    "options": {
      "A": "Crystals bind TLR3 in endosomes, activating TRIF and producing type I interferon",
      "B": "Crystals activate the alternative complement pathway, and C3a alone recruits neutrophils",
      "C": "Crystal uptake activates NLRP3, which assembles with ASC to activate caspase-1 and release IL-1beta",
      "D": "Crystals crosslink IgE on synovial mast cells, releasing histamine and leukotrienes"
    },
    "answer": "C",
    "explanation": "TLR3 is an endosomal sensor of double-stranded RNA from viruses and does not recognize crystalline material, and its TRIF pathway yields interferon rather than the neutrophilic storm of gout. Complement surfaces can be engaged by crystals, but anaphylatoxins are accessory; the committed step generating the dominant cytokine is inflammasome assembly. IgE crosslinking on mast cells drives allergic reactions to specific antigens, and urate is not an IgE ligand; monosodium urate is a classic NLRP3 activator whose product, interleukin-1beta, explains the efficacy of interleukin-1 blockade in refractory gout.",
    "id": 8
  },
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A newborn's umbilical cord remains attached at 5 weeks. He later develops perirectal cellulitis with no visible pus, and his white cell count is 48,000/microL with 90 percent neutrophils. Which step of the leukocyte adhesion cascade has failed?",
    "options": {
      "A": "Integrin-mediated firm arrest on endothelial ICAM-1 due to absent CD18",
      "B": "Selectin-mediated rolling due to absent sialyl-Lewis X carbohydrate ligands",
      "C": "Chemokine-directed migration due to a defective CXCR1 receptor for interleukin-8",
      "D": "Transmigration between endothelial junctions due to congenitally absent PECAM-1"
    },
    "answer": "A",
    "explanation": "Absent sialyl-Lewis X defines leukocyte adhesion deficiency type 2, which produces a similar picture but arises from a fucose metabolism defect and includes the Bombay blood phenotype and developmental delay, a rarer diagnosis not suggested here. Isolated CXCR1 defects are not an established cause of this classic neonatal syndrome. PECAM-1 deficiency is not a recognized human immunodeficiency; delayed cord separation with pus-free infection and dramatic neutrophilia is the textbook presentation of CD18 integrin deficiency, in which cells roll but never firmly arrest.",
    "id": 9
  },
  {
    "domain": "immunology_foundations",
    "chapter": 1,
    "question": "A researcher studying lupus pathogenesis focuses on clearance of apoptotic cells. Deficiency of which molecule carries the highest lifetime risk of developing systemic lupus erythematosus?",
    "options": {
      "A": "Mannose-binding lectin, the recognition molecule that initiates the lectin complement pathway",
      "B": "Factor H, the plasma regulator restraining alternative pathway amplification on host surfaces",
      "C": "CD59, the membrane inhibitor preventing membrane attack complex insertion into host cells",
      "D": "C1q, the classical pathway recognition molecule that opsonizes apoptotic cellular debris"
    },
    "answer": "D",
    "explanation": "Mannose-binding lectin deficiency is common and only weakly associated with infection risk, not with a high-penetrance lupus phenotype. Factor H loss deregulates the alternative pathway and produces atypical hemolytic uremic syndrome and C3 glomerulopathy rather than lupus. CD59 deficiency, as in paroxysmal nocturnal hemoglobinuria, permits complement-mediated hemolysis of blood cells; it is C1q, the opsonin for dying cells, whose homozygous deficiency confers a lupus risk exceeding 90 percent, the strongest single-gene association known.",
    "id": 10
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "A 6-month-old boy has failure to thrive, oral candidiasis, and Pneumocystis pneumonia. Flow cytometry shows absent T cells, absent NK cells, and normal B-cell numbers with low immunoglobulins. Which molecular defect best explains this pattern?",
    "options": {
      "A": "RAG1 mutation abolishing VDJ recombination in both T-cell and B-cell precursors",
      "B": "Deletion of chromosome 22q11.2 with absent thymic development and hypocalcemia",
      "C": "Common gamma chain mutation disrupting signaling by IL-7 and IL-15 receptors",
      "D": "Adenosine deaminase deficiency with toxic metabolite accumulation in all lymphoid lineages"
    },
    "answer": "C",
    "explanation": "A recombinase defect blocks receptor gene rearrangement in both lymphocyte lineages, so B cells would be absent rather than preserved, and NK cells, which need no rearrangement, would survive. Thymic aplasia from the 22q11.2 deletion removes T cells but leaves both B cells and NK cells intact, and the vignette lacks the cardiac and parathyroid features. Adenosine deaminase deficiency poisons all lymphoid lineages, giving a T-negative, B-negative, NK-negative profile; only loss of the common gamma chain selectively removes T cells (IL-7 signaling) and NK cells (IL-15 signaling) while sparing B-cell numbers.",
    "id": 11
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "A 29-year-old man with HIV is about to start abacavir. Which statement best describes the purpose and mechanism behind the required pretreatment test?",
    "options": {
      "A": "HLA-B*57:01 typing identifies patients in whom the drug alters self-peptide presentation, causing hypersensitivity",
      "B": "Thiopurine methyltransferase activity predicts marrow toxicity from impaired drug methylation and clearance",
      "C": "HLA-B*15:02 typing predicts Stevens-Johnson syndrome in patients of Southeast Asian ancestry",
      "D": "CYP2D6 genotyping identifies ultrarapid metabolizers who would fail to reach therapeutic levels"
    },
    "answer": "A",
    "explanation": "Thiopurine methyltransferase testing guides azathioprine and mercaptopurine dosing and has no role with nucleoside analogs like abacavir. The B*15:02 association concerns carbamazepine-induced epidermal necrolysis, a different drug and allele, though the principle of HLA-restricted drug reactions is shared. CYP2D6 status affects drugs like codeine and tamoxifen, not abacavir hypersensitivity; abacavir binds within the B*57:01 groove and reshapes the displayed self-peptide repertoire, so carriers mount a T-cell attack, and screening is mandatory before first use.",
    "id": 12
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "During thymic development, a double-positive thymocyte whose newly assembled receptor binds self-peptide-MHC on cortical epithelium with intermediate avidity will most likely undergo which fate?",
    "options": {
      "A": "Immediate deletion by apoptosis in the cortex before any lineage commitment occurs",
      "B": "Diversion into the natural regulatory T-cell lineage with FOXP3 induction",
      "C": "Death by neglect from failure to receive any survival signal through the receptor",
      "D": "Positive selection with survival and commitment to the CD4 or CD8 lineage"
    },
    "answer": "D",
    "explanation": "Deletion is the penalty for high-avidity self-recognition, applied chiefly in the medulla during negative selection, not the outcome of moderate binding in the cortex. Regulatory T-cell diversion is an alternative fate for relatively high-avidity self-reactive CD4 cells, again at the strong end of the signaling spectrum. Death by neglect befalls thymocytes whose receptors cannot engage self-MHC at all; the intermediate-avidity window is precisely what positive selection rewards, matching lineage to the MHC class recognized.",
    "id": 13
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "A 4-year-old boy has recurrent sinopulmonary infections, Pneumocystis pneumonia at age 2, and chronic watery diarrhea with Cryptosporidium. Laboratories show IgM 380 mg/dL with IgG 90 mg/dL and undetectable IgA. Which interaction has failed?",
    "options": {
      "A": "AID-mediated deamination of switch-region DNA within activated germinal center B cells",
      "B": "CD40 ligand on activated T cells engaging CD40 on B cells and macrophages",
      "C": "Complement fragment C3d engaging the CD21 coreceptor to lower activation thresholds",
      "D": "BTK signaling downstream of the pre-B receptor during marrow B-cell development"
    },
    "answer": "B",
    "explanation": "AID deficiency produces the same immunoglobulin pattern but spares cellular immunity, so opportunists like Pneumocystis and Cryptosporidium would not appear; those organisms mark failed macrophage and dendritic cell licensing. Coreceptor amplification through C3d tunes response magnitude and its loss does not create a hyper-IgM phenotype with opportunistic infection. A BTK defect arrests B-cell development, producing near-absent B cells and panhypogammaglobulinemia including low IgM; preserved IgM with absent switched isotypes plus opportunistic infection is the signature of CD40 ligand deficiency.",
    "id": 14
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "A melanoma patient on ipilimumab develops headache, fatigue, and hypotension. MRI shows an enlarged pituitary. Which mechanism connects the drug to this presentation?",
    "options": {
      "A": "Removal of a high-affinity brake that normally outcompetes CD28 for B7, permitting autoreactive T-cell priming",
      "B": "Direct antibody-mediated destruction of pituitary cells expressing the drug's tumor target antigen",
      "C": "Cytokine release syndrome from engineered receptor T cells activated against pituitary tissue",
      "D": "Reactivation of latent hypophyseal infection through blockade of interferon-gamma signaling pathways"
    },
    "answer": "A",
    "explanation": "Ipilimumab targets CTLA-4 on T cells, not a tumor antigen shared by pituitary cells, so direct cytotoxic targeting of the gland by the antibody misstates the mechanism, although ectopic CTLA-4 expression in the pituitary may contribute to why this gland suffers. Cytokine release from engineered cells belongs to CAR T-cell therapy, not checkpoint antibodies. Interferon pathway blockade is not the drug's action; by neutralizing the receptor that normally restrains priming, the drug licenses autoreactive clones, and hypophysitis is a recognized, often permanent, immune-related toxicity.",
    "id": 15
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "A 7-year-old girl has had chronic mucocutaneous candidiasis, two staphylococcal skin abscesses described as minimally tender and barely inflamed, and a pneumonia complicated by pneumatocele. She has retained several primary teeth. Serum IgE is 12,000 IU/mL. Which signaling lesion is most likely?",
    "options": {
      "A": "Gain-of-function STAT1 mutation enhancing interferon signaling and suppressing IL-17 responses",
      "B": "Loss of the IL-12 receptor beta1 chain preventing Th1 lineage commitment",
      "C": "Dominant-negative STAT3 mutation blocking Th17 differentiation and IL-6 family signaling",
      "D": "FOXP3 mutation eliminating regulatory T cells and unleashing multiorgan autoimmunity"
    },
    "answer": "C",
    "explanation": "STAT1 gain-of-function does cause chronic candidiasis, but it does not produce the cold abscesses, pneumatoceles, retained teeth, or extreme IgE of this connective tissue and immune syndrome. IL-12 receptor loss impairs interferon-gamma production and presents with disseminated mycobacterial and Salmonella disease rather than candidal and staphylococcal barrier infections. FOXP3 loss causes IPEX, an autoimmunity syndrome of infancy with enteropathy and diabetes; the combination described is autosomal dominant hyper-IgE syndrome, where defective STAT3 removes Th17-dependent barrier defense.",
    "id": 16
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "Which statement correctly explains why conjugating a bacterial capsular polysaccharide to a carrier protein improves vaccine performance in infants?",
    "options": {
      "A": "The protein carrier activates the alternative complement pathway, amplifying opsonization of the vaccine",
      "B": "Polysaccharide-specific B cells present carrier-derived peptides on class II and receive T-cell help",
      "C": "Conjugation converts the polysaccharide into a superantigen that activates many T-cell clones",
      "D": "The carrier protein directly stimulates TLR4, providing the adjuvant signal infants otherwise lack"
    },
    "answer": "B",
    "explanation": "Complement activation by the carrier is not the operative mechanism and would not by itself create memory or class switching. Superantigens crosslink class II to T-cell receptor beta chains outside the groove and cause pathology, not focused immunity; conjugates do nothing of the kind. Carrier proteins are not TLR4 agonists, and adjuvanting is a separate formulation issue; the conjugate works because a B cell that binds capsule internalizes the whole complex, displays carrier peptides, and thereby recruits follicular helper T cells, converting a T-independent response into a switched, memory-forming one.",
    "id": 17
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "A lymphoma biopsy shows follicular architecture, and cytogenetics reveals t(14;18) placing BCL2 under the immunoglobulin heavy-chain enhancer. Which normal germinal center process does this translocation subvert?",
    "options": {
      "A": "Somatic hypermutation, by redirecting AID activity away from the variable-region hotspots",
      "B": "Class-switch recombination, by deleting the constant-region genes needed for IgG production",
      "C": "Antigen retrieval from follicular dendritic cells, by blocking immune complex deposition",
      "D": "Apoptotic elimination of centrocytes that fail selection for improved antigen binding"
    },
    "answer": "D",
    "explanation": "The translocation does not relocate hypermutation activity; mutation of variable regions can proceed while the lesion acts elsewhere. Constant-region genes remain available, and switching is not the checkpoint being escaped. Immune complex display on follicular dendritic cells is a stromal function untouched by a B-cell-intrinsic translocation; the germinal center normally kills the many centrocytes whose mutated receptors fail affinity-based selection, and constitutive BCL2 grants survival without selection, which is why follicular lymphoma is a tumor of the light zone's discarded candidates.",
    "id": 18
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "A newborn screening program reports undetectable T-cell receptor excision circles on a dried blood spot. Which biological fact makes this assay a valid screen for severe combined immunodeficiency?",
    "options": {
      "A": "Excision circles are episomal byproducts of receptor gene rearrangement that do not replicate with cell division",
      "B": "Excision circles are produced exclusively by B cells completing light-chain rearrangement in marrow",
      "C": "Excision circles encode the CD3 zeta chain required for surface receptor expression",
      "D": "Excision circles integrate into the genome and permanently mark every mature lymphocyte"
    },
    "answer": "A",
    "explanation": "The circles measured by the newborn assay arise during T-cell receptor alpha locus rearrangement in thymocytes, not from B-cell light-chain events, which generate distinct kappa-deleting element circles used in separate assays. The circles are noncoding rearrangement byproducts and encode no signaling chain. They never integrate; precisely because they are episomal, nonreplicating leftovers of recent thymic output, their abundance reflects new T-cell production, and their absence flags a failed thymus regardless of which of the many SCID genotypes is responsible.",
    "id": 19
  },
  {
    "domain": "immunology_foundations",
    "chapter": 2,
    "question": "A 62-year-old woman with rheumatoid arthritis maintained on rituximab for four years asks why her childhood measles immunity persists despite therapy that depletes B cells. Which explanation is most accurate?",
    "options": {
      "A": "Rituximab spares memory B cells, which continuously secrete the antibody that maintains her titer",
      "B": "Measles antibody is produced by T cells once B-cell help becomes unavailable",
      "C": "Long-lived plasma cells lack CD20 and continue secreting antibody from marrow niches",
      "D": "Residual antibody from childhood persists passively because IgG is never catabolized"
    },
    "answer": "C",
    "explanation": "Memory B cells are quiescent and secrete little antibody; they are also CD20-positive and are depleted by the drug rather than spared. T cells cannot synthesize immunoglobulin under any circumstances, with or without help available. Passive persistence is impossible because IgG is continuously catabolized with a half-life near three weeks, so a titer maintained for decades requires ongoing synthesis; that synthesis comes from long-lived plasma cells, which downregulate CD20 and therefore sit outside the reach of anti-CD20 therapy.",
    "id": 20
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "A 19-year-old college student recovers from his second episode of meningococcal meningitis, this time caused by serogroup Y. His brother had meningococcal sepsis at age 15. Which test result is most likely in this patient between episodes?",
    "options": {
      "A": "Low C3 and low C4 consistent with ongoing classical pathway consumption",
      "B": "Absent AH50 activity with a preserved and normal CH50 result",
      "C": "Isolated low C4 with a normal C3 and diminished C1 inhibitor function",
      "D": "Undetectable CH50 with normal individual levels of C3 and C4"
    },
    "answer": "D",
    "explanation": "Consumption of both C3 and C4 marks active immune complex disease such as lupus, not an inherited terminal component deficiency in a currently well patient. An absent alternative pathway assay with intact total hemolytic complement would localize the defect to factor B, factor D, or properdin, but the CH50 requires terminal components and would also be abolished by the C5 through C9 defect this history suggests. Low C4 with reduced C1 inhibitor function is the signature of hereditary angioedema, a bradykinin disease without meningococcal risk; recurrent and familial Neisseria disease with unusual serogroups points to a terminal pathway deficiency, which eliminates hemolytic activity while leaving component levels of C3 and C4 untouched.",
    "id": 21
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "A 31-year-old woman has recurrent episodes of painless, nonpruritic swelling of the hands and lips and two prior episodes of severe abdominal pain that resolved spontaneously. Epinephrine and antihistamines have never helped. Which mediator directly produces her swelling?",
    "options": {
      "A": "Histamine released from mast cells after crosslinking of receptor-bound immunoglobulin E",
      "B": "Bradykinin generated by kallikrein escaping inhibition by a deficient serpin",
      "C": "C5a produced by unrestrained cleavage of C5 during terminal pathway activation",
      "D": "Leukotriene C4 synthesized by eosinophils recruited into subcutaneous tissue"
    },
    "answer": "B",
    "explanation": "Histamine-driven angioedema is itchy, urticarial, and responsive to antihistamines and epinephrine, none of which describes this presentation. C5a is an anaphylatoxin and chemoattractant, but hereditary angioedema attacks proceed without terminal complement activation, and C5-directed therapy has no role. Cysteinyl leukotrienes contribute to asthma and some allergic swelling, again within histamine-pathway disease; C1 inhibitor is a serpin restraining kallikrein and factor XIIa, and its deficiency lets kallikrein generate bradykinin, the direct mediator of vascular leak in this disease.",
    "id": 22
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "A previously healthy 24-year-old man develops dark morning urine, fatigue, and an unprovoked hepatic vein thrombosis. Flow cytometry shows a granulocyte population lacking CD55 and CD59. Which mechanism explains his hemolysis?",
    "options": {
      "A": "Loss of GPI-anchored regulators leaves red cells unable to dissociate convertases or block C9 polymerization",
      "B": "An acquired autoantibody against factor H permits alternative pathway attack on the renal endothelium",
      "C": "IgG autoantibodies against red cell Rh antigens direct splenic macrophage destruction of erythrocytes",
      "D": "A germline PIGA mutation inherited from his mother abolishes anchor synthesis in all tissues"
    },
    "answer": "A",
    "explanation": "Factor H autoantibodies produce atypical hemolytic uremic syndrome, a thrombotic microangiopathy with kidney injury and schistocytes rather than a clonal population missing surface regulators. Warm autoantibodies against Rh antigens cause extravascular, spleen-mediated hemolysis with a positive direct antiglobulin test, not the intravascular chronic hemolysis with hemoglobinuria seen here. A germline PIGA lesion is essentially not observed because complete deficiency is lethal in development; the disease arises from a somatic PIGA mutation in a hematopoietic stem cell, whose progeny lack the GPI-anchored proteins CD55 and CD59 and therefore cannot restrain convertase assembly or membrane attack complex completion on their own surfaces.",
    "id": 23
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "A term newborn has petechiae, hepatosplenomegaly, and intracranial calcifications. Which laboratory finding would most strongly support congenital rather than postnatal infection?",
    "options": {
      "A": "High-titer pathogen-specific IgG in the newborn's serum during the first week",
      "B": "Pathogen-specific IgA detected in the mother's serum at the time of delivery",
      "C": "Elevated pathogen-specific IgM in the newborn's serum drawn on day two",
      "D": "A fourfold rise in the infant's IgG titer measured between months two and four"
    },
    "answer": "C",
    "explanation": "IgG in a newborn is overwhelmingly maternal, delivered across the placenta by FcRn, so a high titer in the first week documents the mother's immunity rather than the infant's infection. Maternal serum IgA describes the mother's own mucosal immune history and never crosses the placenta in relevant amounts. A rising infant IgG over later months can reflect either resolving passive antibody kinetics or postnatally acquired infection and lacks specificity for prenatal timing; IgM is a pentamer that cannot cross the placenta, so its presence in a two-day-old is the infant's own synthesis and marks infection acquired in utero.",
    "id": 24
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "A hospital committee reviews requirements before starting patients on eculizumab. Beyond meningococcal vaccination with both MenACWY and MenB, many programs add daily penicillin prophylaxis. Which rationale best supports the added antibiotic?",
    "options": {
      "A": "Vaccination cannot restore the terminal lytic mechanism the drug removes, so breakthrough disease remains possible",
      "B": "The drug neutralizes vaccine-induced antibody directly, making all prior immunization ineffective",
      "C": "Penicillin enhances opsonization of encapsulated organisms by increasing hepatic C3 synthesis",
      "D": "C5 blockade prevents B cells from class switching, so vaccines cannot generate IgG responses"
    },
    "answer": "A",
    "explanation": "The antibody blocks C5, not immunoglobulins, and it neither binds nor clears vaccine-induced antibody. Penicillin has no effect on complement synthesis; its role is simply killing colonizing meningococci before invasion. C5 sits downstream of the opsonization and B-cell coreceptor functions of C3, and class switching proceeds normally on treatment; the problem is that vaccine antibody works against Neisseria substantially through membrane attack complex lysis, which the drug abolishes, so vaccinated patients on C5 blockade still develop meningococcal disease at high rates and an added layer of protection is justified.",
    "id": 25
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "A 4-year-old boy has had eight episodes of otitis media, two pneumonias, and chronic giardiasis. IgG is 210 mg/dL, IgA undetectable, IgM 20 mg/dL, and circulating CD19-positive B cells are absent. Which infection is he also at particular risk of failing to control?",
    "options": {
      "A": "Disseminated infection with Mycobacterium avium complex despite normal macrophage function",
      "B": "Chronic enteroviral meningoencephalitis with persistent central nervous system infection",
      "C": "Reactivation of latent cytomegalovirus with retinitis and colitis",
      "D": "Invasive aspergillosis with angioinvasive pulmonary nodules and halo sign"
    },
    "answer": "B",
    "explanation": "Mycobacterial control depends on the IL-12 and interferon-gamma axis with intact T cells and macrophages, which agammaglobulinemia spares. Cytomegalovirus containment is the work of T cells and NK cells, and reactivation disease marks cellular immunodeficiency such as transplantation or advanced HIV. Aspergillus is policed by neutrophils and their oxidative burst, threatened in neutropenia and chronic granulomatous disease; the historic lesson of X-linked agammaglobulinemia is that antibody, including immunoglobulin replacement, is what contains enteroviruses, and affected boys are prone to chronic enteroviral meningoencephalitis, formerly seen after live oral polio vaccine as well.",
    "id": 26
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "During pneumococcal conjugate vaccine development, investigators measure opsonophagocytic killing rather than antibody binding alone. Which pairing of antibody property and effector mechanism best explains protection against this organism?",
    "options": {
      "A": "IgE bound to mast cell receptors triggering histamine release upon capsular contact",
      "B": "Secretory IgA in serum activating the terminal pathway on the bacterial surface",
      "C": "IgG anticapsular antibody engaging Fc-gamma receptors and fixing C3b for phagocyte capture",
      "D": "Monomeric IgM crossing into tissue and neutralizing pneumolysin at the alveolar surface"
    },
    "answer": "C",
    "explanation": "IgE and mast cells defend against helminths and drive allergy; they play no protective role against encapsulated bacteria. Secretory IgA works by immune exclusion at mucosal surfaces and is a poor complement activator, and its secretory form is not a serum effector. IgM circulates as a pentamer confined largely to the vasculature and does not exist as a tissue-penetrating monomeric secreted form; pneumococcal protection tracks with IgG that opsonizes the capsule for Fc receptor binding and deposits C3b, which is exactly the function an opsonophagocytic assay measures.",
    "id": 27
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "A 44-year-old woman with cryoglobulinemic vasculitis has palpable purpura and glomerulonephritis. Complement testing shows C4 below the detection limit with a modestly reduced C3. Which mechanism accounts for this pattern?",
    "options": {
      "A": "Immune complexes engage C1q and drive classical pathway consumption that depletes C4 disproportionately",
      "B": "An inherited C4 null allele has abolished synthesis without any ongoing complement activation",
      "C": "Alternative pathway tickover consumes C4 continuously on the surface of cryoglobulin aggregates",
      "D": "Hepatic failure from cryoglobulin deposition has halted synthesis of all complement proteins"
    },
    "answer": "A",
    "explanation": "An inherited null allele produces a stable, isolated reduction and would not explain the accompanying fall in C3 or the active vasculitis. The alternative pathway does not use C4 at all; its convertase is built from C3b and factor B, so tickover cannot deplete C4 regardless of the surface involved. Global hepatic synthetic failure would lower many proteins together, including albumin and coagulation factors, a picture not described; cryoglobulin immune complexes are avid classical pathway activators, and because C4 sits early in that pathway and circulates at lower abundance, its consumption outpaces C3, producing the very low C4 with modestly reduced C3 that typifies this disease.",
    "id": 28
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "A 6-month-old exclusively breastfed infant has an IgG level roughly half the newborn value. His pediatrician explains the physiologic nadir. Which pair of processes defines this trough?",
    "options": {
      "A": "Accelerating maternal IgA transfer through milk and delayed infant IgM synthesis",
      "B": "Decay of transplacentally acquired maternal IgG and the slow maturation of infant IgG production",
      "C": "Splenic sequestration of maternal antibody and premature class switching to IgE",
      "D": "FcRn-mediated destruction of maternal IgG and compensatory infant IgD secretion"
    },
    "answer": "B",
    "explanation": "Breast milk IgA acts locally in the infant gut and does not enter the circulation in amounts that shape serum IgG levels, and infant IgM synthesis begins early rather than late. The spleen does not sequester maternal antibody, and class switching to IgE is neither premature nor a feature of this period. FcRn protects IgG from catabolism rather than destroying it, and IgD is never a compensatory serum antibody; the nadir at three to six months is simply maternal IgG decaying with its three-week half-life while the infant's own germinal center output matures, the window in which X-linked agammaglobulinemia first declares itself.",
    "id": 29
  },
  {
    "domain": "immunology_foundations",
    "chapter": 3,
    "question": "A researcher engineers a therapeutic anti-tumor antibody and removes fucose from its Fc glycan, substantially increasing binding to CD16 (FcgammaRIIIa). Which effector function has been deliberately enhanced?",
    "options": {
      "A": "Neutralization of a soluble growth factor by higher-affinity antigen binding",
      "B": "Classical complement activation through improved C1q engagement by clustered Fc regions",
      "C": "Transport of the antibody across mucosal epithelium by the polymeric immunoglobulin receptor",
      "D": "NK cell-mediated killing of antibody-coated tumor cells through directed granule release"
    },
    "answer": "D",
    "explanation": "C1q engagement depends on Fc regions and their clustering geometry but is not governed by the fucosylation change that strengthens CD16 binding; complement fixation is a separate engineering axis. The polymeric immunoglobulin receptor transports J chain-containing IgA and IgM, never IgG, so epithelial transcytosis is unaffected. Antigen-binding affinity lives in the Fab arms and is untouched by Fc glycan editing; CD16 is the activating Fc receptor on NK cells, so afucosylation specifically strengthens antibody-dependent cellular cytotoxicity, the strategy behind glycoengineered antibodies such as obinutuzumab.",
    "id": 30
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "A 34-year-old man who underwent splenectomy after trauma presents with two hours of rigors and confusion. Blood pressure is 74/40 mm Hg and petechiae are spreading. Which organism is the most likely cause of this syndrome?",
    "options": {
      "A": "Streptococcus pneumoniae seeding the blood after nasopharyngeal colonization escapes splenic clearance",
      "B": "Pseudomonas aeruginosa translocating across injured gut mucosa during a period of neutropenia",
      "C": "Listeria monocytogenes spreading cell to cell using actin polymerization within macrophages",
      "D": "Staphylococcus aureus secreting protein A to block opsonization by circulating IgG antibody"
    },
    "answer": "A",
    "explanation": "Overwhelming post-splenectomy infection is classically pneumococcal, because the spleen is the organ that filters poorly opsonized encapsulated bacteria from blood and mounts rapid marginal-zone IgM responses to polysaccharide. Pseudomonas translocation is the signature threat of chemotherapy-induced neutropenia with mucosal injury, not asplenia, and nothing here suggests a low neutrophil count. Listeria exploits deficient cell-mediated immunity in pregnancy, steroid use, and old age, and its cell-to-cell spread is irrelevant to splenic filtration. Staphylococcal protein A is a real evasion molecule, but S. aureus is not the organism whose clearance depends on the spleen, and fulminant sepsis with petechiae in an asplenic host is an encapsulated-organism story.",
    "id": 31
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "A 19-year-old woman has her second episode of meningococcal meningitis in three years, this time with serogroup Y. She recovers quickly with therapy. Which underlying defect best explains these episodes?",
    "options": {
      "A": "Absent splenic marginal zone B cells producing early IgM against polysaccharide capsular antigens",
      "B": "Failure of the NADPH oxidase respiratory burst within neutrophils ingesting catalase-positive organisms",
      "C": "Deficiency of a terminal complement component preventing membrane attack complex formation on Neisseria",
      "D": "Loss of interferon-gamma receptor signaling preventing macrophage activation against intracellular bacterial pathogens"
    },
    "answer": "C",
    "explanation": "Recurrent invasive meningococcal disease, particularly with less common serogroups and comparatively mild individual episodes, is the signature of C5 through C9 deficiency, since Neisseria is uniquely dependent on direct membrane attack complex lysis for its control. Splenic dysfunction predisposes primarily to fulminant pneumococcal sepsis rather than recurrent, survivable meningococcal disease with unusual serogroups. A failed respiratory burst defines chronic granulomatous disease, whose organisms are catalase-positive bacteria and molds, not Neisseria. Interferon-gamma receptor defects produce disseminated mycobacterial and Salmonella infections because they cripple macrophage activation, a pathway Neisseria control does not depend on.",
    "id": 32
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "A patient receiving induction chemotherapy for acute myeloid leukemia has had an absolute neutrophil count below 200 cells per microliter for 16 days. She develops fever and a nodular lung lesion with a surrounding halo of ground-glass attenuation. Which pathogen is most likely?",
    "options": {
      "A": "Pneumocystis jirovecii causing diffuse ground-glass pneumonia in a lymphopenic host",
      "B": "Aspergillus fumigatus invading pulmonary vessels after prolonged loss of neutrophil-mediated hyphal killing",
      "C": "Streptococcus pneumoniae producing lobar consolidation after failure of splenic antibody responses",
      "D": "Mycobacterium avium complex disseminating because interferon-gamma cannot activate infected tissue macrophages"
    },
    "answer": "B",
    "explanation": "Prolonged profound neutropenia removes the effector cell responsible for killing hyphae, and a nodule with a halo sign is the classic radiographic signature of angioinvasive aspergillosis. Pneumocystis causes diffuse bilateral ground-glass disease in patients with impaired CD4 T cell immunity, not focal nodules in short-term neutropenia. Pneumococcus produces lobar pneumonia and needs no immune defect at all, but neither the duration of risk nor the halo-sign nodule fits, and splenic function is not the lesion here. Disseminated Mycobacterium avium complex reflects a failed IL-12/interferon-gamma axis or advanced HIV, defects of macrophage activation rather than neutrophil number.",
    "id": 33
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "A 28-year-old man with recurrent sinusitis and pneumonia since adolescence develops six weeks of bloating, foul-smelling diarrhea, and weight loss. Stool antigen testing identifies a flagellated protozoan. Which defense normally prevents this enteric infection?",
    "options": {
      "A": "Th1-derived interferon-gamma activating macrophages to kill organisms within an arrested phagosome",
      "B": "Eosinophil major basic protein released onto parasite surfaces coated with specific IgE",
      "C": "Membrane attack complex insertion into the outer membrane of the luminal pathogen",
      "D": "Secretory IgA in the intestinal lumen agglutinating trophozoites and blocking their epithelial adherence"
    },
    "answer": "D",
    "explanation": "Giardia lamblia is the classic luminal protozoan of antibody deficiency, controlled largely by secretory IgA-mediated immune exclusion at the mucosal surface, which fits a patient whose sinopulmonary history already suggests humoral failure. Interferon-gamma-activated macrophages control intracellular organisms such as mycobacteria and Toxoplasma, but Giardia lives in the gut lumen, outside any phagosome. IgE-armed eosinophils are the weapon against multicellular helminths, not protozoa, and giardiasis does not produce eosinophilia. Complement's membrane attack complex operates in plasma and tissue fluid against susceptible gram-negative bacteria, most importantly Neisseria, and cannot act on an organism in the intestinal lumen.",
    "id": 34
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "During a single season, a novel influenza A virus emerges carrying a hemagglutinin gene derived from an avian strain, and a pandemic follows. Which mechanism produced this virus?",
    "options": {
      "A": "Reassortment of segmented genomes during coinfection, exchanging entire hemagglutinin segments between strains",
      "B": "Gradual accumulation of point mutations in hemagglutinin under pressure from population antibody",
      "C": "Gene conversion events swapping expressed pilin sequences with silent chromosomal cassette copies",
      "D": "Programmed switching among a large genomic repertoire of variant surface glycoprotein genes"
    },
    "answer": "A",
    "explanation": "A wholesale swap of hemagglutinin from an avian source is antigenic shift, possible only because the influenza A genome exists as eight separate segments that reassort when two strains coinfect one host. Stepwise point mutation describes antigenic drift, which erodes vaccine matching from season to season but cannot introduce an entirely novel avian hemagglutinin at once. Pilin gene conversion is the antigenic variation strategy of Neisseria gonorrhoeae, a bacterium, and involves no viral genome segments. Switching among variant surface glycoprotein genes is how Trypanosoma brucei evades antibody during chronic infection and has nothing to do with influenza pandemics.",
    "id": 35
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "A 68-year-old woman on long-term prednisone for polymyalgia rheumatica presents with fever and meningitis. Cerebrospinal fluid culture grows a gram-positive rod with tumbling motility. Which feature of this organism most directly explains why her medication predisposed her to it?",
    "options": {
      "A": "A thick polysaccharide capsule preventing complement deposition and phagocyte attachment in the bloodstream",
      "B": "Escape from the phagosome and actin-based spread between cells, evading antibody and requiring T cell immunity",
      "C": "Secretion of an exotoxin whose systemic effects continue despite local containment of the organism",
      "D": "Production of IgA1 protease degrading secretory antibody along the respiratory mucosal surface"
    },
    "answer": "B",
    "explanation": "Listeria monocytogenes uses listeriolysin O to escape the phagosome and then spreads directly cell to cell on actin comet tails, so it lives where antibody cannot reach and is controlled by Th1-activated macrophages, exactly the defense corticosteroids suppress. A dominant antiphagocytic capsule describes pneumococcus and other extracellular organisms whose control depends on opsonizing antibody rather than cellular immunity. Toxin-mediated disease at a distance characterizes organisms like Corynebacterium diphtheriae and is neutralized by antibody, which steroids do not primarily impair. IgA1 protease production is a mucosal evasion tactic of pneumococcus, Haemophilus, and Neisseria, unrelated to intracellular survival or steroid risk.",
    "id": 36
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "Sputum microscopy in a patient with cavitary pneumonia shows organisms that retain carbol fuchsin after acid-alcohol decolorization. Which property of this pathogen most directly enables its long-term persistence inside host macrophages?",
    "options": {
      "A": "Downregulation of MHC class I on infected cells to avoid recognition by cytotoxic lymphocytes",
      "B": "Polymerization of host actin allowing direct passage into adjacent uninfected epithelial cells",
      "C": "Binding of immunoglobulin Fc regions in reversed orientation to neutralize opsonizing antibody",
      "D": "A mycolic acid-rich cell wall plus active arrest of phagosome maturation and acidification"
    },
    "answer": "D",
    "explanation": "Acid-fastness identifies mycobacteria, whose waxy mycolic acid wall resists enzymatic and chemical attack and whose blockade of phagosome maturation keeps the vacuole unacidified and unfused with lysosomes, permitting decades of intracellular persistence. MHC class I downregulation is a herpesvirus and other viral strategy against cytotoxic T cells, and it also invites natural killer cell attack through missing-self recognition. Actin-based cell-to-cell spread belongs to Listeria, a gram-positive rod that is not acid-fast. Reversed Fc binding describes staphylococcal protein A, an extracellular evasion of opsonization rather than a mechanism of intramacrophage survival.",
    "id": 37
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "A previously healthy 41-year-old woman from Thailand develops disseminated Mycobacterium abscessus infection with lymphadenitis and skin lesions. HIV testing is negative and CD4 counts are normal. Which acquired defect is most likely responsible?",
    "options": {
      "A": "Autoantibodies against granulocyte-macrophage colony-stimulating factor impairing alveolar macrophage surfactant clearance",
      "B": "Drug-induced neutropenia eliminating the phagocytes required for control of rapidly growing mycobacteria",
      "C": "Neutralizing autoantibodies against interferon-gamma preventing macrophage activation by Th1 lymphocytes",
      "D": "Acquired loss of terminal complement activity preventing lysis of the disseminating organism"
    },
    "answer": "C",
    "explanation": "Adult-onset disseminated nontuberculous mycobacterial disease in a previously healthy person, described most often in patients of Southeast Asian ancestry, is the signature of neutralizing anti-interferon-gamma autoantibodies, an acquired phenocopy of Mendelian defects in the IL-12/interferon-gamma axis. Anti-GM-CSF autoantibodies cause pulmonary alveolar proteinosis and predispose to cryptococcosis and Nocardia rather than this syndrome. Neutropenia selects for pyogenic bacteria and invasive molds, and mycobacterial control depends on activated macrophages rather than neutrophil number. Complement's membrane attack complex is decisive only for Neisseria, and its loss produces recurrent meningococcal disease, not disseminated mycobacterial infection.",
    "id": 38
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "Dimeric IgA transported across intestinal epithelium retains part of the polymeric immunoglobulin receptor after release into the lumen. What is the principal function of this retained fragment?",
    "options": {
      "A": "It activates the classical complement cascade on bacterial surfaces within the intestinal lumen",
      "B": "It shields the antibody from degradation by proteolytic enzymes in luminal secretions",
      "C": "It anchors the antibody to Fc receptors expressed on intraepithelial cytotoxic lymphocytes",
      "D": "It signals hepatocytes to increase synthesis of acute phase proteins during infection"
    },
    "answer": "B",
    "explanation": "The secretory component wraps dimeric IgA and protects it from the protease-rich environment of mucosal secretions, allowing the antibody to survive long enough to perform immune exclusion. Secretory IgA is deliberately noninflammatory and does not activate the classical complement pathway, which is precisely what makes it suitable for surfaces covered in commensals. It is not an anchor for lymphocyte Fc receptors, and intraepithelial lymphocytes do not hold IgA in place through the secretory component. Hepatic acute phase protein synthesis is driven by cytokines such as IL-6, an entirely separate system from mucosal antibody transport.",
    "id": 39
  },
  {
    "domain": "immunology_foundations",
    "chapter": 4,
    "question": "A 76-year-old woman completes a course of clindamycin and one week later develops profuse watery diarrhea with pseudomembranes on sigmoidoscopy. Which mechanism best explains why the antibiotic created her susceptibility?",
    "options": {
      "A": "Suppression of Paneth cell defensin secretion leaving the small bowel epithelium chemically undefended",
      "B": "Direct mucosal toxicity of the drug creating ulcerations that admit spore-forming luminal organisms",
      "C": "Depletion of secretory IgA allowing unchecked adherence of toxigenic bacteria to colonocytes",
      "D": "Loss of anaerobic flora that consume nutrients and sustain secondary bile acids inhibiting spore germination"
    },
    "answer": "D",
    "explanation": "Clostridioides difficile colitis is the canonical disease of lost colonization resistance: antibiotics deplete the anaerobic community whose nutrient competition and secondary bile acid production normally suppress spore germination and vegetative growth. Paneth cell defensin output is maintained by host epithelium and commensal signaling rather than abolished by a week of clindamycin, and the disease is colonic, not a small bowel defensin problem. The drug does not injure mucosa directly to admit spores; pseudomembranes are the result of toxins A and B acting after the organism blooms. Secretory IgA production continues during antibiotic therapy and its selective absence is not the lesion that antibiotics create.",
    "id": 40
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "A 41-year-old woman with recurrent pneumonia has a serum IgG of 510 mg/dL with normal IgA and IgM. Her physician wants to determine whether she can mount new antibody responses. Which approach best answers that question?",
    "options": {
      "A": "Repeat quantitative immunoglobulins in six weeks to confirm the low value is reproducible",
      "B": "Measure serotype-specific pneumococcal IgG before and four to six weeks after polysaccharide vaccination",
      "C": "Enumerate class-switched memory B cells by flow cytometry on a fresh whole blood specimen",
      "D": "Begin immunoglobulin replacement and assess whether her infection frequency declines over one year"
    },
    "answer": "B",
    "explanation": "The functional question is answered by challenging the immune system and measuring its output, and paired pre- and post-vaccination titers against polysaccharide and protein antigens are the standard method. Repeating static immunoglobulin levels confirms the number but says nothing about the ability to respond to a new antigen. Memory B cell enumeration is a useful phenotyping and prognostic tool in established common variable immunodeficiency but does not measure the response to a defined antigen challenge. Starting replacement first is exactly backwards, because infused donor IgG makes subsequent vaccine titers uninterpretable and forecloses the diagnostic evaluation before it happens.",
    "id": 41
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "An infant has severe recurrent infections. Flow cytometry shows absent T cells, present B cells, and absent NK cells. Which molecular defect best fits this pattern?",
    "options": {
      "A": "Adenosine deaminase deficiency, whose toxic metabolite accumulation is lethal to all developing lymphocyte lineages",
      "B": "RAG1 mutation abolishing V(D)J recombination in both the T cell and B cell precursor compartments",
      "C": "Bruton tyrosine kinase mutation arresting B cell development at the pre-B stage",
      "D": "Common gamma chain mutation disrupting the shared receptor subunit for interleukins 2, 7, and 15"
    },
    "answer": "D",
    "explanation": "A T-B+NK- phenotype points to the common gamma chain (or its partner kinase JAK3), because IL-7 signaling is required for T cell development and IL-15 for NK cell development, while B cells develop but function poorly without T cell help. Adenosine deaminase deficiency poisons all lymphocyte lineages and produces the T-B-NK- pattern. RAG defects abolish antigen receptor gene rearrangement, eliminating T and B cells while sparing NK cells, the T-B-NK+ pattern. A BTK mutation causes X-linked agammaglobulinemia, in which B cells alone are absent and T and NK cells are entirely normal.",
    "id": 42
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "A 20-year-old man recovering from his second episode of meningococcal meningitis undergoes complement testing. CH50 is nearly undetectable and AH50 is also nearly undetectable. Where does his defect most likely lie?",
    "options": {
      "A": "A terminal pathway component between C5 and C9, shared by both hemolytic assays",
      "B": "C2, which is the most common inherited complement deficiency among people of European ancestry",
      "C": "Properdin, the X-linked stabilizer of the alternative pathway convertase complex",
      "D": "C1q, the recognition molecule that initiates the classical pathway on antibody-coated target cells"
    },
    "answer": "A",
    "explanation": "Both hemolytic assays end in membrane attack complex formation, so simultaneous loss of CH50 and AH50 localizes the deficiency to shared machinery, C3 or the terminal components, and recurrent Neisseria makes the terminal pathway the expected lesion. C2 deficiency is confined to the classical pathway and would lower the CH50 while leaving the rabbit-cell AH50 intact. Properdin deficiency affects only alternative pathway amplification, producing a low AH50 with a preserved CH50. C1q deficiency likewise disables only classical initiation, and its dominant clinical association is lupus-like disease rather than a combined loss of both assays.",
    "id": 43
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "Four blood culture sets are drawn from a 58-year-old woman with fever after hip replacement. One anaerobic bottle grows coagulase-negative staphylococci at 62 hours; the other seven bottles remain negative. She is hemodynamically stable and the wound looks clean. What is the most appropriate interpretation?",
    "options": {
      "A": "True bacteremia requiring vancomycin and evaluation of the prosthesis for hematogenous seeding",
      "B": "Central line-associated bloodstream infection demonstrated by differential time to positivity between draw sites",
      "C": "Probable skin contamination at the time of the draw, given one positive set of four with delayed growth",
      "D": "Laboratory error in bottle handling, best resolved by discarding the result without repeat cultures"
    },
    "answer": "C",
    "explanation": "A single positive set out of four, a common skin commensal, prolonged time to positivity, and a well patient together form the classic contamination profile, and the correct response is clinical reassessment with repeat cultures if concern persists. Treating as true bacteremia with vancomycin on this evidence is precisely the unnecessary-therapy cascade that contamination causes, though prosthetic material would rightly lower the threshold if multiple sets were positive. Differential time to positivity applies to paired catheter and peripheral draws, which were not described here. Dismissing the result as pure laboratory error without any clinical follow-up ignores that contaminants originate at the bedside and that repeat evaluation is the safety net.",
    "id": 44
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "An Enterococcus faecalis isolate from a urine culture shows an ampicillin MIC of 2 micrograms per milliliter and a vancomycin MIC of 1 microgram per milliliter. A colleague concludes vancomycin is the more potent and therefore better drug. What is the flaw in this reasoning?",
    "options": {
      "A": "Vancomycin MICs cannot be measured accurately for enterococci because of their thick cell walls",
      "B": "Urine isolates require zone diameters from disk diffusion rather than any broth microdilution value",
      "C": "MIC values are interpretable only against each drug's own breakpoint, so numbers are not comparable across agents",
      "D": "The ampicillin result reflects a laboratory transcription error, since enterococci are intrinsically ampicillin resistant"
    },
    "answer": "C",
    "explanation": "Each MIC acquires meaning only when compared with that agent's breakpoint, which integrates achievable drug levels, pharmacodynamics, and outcome data, so a numerically lower MIC for one drug does not indicate superiority over another; here both values are susceptible, and ampicillin is in fact the preferred agent for susceptible E. faecalis. Vancomycin MICs are routinely and reliably measured for enterococci, and detecting vancomycin resistance genotypes is a core laboratory function. Disk diffusion and broth microdilution are both validated methods, and urine origin does not invalidate broth-based MICs. Enterococcus faecalis is generally ampicillin susceptible, unlike Enterococcus faecium, so a susceptible result is expected rather than erroneous.",
    "id": 45
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "A clinical laboratory identifies a blood culture isolate in minutes by smearing a colony onto a target plate and analyzing it in a mass spectrometer. Which principle underlies this identification?",
    "options": {
      "A": "Ionized microbial proteins travel through a flight tube at speeds set by mass, producing a species-specific spectrum",
      "B": "Fluorescent antibody probes bind species-specific surface antigens and are then quantified by laser cytometry",
      "C": "Amplified ribosomal RNA gene sequences are matched against a large curated bacterial genome database",
      "D": "Species-specific volatile metabolites are separated chromatographically and then detected by their retention times"
    },
    "answer": "A",
    "explanation": "MALDI-TOF mass spectrometry laser-desorbs and ionizes abundant microbial proteins, chiefly ribosomal proteins, and times their flight down a vacuum tube, yielding a mass spectrum matched to a reference database for identification. Fluorescent antibody binding read by lasers describes flow cytometry or direct fluorescent antigen testing, which plays no role in this instrument. Ribosomal gene sequencing is a genuine identification method for difficult isolates but is slower, sequence-based, and entirely distinct from protein mass spectrometry. Chromatographic separation of volatile metabolites describes gas chromatography approaches of an earlier era, not the desorption and time-of-flight measurement used here.",
    "id": 46
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "A hospitalized 70-year-old man with resolving diarrhea has a multiplex gastrointestinal panel sent, which returns positive only for Clostridioides difficile toxin gene. He formed stool this morning and received the test on formed stool by protocol error. What is the most accurate interpretation?",
    "options": {
      "A": "The result proves active C. difficile infection and mandates a ten-day course of oral vancomycin",
      "B": "The panel's toxin gene target has poor analytic sensitivity, so a negative culture is needed to exclude disease",
      "C": "A repeat panel on a second specimen is required, since single-specimen molecular results are unreliable",
      "D": "Detection of the toxin gene in formed stool likely represents colonization, not disease requiring treatment"
    },
    "answer": "D",
    "explanation": "Molecular detection of the toxin gene establishes that a toxigenic organism's DNA is present, not that toxin-mediated disease exists, and testing formed stool from a patient without active diarrhea is the textbook setting for detecting asymptomatic colonization, which affects a meaningful fraction of hospitalized adults and does not warrant therapy. Reflexively treating a molecular positive as proven infection is the exact overtreatment error stewardship programs target. The gene target's analytic sensitivity is high, not poor, which is why it detects colonization so readily, and toxigenic culture is a reference method rather than a required exclusion step. Repeating the panel on another specimen compounds the original error of testing without an appropriate clinical indication.",
    "id": 47
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "A pregnant woman at 12 weeks has a positive Toxoplasma IgM and positive IgG on routine testing. She is asymptomatic. Which test result would most strongly indicate that her infection occurred before conception?",
    "options": {
      "A": "A repeat IgM that remains positive at the same titer four weeks later",
      "B": "High-avidity Toxoplasma IgG, indicating antibody maturation over several months since infection",
      "C": "A fourfold rise in IgG titer between two specimens drawn three weeks apart",
      "D": "A negative Toxoplasma PCR performed on a maternal whole blood specimen"
    },
    "answer": "B",
    "explanation": "IgG avidity matures over months, so high-avidity antibody excludes infection within roughly the preceding three to four months and places the infection safely before conception, the decisive reassurance in early pregnancy. A persistently positive IgM is unhelpful because Toxoplasma IgM can remain detectable for a year or more after infection and IgM assays carry substantial false positive rates. A fourfold rise in IgG titer would indicate the opposite conclusion, an evolving recent infection. Maternal blood PCR lacks the sensitivity to exclude past or recent maternal infection and is a tool for diagnosing fetal infection on amniotic fluid, not for timing maternal seroconversion.",
    "id": 48
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "A 66-year-old woman on hemodialysis is admitted after elective spine surgery with fever. Procalcitonin on postoperative day one is 3.2 nanograms per milliliter. Which statement best guides interpretation of this value?",
    "options": {
      "A": "Recent major surgery and renal failure both raise procalcitonin, so this single value cannot establish bacterial infection",
      "B": "A value this high is diagnostic of bacteremia and empiric antibiotics should continue until cultures finalize",
      "C": "Procalcitonin is suppressed after surgery, so an elevated value strongly confirms a bacterial complication",
      "D": "Procalcitonin has no role in this patient because dialysis removes the analyte completely between measurements"
    },
    "answer": "A",
    "explanation": "Major surgery, trauma, burns, and cardiogenic shock all raise procalcitonin without infection, and renal impairment elevates baseline values because the analyte is renally cleared, so a single early postoperative level in a dialysis patient is uninterpretable alone and trends matter more. Calling any single value diagnostic of bacteremia inverts the marker's evidence base, which supports serial measurement mainly for antibiotic discontinuation decisions. Surgery elevates rather than suppresses procalcitonin, so the claim that an elevated postoperative value is doubly confirmatory has the physiology backwards. Dialysis alters kinetics but does not remove the marker completely or eliminate its use; the correct posture is cautious interpretation, not abandonment.",
    "id": 49
  },
  {
    "domain": "immunology_foundations",
    "chapter": 5,
    "question": "A 34-year-old nurse from a country with universal BCG vaccination is screened before starting a TNF inhibitor for inflammatory bowel disease. Which property makes an interferon-gamma release assay preferable to a tuberculin skin test here?",
    "options": {
      "A": "The assay reliably distinguishes latent tuberculosis infection from active tuberculosis disease",
      "B": "The assay maintains full sensitivity regardless of the degree of a patient's immunosuppression",
      "C": "A negative assay definitively excludes tuberculosis and removes the need for any further evaluation",
      "D": "The stimulating antigens come from a genomic region deleted from all BCG vaccine strains"
    },
    "answer": "D",
    "explanation": "IGRAs use ESAT-6 and CFP-10, peptides encoded in the RD1 region that is absent from every BCG strain, so prior vaccination cannot cause a positive result, which is the specific advantage in a BCG-vaccinated patient. Neither the IGRA nor the skin test can separate latent infection from active disease, a limitation both tests share. Sensitivity of the IGRA falls with advancing immunosuppression, and failed mitogen controls produce indeterminate results in exactly those patients. A negative result in an immunocompromised patient or one with compatible illness excludes nothing, and active disease evaluation always proceeds on clinical grounds, so the claim of definitive exclusion misstates the test's role.",
    "id": 50
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "A 9-month-old boy has had two pneumonias and recurrent otitis since age five months. Examination shows no visible tonsillar tissue and scanty cervical nodes. Which laboratory pattern is most likely?",
    "options": {
      "A": "Normal B cell numbers with reduced class-switched memory B cells and low IgG on serum testing",
      "B": "Absent circulating CD19 positive B cells with all immunoglobulin classes severely reduced and normal T cells",
      "C": "Profound T cell lymphopenia with absent proliferation to mitogens and undetectable thymic excision circles",
      "D": "Elevated serum IgM with low IgG and low IgA alongside markedly enlarged germinal centers on biopsy"
    },
    "answer": "B",
    "explanation": "Onset after maternal IgG wanes, plus absent tonsils and lymph nodes, points to X-linked agammaglobulinemia, in which arrested pre-B development leaves no circulating B cells and no immunoglobulin of any class while T cells remain normal. Normal B cell numbers with reduced switched memory cells describes common variable immunodeficiency, which presents later and does not abolish lymphoid tissue. Profound T cell lymphopenia with absent mitogen responses is severe combined immunodeficiency, which brings opportunistic infection and failure to thrive rather than isolated pyogenic disease. High IgM with giant germinal centers describes activation-induced cytidine deaminase deficiency, the opposite of the hypoplastic lymphoid tissue found here.",
    "id": 51
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "A 32-year-old woman with bronchiectasis and recurrent sinusitis is found to have IgG 380 mg/dL, IgA 9 mg/dL, and IgM 31 mg/dL, with poor pneumococcal vaccine responses and normal B cell numbers. She also has immune thrombocytopenia. Which complication should she be monitored for lifelong?",
    "options": {
      "A": "Progressive cerebellar degeneration with oculocutaneous telangiectasias appearing during the second decade",
      "B": "Sclerosing cholangitis following chronic Cryptosporidium infection of the biliary tree",
      "C": "Transfusion-associated anaphylaxis triggered by antibodies directed against donor immunoglobulin A",
      "D": "Granulomatous lymphocytic interstitial lung disease and an elevated risk of B cell lymphoma"
    },
    "answer": "D",
    "explanation": "She meets the construct for common variable immunodeficiency, whose noninfectious complications, granulomatous interstitial lung disease, autoimmune cytopenias, enteropathy, and lymphoma, cause most of the mortality and are not prevented by replacement therapy. Progressive ataxia with telangiectasias belongs to ataxia-telangiectasia, a childhood-onset DNA repair disorder with elevated alpha-fetoprotein rather than an adult antibody syndrome. Cryptosporidium-associated sclerosing cholangitis is the signature complication of CD40 ligand deficiency, a combined defect presenting in boys during infancy. Anti-IgA-mediated transfusion anaphylaxis is a recognized hazard of selective IgA deficiency, where IgG is normal, not of panhypogammaglobulinemia treated with replacement.",
    "id": 52
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "A 3-year-old boy has had Pneumocystis pneumonia, chronic diarrhea with Cryptosporidium, and recurrent sinusitis. Serum shows IgG 190 mg/dL, IgA 8 mg/dL, and IgM 310 mg/dL. Which defect explains both the isotype pattern and the opportunistic infections?",
    "options": {
      "A": "Activation-induced cytidine deaminase mutation preventing class switch recombination within the B cell itself",
      "B": "Bruton tyrosine kinase mutation arresting B cell development at the pre-B stage in marrow",
      "C": "CD40 ligand mutation removing T cell help for both class switching and macrophage activation",
      "D": "Common gamma chain mutation blocking interleukin 7 driven thymic T cell development entirely"
    },
    "answer": "C",
    "explanation": "Loss of CD40 ligand explains the hyper-IgM isotype pattern and the opportunistic infections together, because the same molecule that licenses B cell class switching also activates macrophages and dendritic cells, producing Pneumocystis pneumonia and Cryptosporidium cholangiopathy. A cytidine deaminase defect blocks switching inside the B cell only, leaving T cell help intact, so those patients get pyogenic infection with lymphoid hyperplasia and no opportunists. A Bruton tyrosine kinase defect abolishes B cells and all immunoglobulin classes, which cannot produce an elevated IgM. A common gamma chain defect causes severe combined immunodeficiency with profound T cell lymphopenia in infancy, a far more fulminant picture than described.",
    "id": 53
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "A newborn screen shows undetectable T cell receptor excision circles. Confirmatory flow cytometry shows absent T cells, present B cells, and absent NK cells. Which gene defect is most consistent?",
    "options": {
      "A": "Recombination activating gene 1, abolishing antigen receptor gene rearrangement in both lymphocyte lineages",
      "B": "Adenosine deaminase, whose metabolite accumulation is toxic to every developing lymphocyte lineage",
      "C": "Interleukin 7 receptor alpha chain, which is required for T cell but not natural killer cell development",
      "D": "Common gamma chain, the shared subunit needed for interleukin 7 and interleukin 15 signaling"
    },
    "answer": "D",
    "explanation": "Absent T and NK cells with preserved B cells reflects loss of the common gamma chain, since IL-7 signaling is required for T cell development and IL-15 signaling for NK development, and both receptors share that subunit. A RAG1 defect eliminates T and B cells while sparing NK cells, because only antigen receptor rearrangement fails. Adenosine deaminase deficiency destroys all three lineages, leaving no B cells either. An IL-7 receptor alpha defect spares NK cells entirely, since that chain has no role in NK development, giving present rather than absent NK numbers.",
    "id": 54
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "A 14-month-old girl is referred after a positive newborn screen was not acted upon. She has failure to thrive, thrush, and an interstitial pneumonia. While awaiting transplant evaluation, which measure most directly prevents an iatrogenic fatality?",
    "options": {
      "A": "Withholding live vaccines and transfusing only irradiated leukoreduced blood products when necessary",
      "B": "Beginning immunoglobulin replacement at a dose targeting a trough above 700 milligrams per deciliter",
      "C": "Obtaining pneumococcal and tetanus vaccine response titers to characterize the humoral compartment fully",
      "D": "Starting broad spectrum intravenous antibacterial therapy and continuing it until transplantation occurs"
    },
    "answer": "A",
    "explanation": "In a T cell deficient infant, a live vaccine can cause disseminated vaccine-strain disease and viable donor lymphocytes in unirradiated cellular products cause transfusion-associated graft-versus-host disease, both frequently fatal and both entirely preventable by one order set. Immunoglobulin replacement is genuinely indicated and helpful but does not avert either of those catastrophes. Vaccine response testing is pointless here, since a child who cannot make T cells cannot mount the responses and the diagnosis is already established by subsets. Indefinite broad antibacterial therapy neither addresses the viral and fungal threats of this disease nor prevents the two iatrogenic hazards named.",
    "id": 55
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "A 4-month-old infant has generalized erythroderma with exfoliation, alopecia, hepatosplenomegaly, eosinophilia of 4,200 cells per microliter, and IgE of 2,900 international units per milliliter. T cell count is normal but proliferation to mitogens is absent. Which diagnosis fits best?",
    "options": {
      "A": "Wiskott-Aldrich syndrome with eczema, small platelets, and progressive combined immune dysfunction",
      "B": "Omenn syndrome from hypomorphic recombination gene mutations permitting oligoclonal autoreactive T cells",
      "C": "Autosomal dominant STAT3 deficiency with eczematoid rash and staphylococcal abscesses lacking inflammation",
      "D": "Common variable immunodeficiency presenting unusually early with granulomatous skin and liver involvement"
    },
    "answer": "B",
    "explanation": "Erythroderma, alopecia, organomegaly, eosinophilia, and high IgE with a normal T cell count but absent proliferation is the classic trap of Omenn syndrome, where hypomorphic RAG mutations allow a few oligoclonal, autoaggressive T cells that are numerous yet functionally useless. Wiskott-Aldrich syndrome features thrombocytopenia with characteristically small platelets and does not produce neonatal exfoliative erythroderma with absent mitogen responses. STAT3 deficiency presents later with cold abscesses, pneumatoceles, and connective tissue findings including retained primary teeth, not infantile erythroderma with failed proliferation. Common variable immunodeficiency requires age over four years by definition and never abolishes mitogen responses.",
    "id": 56
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "A 2-year-old boy has eczema, bloody diarrhea, and platelets of 38,000 per microliter with a mean platelet volume of 5.1 femtoliters. Which finding best distinguishes his diagnosis from immune thrombocytopenia?",
    "options": {
      "A": "The presence of significant eczema, which is unusual in immune thrombocytopenia of childhood",
      "B": "The response of the platelet count to a trial of intravenous immunoglobulin at standard immune dosing",
      "C": "The small platelet size, since immune destruction releases characteristically large young platelets",
      "D": "The finding of bloody diarrhea, which never occurs with severe thrombocytopenia of any other cause"
    },
    "answer": "C",
    "explanation": "Microthrombocytopenia is the discriminating feature of Wiskott-Aldrich syndrome, because the WASp cytoskeletal defect produces intrinsically small platelets, whereas peripheral immune destruction drives compensatory release of large young platelets. Eczema is suggestive but not discriminating, since atopic dermatitis is common in toddlers and could coexist with immune thrombocytopenia by chance. A platelet response to immunoglobulin is unhelpful because counts in this syndrome can rise transiently with immunoglobulin as well. Bloody diarrhea reflects thrombocytopenic bleeding and can occur with profound thrombocytopenia from many causes, so it does not separate the two diagnoses.",
    "id": 57
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "A 3-year-old girl has an unsteady gait that has worsened over a year, frequent sinopulmonary infections, low IgA, and conjunctival telangiectasias. Which test most efficiently supports the suspected diagnosis?",
    "options": {
      "A": "Serum alpha-fetoprotein, which is elevated in the great majority of affected patients",
      "B": "Flow cytometry for CD40 ligand upregulation on activated circulating CD4 positive T cells",
      "C": "Dihydrorhodamine testing of neutrophils to document a defective oxidative respiratory burst",
      "D": "Serum immunoglobulin E level together with an absolute peripheral blood eosinophil count"
    },
    "answer": "A",
    "explanation": "Progressive ataxia with telangiectasias and antibody deficiency is ataxia-telangiectasia, and elevated serum alpha-fetoprotein, present in the large majority, is the practical screening test in a toddler before ATM sequencing. CD40 ligand expression testing addresses hyper-IgM syndrome, which produces neither ataxia nor telangiectasia. Dihydrorhodamine testing screens for chronic granulomatous disease, whose infections are catalase-positive abscesses without neurologic disease. IgE and eosinophil counts point toward hyper-IgE syndromes or Omenn syndrome, neither of which causes progressive cerebellar degeneration with oculocutaneous telangiectasias.",
    "id": 58
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "A neonate with an interrupted aortic arch has a seizure attributed to a calcium of 6.1 milligrams per deciliter, and newborn screening shows absent T cell receptor excision circles. Flow cytometry confirms profound T cell lymphopenia. Which definitive therapy is most appropriate?",
    "options": {
      "A": "Allogeneic hematopoietic stem cell transplantation from a matched unrelated donor after conditioning",
      "B": "Lifelong immunoglobulin replacement with trimethoprim-sulfamethoxazole prophylaxis and no cellular therapy",
      "C": "Cultured thymus tissue implantation, since the missing element is the organ that educates T cells",
      "D": "Lentiviral gene therapy of autologous stem cells to restore the defective lymphocyte signaling pathway"
    },
    "answer": "C",
    "explanation": "Conotruncal cardiac disease with hypocalcemia and absent thymic output is complete DiGeorge syndrome, an athymic state in which donor stem cells would have no thymus in which to mature, so cultured thymus tissue implantation is the definitive treatment. Allogeneic transplantation cures severe combined immunodeficiency caused by intrinsic lymphocyte defects but cannot substitute for a missing thymic microenvironment. Immunoglobulin replacement with prophylaxis is essential supportive care yet leaves the T cell compartment permanently absent. Gene therapy applies to defined single gene lymphocyte defects such as adenosine deaminase deficiency, not to a developmental failure of pharyngeal pouch derivatives.",
    "id": 59
  },
  {
    "domain": "immunodeficiency",
    "chapter": 6,
    "question": "An 11-year-old boy has recurrent staphylococcal skin abscesses that are notably not warm or tender, two pneumonias that healed with pneumatoceles, retained primary teeth, scoliosis, and an IgE of 4,100 international units per milliliter. Which mechanism underlies the absence of inflammation at his abscess sites?",
    "options": {
      "A": "Failure of neutrophils to generate reactive oxygen species within the phagosome after ingesting bacteria",
      "B": "Impaired STAT3 signaling downstream of interleukin 6, blunting the acute inflammatory response",
      "C": "Absence of beta 2 integrin expression preventing neutrophil adhesion and migration into infected tissue",
      "D": "Deficiency of terminal complement components preventing membrane attack complex assembly on bacteria"
    },
    "answer": "B",
    "explanation": "Job syndrome results from dominant-negative STAT3 mutations, and because STAT3 transduces IL-6 and supports Th17 responses, patients mount blunted inflammation, which is why their abscesses are classically cold, and the connective tissue and dental findings come from the same broad signaling role. A failed respiratory burst defines chronic granulomatous disease, which produces intensely inflamed granulomatous lesions rather than cold abscesses and no dental or skeletal features. Absent beta 2 integrin describes leukocyte adhesion deficiency, whose hallmarks are delayed umbilical cord separation and absent pus, without the very high IgE or pneumatoceles. Terminal complement deficiency causes recurrent neisserial infection and has no relationship to staphylococcal skin abscesses or high IgE.",
    "id": 60
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A 19-year-old man has his third staphylococcal liver abscess and a history of Serratia osteomyelitis at age 9. Neutrophil count and morphology are normal. Which test establishes the most likely diagnosis?",
    "options": {
      "A": "Dihydrorhodamine flow cytometry measuring the stimulated neutrophil oxidative burst",
      "B": "Flow cytometry for CD18 expression on the surface of circulating leukocytes",
      "C": "Serum CH50 with follow-up AH50 to screen both complement activation pathways",
      "D": "Bone marrow aspirate looking for promyelocyte-stage maturation arrest of granulocyte precursors"
    },
    "answer": "A",
    "explanation": "Recurrent abscesses with catalase-positive organisms (Staphylococcus aureus, Serratia) and normal neutrophil counts indicate a killing defect, chronic granulomatous disease, confirmed by an absent oxidative burst. Measuring CD18 expression diagnoses leukocyte adhesion deficiency, which presents with necrotic lesions lacking pus, marked neutrophilia, and delayed cord separation, none of which is described. Complement pathway screening with CH50 and AH50 detects deficiencies that cause Neisseria infection or lupus-like disease, not staphylococcal liver abscesses. A marrow examination for maturation arrest evaluates severe congenital neutropenia, excluded here by the repeatedly normal neutrophil count.",
    "id": 61
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A 6-week-old boy has omphalitis, and his umbilical cord separated at day 35. A necrotic buttock lesion shows no purulence. White cell count is 46,000 with 88 percent neutrophils. What is the underlying defect?",
    "options": {
      "A": "Absent NADPH oxidase activity preventing superoxide generation inside the neutrophil phagosome after ingestion",
      "B": "Failure of lysosomal trafficking producing giant granules and defective degranulation in phagocytes",
      "C": "Absent CD18 preventing firm integrin-mediated adhesion of neutrophils to inflamed endothelium",
      "D": "Elastase misfolding causing apoptosis of granulocyte precursors at the promyelocyte stage"
    },
    "answer": "C",
    "explanation": "Delayed cord separation, pus-free necrotic infections, and extreme neutrophilia define leukocyte adhesion deficiency type 1, in which neutrophils cannot exit the circulation. An oxidative burst failure causes chronic granulomatous disease, where pus and abscesses form readily and counts are normal. Giant granules with defective degranulation describe Chediak-Higashi syndrome, recognizable by partial albinism and smear findings rather than absent pus with neutrophilia. Precursor apoptosis from misfolded elastase causes severe congenital neutropenia, which features profound neutropenia, the opposite of this infant's count.",
    "id": 62
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A 23-year-old woman recovers from her second episode of meningococcal meningitis, this time caused by serogroup Y. Which screening result is most likely?",
    "options": {
      "A": "An undetectable serum C4 level with a normal C1q and normal C3",
      "B": "A markedly reduced CH50 with normal levels of individual C3 and C4",
      "C": "Profound monocytopenia with reduced B and natural killer cell counts on flow cytometry",
      "D": "A bimodal dihydrorhodamine histogram with one normal and one nonresponding neutrophil population"
    },
    "answer": "B",
    "explanation": "Recurrent or unusual-serogroup meningococcal disease suggests a terminal complement component deficiency, which abolishes hemolytic activity in the CH50 while individual C3 and C4 remain normal. An isolated low C4 with normal C1q points toward hereditary angioedema, a bradykinin-mediated swelling disorder without infection susceptibility. Monocytopenia with B and NK lymphopenia describes GATA2 haploinsufficiency, whose signature infections are nontuberculous mycobacteria and papillomavirus, not Neisseria. A bimodal dihydrorhodamine pattern identifies a carrier of X-linked chronic granulomatous disease, a phagocyte killing disorder unrelated to meningococcal risk.",
    "id": 63
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A 31-year-old woman has recurrent episodes of facial and hand swelling without urticaria and severe abdominal pain since adolescence. Epinephrine and antihistamines never help. C4 is low. What is the best acute attack treatment?",
    "options": {
      "A": "Intravenous methylprednisolone with diphenhydramine and famotidine continued until the swelling resolves completely",
      "B": "Nebulized epinephrine plus intramuscular epinephrine repeated every fifteen minutes as needed",
      "C": "Fresh frozen plasma as the preferred first-line agent whenever targeted therapies are available",
      "D": "Icatibant, a bradykinin B2 receptor antagonist, or intravenous C1 inhibitor concentrate"
    },
    "answer": "D",
    "explanation": "Angioedema without urticaria, abdominal attacks, low C4, and failure of allergy medications establish hereditary angioedema, mediated by bradykinin rather than histamine. Corticosteroids with H1 and H2 antihistamines target mast cell mediators and do not shorten bradykinin-driven attacks. Repeated epinephrine likewise addresses histaminergic anaphylaxis and is characteristically ineffective in this disease. Fresh frozen plasma contains C1 inhibitor but also supplies additional kininogen substrate and is reserved for settings where targeted agents are unavailable, never preferred over them.",
    "id": 64
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A 3-year-old boy has had pneumococcal meningitis and two episodes of staphylococcal sepsis, each with minimal fever and a C-reactive protein under 10 mg/L despite positive blood cultures. Lymphocyte subsets and immunoglobulins are normal. Which defect is most likely?",
    "options": {
      "A": "Deficiency of IRAK-4 disrupting Toll-like receptor and interleukin-1 receptor signaling",
      "B": "Deficiency of a terminal complement component preventing membrane attack complex assembly",
      "C": "Interferon-gamma receptor deficiency preventing macrophage activation against intracellular organisms",
      "D": "UNC93B1 deficiency impairing endosomal TLR3 delivery and neuronal interferon responses"
    },
    "answer": "A",
    "explanation": "Invasive pyogenic infections with blunted fever and a paradoxically low C-reactive protein are the signature of MyD88 or IRAK-4 deficiency, since these adaptors drive the acute phase response. Terminal complement deficiency confers susceptibility specifically to Neisseria species rather than pneumococcus and staphylococcus, and does not blunt inflammation. Interferon-gamma receptor loss produces disseminated mycobacterial and Salmonella disease, not gram-positive sepsis. A defect in endosomal TLR3 trafficking causes isolated herpes simplex encephalitis with intact antibacterial defenses.",
    "id": 65
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A previously healthy 34-year-old woman from Thailand develops disseminated Mycobacterium avium complex infection with lymphadenitis and osteomyelitis. HIV testing is negative and CD4 count is normal. Which acquired mechanism best explains her presentation?",
    "options": {
      "A": "Late-onset ELANE mutation causing intermittent oscillation of neutrophil production every three weeks",
      "B": "Neutralizing autoantibodies directed against interferon-gamma blocking macrophage activation signals",
      "C": "Somatic loss of NLRP3 preventing inflammasome assembly and interleukin-1 beta release",
      "D": "Acquired deficiency of properdin destabilizing the alternative pathway C3 convertase on bacterial surfaces"
    },
    "answer": "B",
    "explanation": "Disseminated nontuberculous mycobacterial disease in a previously healthy adult of Southeast Asian ancestry is the classic presentation of anti-interferon-gamma autoantibodies, an acquired phenocopy of the Mendelian IL-12/interferon-gamma axis defects. Cyclic neutrophil oscillation causes periodic fevers with mouth ulcers and occasional clostridial sepsis, not mycobacterial dissemination. Loss of inflammasome function would reduce IL-1 production and is not a described mechanism of mycobacterial susceptibility. Properdin deficiency, which is inherited and X-linked, predisposes specifically to meningococcal infection through impaired alternative pathway amplification.",
    "id": 66
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A 16-year-old Armenian boy has recurrent 48-hour episodes of fever with severe abdominal pain since age 8, once leading to a normal appendectomy. Between episodes he is entirely well. What is the best long-term management?",
    "options": {
      "A": "On-demand oral prednisone taken at the onset of each febrile episode to abort it",
      "B": "A trial of strict cold avoidance with anakinra reserved for breakthrough inflammatory episodes",
      "C": "Etanercept administered twice weekly to neutralize soluble tumor necrosis factor during attacks",
      "D": "Daily colchicine continued indefinitely to prevent attacks and secondary AA amyloidosis"
    },
    "answer": "D",
    "explanation": "Brief stereotyped febrile serositis attacks in a patient of Armenian ancestry indicate familial Mediterranean fever, and lifelong daily colchicine both suppresses attacks and prevents amyloid nephropathy even when breakthrough episodes persist. Single-dose corticosteroids abort episodes of PFAPA, a childhood syndrome with pharyngitis and aphthous ulcers, but have no preventive role in this disease. Cold avoidance with IL-1 blockade addresses familial cold autoinflammatory syndrome, where attacks follow cold exposure rather than occurring spontaneously. Anti-TNF therapy is a historical option for TRAPS, whose attacks last weeks with migratory myalgia and periorbital edema, a different phenotype entirely.",
    "id": 67
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A 4-month-old girl has had a daily urticaria-like rash since birth, irritability, and chronic aseptic meningitis with papilledema. NLRP3 testing reveals a de novo gain-of-function mutation. Which therapy addresses the underlying mechanism?",
    "options": {
      "A": "Daily colchicine titrated to bowel tolerance to inhibit neutrophil microtubule assembly and chemotaxis",
      "B": "High-dose intravenous immunoglobulin every four weeks to neutralize circulating inflammatory autoantibodies",
      "C": "Interleukin-1 blockade with daily anakinra to interrupt constitutive inflammasome-driven cytokine release",
      "D": "Interferon-gamma injections three times weekly to enhance macrophage oxidative killing capacity"
    },
    "answer": "C",
    "explanation": "Neonatal-onset multisystem inflammatory disease, the severe pole of the cryopyrin-associated periodic syndromes, is driven by constitutive NLRP3 inflammasome activation and overproduction of interleukin-1 beta, so IL-1 blockade is mechanism-directed and prevents deafness, arthropathy, and amyloidosis. Colchicine is the cornerstone of familial Mediterranean fever, a pyrin disease, and does not control cryopyrinopathies. Immunoglobulin infusions treat antibody deficiency and certain autoimmune conditions; no pathogenic autoantibody exists in this autoinflammatory disorder. Interferon-gamma augments phagocyte function in chronic granulomatous disease and mycobacterial susceptibility syndromes, mechanisms unrelated to inflammasome overactivity.",
    "id": 68
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A 33-year-old man has disseminated Mycobacterium kansasii, extensive flat warts, and a history of two invasive aspergillosis episodes. His differential shows zero monocytes, and flow cytometry shows absent B and NK cells with preserved neutrophils. What is the most likely diagnosis and definitive therapy?",
    "options": {
      "A": "GATA2 haploinsufficiency, for which allogeneic hematopoietic stem cell transplantation is definitive treatment",
      "B": "Chronic granulomatous disease, for which lifelong antibacterial and antifungal prophylaxis suffices as definitive care",
      "C": "IL-12 receptor beta-1 deficiency, treated definitively with prolonged antimycobacterial therapy plus interferon-gamma",
      "D": "Severe congenital neutropenia, treated definitively with daily granulocyte colony-stimulating factor injections"
    },
    "answer": "A",
    "explanation": "The MonoMAC picture of profound monocytopenia with absent B and NK cells, nontuberculous mycobacterial dissemination, refractory papillomavirus disease, and fungal infection defines GATA2 haploinsufficiency, and transplantation both restores immunity and preempts the associated myelodysplasia risk. Chronic granulomatous disease causes catalase-positive bacterial and fungal infection but has normal monocyte and lymphocyte counts, and prophylaxis manages rather than cures it. An IL-12 receptor defect produces mycobacterial and Salmonella disease with normal monocyte numbers and no papillomavirus phenotype. Severe congenital neutropenia presents in infancy with absent neutrophils, whereas this patient's neutrophils are preserved.",
    "id": 69
  },
  {
    "domain": "immunodeficiency",
    "chapter": 7,
    "question": "A 5-year-old boy with silvery hair, light irises, and recurrent skin abscesses develops fever, hepatosplenomegaly, and pancytopenia. His blood smear has always shown a distinctive finding. Which finding is it?",
    "options": {
      "A": "Dohle bodies with toxic granulation appearing in neutrophils during each febrile infectious episode",
      "B": "Howell-Jolly bodies within erythrocytes reflecting absent splenic filtration of nuclear remnants",
      "C": "Bilobed hyposegmented neutrophil nuclei with coarse chromatin resembling pince-nez spectacles",
      "D": "Giant azurophilic granules within neutrophils, lymphocytes, and other leukocytes on routine staining"
    },
    "answer": "D",
    "explanation": "Partial oculocutaneous albinism with pyogenic infections and a subsequent hemophagocytic accelerated phase describes Chediak-Higashi syndrome, whose diagnostic smear finding is giant intracytoplasmic granules from aberrant lysosomal fusion. Dohle bodies and toxic granulation are nonspecific reactive changes of acute bacterial infection seen in normal hosts. Howell-Jolly bodies indicate asplenia or hyposplenism and involve red cells, not leukocyte granules. Hyposegmented pince-nez nuclei describe the Pelger-Huet anomaly, a benign inherited variant without albinism or infection susceptibility.",
    "id": 70
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "A 34-year-old man underwent splenectomy after a motorcycle crash two years ago. He calls with fever of 39.2 and rigors that began two hours ago; he feels otherwise well. What is the best immediate advice?",
    "options": {
      "A": "Take acetaminophen, maintain hydration, and come to clinic tomorrow morning if the fever persists overnight",
      "B": "Take his standby amoxicillin-clavulanate dose now and proceed immediately to an emergency department for cultures and ceftriaxone",
      "C": "Schedule outpatient blood cultures today and begin oral antibiotics only if the cultures return positive",
      "D": "Go to a pharmacy for an influenza test first, since viral illness is statistically most likely this season"
    },
    "answer": "B",
    "explanation": "Fever in an asplenic patient is a presumptive overwhelming post-splenectomy infection, which can progress from rigors to refractory shock within hours, so the standby antibiotic plus immediate emergency evaluation with cultures and parenteral ceftriaxone is the only safe path. Symptomatic care with next-day follow-up ignores a mortality of 40 percent or more concentrated in the first two days. Waiting for outpatient culture results before treating surrenders the brief window in which antibiotics change the outcome. Testing for influenza first delays treatment, and even a positive viral test would not exclude concurrent pneumococcal bacteremia in this host.",
    "id": 71
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "A 52-year-old woman with rheumatoid arthritis is about to start adalimumab. Which pretreatment step is mandatory before the first dose?",
    "options": {
      "A": "Baseline serum immunoglobulin levels with lymphocyte subsets to document adaptive immune competence",
      "B": "Echocardiography to exclude subclinical heart failure that tumor necrosis factor blockade might worsen",
      "C": "Administration of the live zoster vaccine, since all zoster vaccination becomes impossible after starting",
      "D": "Screening for latent tuberculosis with an interferon-gamma release assay and a chest radiograph"
    },
    "answer": "D",
    "explanation": "Tumor necrosis factor maintains the granulomas that contain latent Mycobacterium tuberculosis, so reactivation, often disseminated, is the signature complication of TNF inhibitors, and latent infection screening before the first dose is the universal standard. Baseline immunoglobulins and lymphocyte subsets are appropriate before rituximab or when primary immunodeficiency is suspected, not routine before TNF blockade. Echocardiography is not required in an asymptomatic patient, although these agents are avoided in established severe heart failure. Zoster protection now uses the recombinant non-live vaccine, which remains safe and effective during therapy, so no live vaccine deadline exists.",
    "id": 72
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "A 61-year-old man with lymphoma will receive rituximab-based chemotherapy. HBsAg is negative and anti-HBc is positive. What is the correct management?",
    "options": {
      "A": "Start entecavir or tenofovir prophylaxis now, continuing for a year after the final rituximab dose",
      "B": "No action is needed because a negative surface antigen proves the infection has fully resolved",
      "C": "Vaccinate against hepatitis B immediately and recheck the surface antibody titer in one month",
      "D": "Monitor liver enzymes and hepatitis B DNA monthly, starting antiviral therapy only if the ALT doubles"
    },
    "answer": "A",
    "explanation": "Anti-CD20 therapy carries a high risk of hepatitis B reactivation even in resolved infection, because B cell depletion removes immune control of covalently closed circular DNA persisting in hepatocytes, so antiviral prophylaxis through therapy and for a year or more afterward is standard. Declaring resolved infection safe misunderstands that HBsAg-negative, anti-HBc-positive patients can reactivate fulminantly on rituximab. Vaccination has no role in someone already infected, and the isolated core antibody pattern is not a vaccine indication here. Enzyme-triggered rescue treatment waits for hepatocyte injury that prophylaxis exists to prevent, and reactivation hepatitis can be fulminant by the time ALT moves.",
    "id": 73
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "A 27-year-old woman with paroxysmal nocturnal hemoglobinuria is starting eculizumab urgently. Which strategy best addresses her principal infectious risk?",
    "options": {
      "A": "Trimethoprim-sulfamethoxazole prophylaxis administered three times weekly throughout the entire duration of complement blockade therapy",
      "B": "Pretreatment interferon-gamma release assay followed by nine months of isoniazid whenever the result returns positive",
      "C": "MenACWY and serogroup B meningococcal vaccination, with penicillin prophylaxis because breakthrough disease occurs despite vaccination",
      "D": "Weekly plasma cytomegalovirus PCR surveillance with preemptive valganciclovir whenever viremia is first detected"
    },
    "answer": "C",
    "explanation": "C5 blockade recreates terminal complement deficiency and multiplies invasive meningococcal risk more than a thousandfold, so both meningococcal vaccine series are required, and because vaccinated patients on eculizumab still develop meningococcemia, many programs add daily penicillin for the treatment duration. Pneumocystis prophylaxis addresses T cell and corticosteroid-related risk, which complement blockade does not create. Tuberculosis screening is the mandatory step before TNF inhibitors, not complement inhibitors, since granuloma integrity does not depend on C5. CMV surveillance with preemptive therapy belongs to transplantation, where cellular immunity is suppressed; eculizumab spares T cell function entirely.",
    "id": 74
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "A 58-year-old man on day 12 after induction chemotherapy for acute myeloid leukemia has an ANC of 80 and a single temperature of 38.4. He looks well. Blood cultures are drawn. What is the next step?",
    "options": {
      "A": "Observe closely for six hours and begin antibiotics only if the fever recurs or hypotension develops",
      "B": "Begin intravenous cefepime as monotherapy immediately, without adding vancomycin in the absence of specific indications",
      "C": "Begin oral ciprofloxacin plus amoxicillin-clavulanate and discharge home with scheduled next-day outpatient clinic follow-up",
      "D": "Begin intravenous vancomycin as monotherapy to cover the catheter until culture results return"
    },
    "answer": "B",
    "explanation": "Febrile neutropenia after leukemia induction is high risk by depth and expected duration of the nadir, and the standard is an antipseudomonal beta-lactam such as cefepime within an hour of fever, since untreated gram-negative bacteremia can kill within the observation period. Watchful waiting in profound neutropenia gambles on exactly that outcome. Oral outpatient therapy is reserved for carefully selected low-risk patients, typically solid tumors with short anticipated nadirs and a reassuring MASCC score, which an AML induction patient can never be. Vancomycin alone leaves Pseudomonas uncovered and is added, not substituted, only for indications like hemodynamic instability, pneumonia, or catheter site infection.",
    "id": 75
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "A 44-year-old woman is on day 55 after matched unrelated donor stem cell transplantation, complicated by acute skin GVHD treated with prednisone. She develops fever, dyspnea, and bilateral ground-glass infiltrates. Her weekly surveillance PCR was rising. Which pathogen is most likely?",
    "options": {
      "A": "Cytomegalovirus reactivating during the early post-engraftment window of impaired cellular immunity",
      "B": "Candida albicans translocating across conditioning-induced mucositis into the bloodstream",
      "C": "Streptococcus pneumoniae exploiting the functional hyposplenism that accompanies chronic graft-versus-host disease",
      "D": "Varicella-zoster virus reactivating after discontinuation of the first post-transplant year of acyclovir"
    },
    "answer": "A",
    "explanation": "Day 30 to day 100 is the classic cytomegalovirus window, and steroid-treated GVHD deepens the cellular defect while a rising surveillance PCR announces the reactivation that precedes pneumonitis. Candidemia through mucositis belongs to the pre-engraftment neutropenic phase, which ended with engraftment weeks earlier. Encapsulated bacterial infection tied to functional hyposplenism characterizes the late phase beyond day 100 in patients with chronic GVHD. Zoster reactivation typically appears after antiviral prophylaxis stops, usually beyond the first year, and produces dermatomal or disseminated cutaneous disease rather than this picture.",
    "id": 76
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "A 47-year-old kidney transplant recipient, donor CMV-seropositive and recipient-seronegative, completed six months of valganciclovir. At month nine he develops two weeks of headache and low-grade fever. CSF shows lymphocytic pleocytosis with elevated opening pressure. Which test is most likely diagnostic?",
    "options": {
      "A": "Urine BK polyomavirus PCR with quantitation of viral load in plasma",
      "B": "Serum interferon-gamma release assay for latent tuberculosis acquired before transplantation",
      "C": "Nasopharyngeal multiplex PCR panel targeting community respiratory viruses circulating this season",
      "D": "Cerebrospinal fluid cryptococcal antigen testing with fungal culture of the fluid"
    },
    "answer": "D",
    "explanation": "Subacute meningitis with high opening pressure months beyond the early window in a T cell-suppressed transplant recipient is cryptococcosis until excluded, and CSF cryptococcal antigen is both sensitive and specific. BK polyomavirus causes nephropathy in the allograft with rising creatinine, not meningitis, and is screened in plasma for that indication. A positive tuberculosis blood assay would not itself diagnose this syndrome, and tuberculous meningitis, while possible, is far less common in this scenario than cryptococcal disease. Respiratory virus panels address an entirely different syndrome and would leave a lymphocytic meningitis unexplained.",
    "id": 77
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "A 66-year-old man received anti-CD19 CAR-T therapy for refractory lymphoma ten months ago. He has had three sinopulmonary infections in four months. IgG is 310 mg/dL and circulating B cells are absent. What is the best next step?",
    "options": {
      "A": "Repeat lymphodepleting chemotherapy to reset the immune compartment and restore normal B cell output",
      "B": "Begin daily levofloxacin prophylaxis indefinitely in place of any replacement or vaccination strategy",
      "C": "Begin immunoglobulin replacement therapy and continue monitoring quantitative levels and infections",
      "D": "Administer the pneumococcal conjugate vaccine series now and reassess antibody titers in eight weeks"
    },
    "answer": "C",
    "explanation": "Persistent B cell aplasia is expected on-target activity of anti-CD19 CAR-T cells, and recurrent sinopulmonary infection with an IgG near 300 is the standard trigger for immunoglobulin replacement. Additional chemotherapy would deepen immunosuppression and has no role in managing an expected pharmacodynamic effect. Indefinite fluoroquinolone prophylaxis neither corrects the antibody deficit nor matches guideline practice for hypogammaglobulinemic infection, and it invites resistance and toxicity. Vaccinating a patient with no B cells cannot generate antibody, which is precisely why revaccination waits for B cell recovery.",
    "id": 78
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "A 71-year-old woman with rheumatoid arthritis is starting tofacitinib. Which preventive intervention specifically addresses the best-documented infectious risk of this drug class?",
    "options": {
      "A": "Monthly intravenous immunoglobulin infusions to compensate for drug-induced failure of antibody production",
      "B": "Daily trimethoprim-sulfamethoxazole to prevent the Pneumocystis pneumonia characteristic of JAK inhibition",
      "C": "A course of ivermectin to prevent disseminated strongyloidiasis before each dose escalation",
      "D": "The two-dose recombinant zoster vaccine series, ideally completed before therapy begins"
    },
    "answer": "D",
    "explanation": "Herpes zoster is the signature infection of JAK inhibitors, occurring at roughly twice the rate seen with biologic agents, and the recombinant non-live vaccine is the targeted, guideline-supported prevention. JAK inhibitors do not produce clinically significant hypogammaglobulinemia, so immunoglobulin infusions address a deficit that does not exist here. Routine Pneumocystis prophylaxis is not standard for JAK inhibitor monotherapy at approved rheumatologic doses. Strongyloides screening or empiric ivermectin matters before corticosteroids in exposed patients, but it is not the characteristic risk this drug class demands be addressed.",
    "id": 79
  },
  {
    "domain": "immunodeficiency",
    "chapter": 8,
    "question": "An 8-year-old boy with steroid-responsive nephrotic syndrome in relapse develops fever, diffuse abdominal pain, and rebound tenderness. Paracentesis of his ascites grows Streptococcus pneumoniae. Which mechanism best explains this complication?",
    "options": {
      "A": "Splenic autoinfarction eliminating the marginal zone B cells needed for rapid anticapsular antibody responses",
      "B": "Urinary loss of IgG and complement factor B causing failed opsonization of encapsulated organisms",
      "C": "Corticosteroid-induced neutrophil demargination preventing delivery of phagocytes into the peritoneal cavity",
      "D": "Complement consumption by circulating immune complexes depleting C3 below protective levels"
    },
    "answer": "B",
    "explanation": "Primary pneumococcal peritonitis in nephrotic syndrome follows size-selective glomerular loss of IgG and factor B, crippling opsonization of encapsulated bacteria in low-protein ascites. Splenic autoinfarction is the mechanism of hyposplenism in sickle cell disease, not nephrotic syndrome, where the spleen is anatomically intact. Steroid demargination raises the circulating neutrophil count and impairs trafficking modestly, but it is not the defining lesion behind this specific encapsulated-organism syndrome. Immune complex consumption of C3 characterizes active lupus or membranoproliferative disease; in minimal change nephrotic syndrome complement is lost in urine, not consumed.",
    "id": 80
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "A 24-year-old woman develops diffuse urticaria, throat tightness, wheeze, and lightheadedness ten minutes after a wasp sting. Blood pressure is 84/50 mmHg. What is the correct immediate management?",
    "options": {
      "A": "Give intravenous diphenhydramine and methylprednisolone, reserving epinephrine for airway compromise or refractory hypotension",
      "B": "Give epinephrine 0.3 to 0.5 mg of the 1 mg/mL solution intramuscularly in the anterolateral thigh",
      "C": "Give epinephrine 0.1 mg of a dilute intravenous solution as a slow push over ten minutes",
      "D": "Give nebulized albuterol with a rapid crystalloid bolus and observe for response before further drug therapy"
    },
    "answer": "B",
    "explanation": "Antihistamines and corticosteroids are adjuncts only; antihistamines relieve itch but do not reverse hypotension or airway edema, and steroids act far too slowly for the acute event, so leading with them delays the one drug that changes mortality. A slow intravenous push of dilute epinephrine is reserved for refractory shock under monitoring, carries arrhythmia risk, and is not the first move when the intramuscular route works within minutes. Albuterol with fluids addresses the bronchospasm and volume extravasation but leaves the vasodilation and mast cell activation untreated, and observing before giving epinephrine repeats the delay most consistently linked to fatal anaphylaxis.",
    "id": 81
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "A 61-year-old man treated for anaphylaxis in the emergency department is symptom-free two hours later. He required two doses of intramuscular epinephrine. His wife asks about the risk of symptoms returning tonight. Which statement is accurate?",
    "options": {
      "A": "Recurrence cannot occur without re-exposure to the allergen, so discharge home is immediately safe",
      "B": "Recurrence occurs in about half of patients and mandates admission for seventy-two hours of telemetry monitoring",
      "C": "Corticosteroids given now have been proven to eliminate the risk of any recurrent reaction",
      "D": "A biphasic reaction occurs in roughly five percent of cases, most often within twelve hours"
    },
    "answer": "D",
    "explanation": "The claim that symptoms cannot recur without re-exposure defines away the biphasic phenomenon, which by definition recurs without any new allergen contact. A one-in-two recurrence rate is a large overstatement, and universal seventy-two-hour telemetry admission is not guideline care even for severe initial reactions, though extended observation is reasonable for high-risk patients. Corticosteroids have never been shown to reliably prevent biphasic reactions in controlled data, so promising elimination of risk with steroids misstates the evidence; requiring two epinephrine doses actually marks this patient as higher risk, which is why a longer observation period, not false reassurance, is appropriate.",
    "id": 82
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "A 38-year-old woman has recurrent episodes of nonpruritic lip and tongue swelling lasting three days, without hives, unresponsive to antihistamines and epinephrine. Her father had similar episodes. Which initial test is most appropriate?",
    "options": {
      "A": "Serum complement C4 level, with C1 inhibitor studies to follow if low",
      "B": "Total serum IgE measurement together with skin prick testing to a panel of common foods",
      "C": "Serum tryptase drawn during her next acute episode",
      "D": "Patch testing to a standard contact allergen series"
    },
    "answer": "A",
    "explanation": "The picture of recurrent angioedema without urticaria, lasting days, resistant to allergic-pathway drugs, with a family history, is hereditary angioedema, and C4 is the screening test because it is consumed in nearly all cases. Total IgE and food skin testing pursue a histaminergic mechanism the treatment failures have already argued against, and food allergy does not produce isolated multi-day swelling without itch. Acute tryptase documents mast cell activation, which is precisely the pathway not involved in bradykinin-mediated swelling. Patch testing evaluates delayed contact dermatitis, a scaling eczematous process, not episodic deep tissue swelling.",
    "id": 83
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "A 45-year-old woman lists a penicillin allergy: a rash at age 4, details unknown. She needs surgical prophylaxis. Which statement best reflects current evidence?",
    "options": {
      "A": "She must avoid all beta-lactams for life because ring-structure cross-reactivity approaches thirty percent",
      "B": "Cephalosporin cross-reactivity is driven by the shared beta-lactam ring, so cefazolin is contraindicated",
      "C": "More than ninety-five percent of patients with penicillin allergy labels tolerate penicillins on formal evaluation",
      "D": "Skin testing is unnecessary because childhood reactions reliably persist and predict adult anaphylaxis"
    },
    "answer": "C",
    "explanation": "Lifelong avoidance of every beta-lactam rests on an inflated cross-reactivity figure; modern estimates for cephalosporins run near two percent and are governed by side chain similarity, not the ring. For the same reason, cefazolin, whose R1 side chain is shared with no other clinically used beta-lactam, is among the safest choices in penicillin-allergic surgical patients rather than contraindicated. The idea that childhood reactions reliably persist has the natural history backwards, since about eighty percent of patients with true IgE-mediated penicillin allergy lose skin test reactivity within a decade, which is exactly why delabeling programs succeed.",
    "id": 84
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "A 52-year-old man on carbamazepine for five weeks develops fever, facial edema, a confluent morbilliform rash, cervical lymphadenopathy, eosinophilia of 2,800 cells per microliter, and an ALT of 480 U/L. Which feature most supports the likely diagnosis?",
    "options": {
      "A": "Symptom onset within two hours of the most recent dose taken",
      "B": "The two to eight week latency between drug initiation and systemic illness",
      "C": "Detachment of more than thirty percent of the body surface area with mucositis",
      "D": "Hundreds of sterile pustules erupting within the first two days of exposure"
    },
    "answer": "B",
    "explanation": "This is DRESS, a type IVb reaction whose hallmark latency is measured in weeks, matching this patient's five-week course with hepatitis, eosinophilia, facial edema, and lymphadenopathy. Onset within two hours of a dose describes an immediate IgE or direct mast cell reaction, which produces urticaria and hypotension rather than visceral inflammation with eosinophilia. Widespread epidermal detachment beyond thirty percent of body surface with mucositis defines toxic epidermal necrolysis, a keratinocyte apoptosis syndrome with a different morphology and tempo. Sheets of sterile pustules arising within forty-eight hours describe acute generalized exanthematous pustulosis, which is neutrophilic, faster, and usually spares internal organs.",
    "id": 85
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "Parents of a 5-month-old with severe eczema ask when to introduce peanut. Based on the LEAP trial, what is the best advice?",
    "options": {
      "A": "Introduce peanut-containing food early, around four to six months, after appropriate allergy evaluation given her eczema severity",
      "B": "Delay all peanut exposure until age three to allow the immune system to mature first",
      "C": "Avoid peanut permanently because severe eczema makes eventual peanut allergy essentially inevitable regardless of feeding",
      "D": "Introduce peanut only after a positive skin test confirms sensitization has already safely occurred"
    },
    "answer": "A",
    "explanation": "Delaying introduction until age three recapitulates the avoidance policy that LEAP overturned, since early consumption in high-risk infants cut peanut allergy at age five by more than eighty percent relative to avoidance. Permanent avoidance treats allergy as predetermined when the trial showed the opposite, that oral exposure during infancy actively induces tolerance through the gut while the inflamed skin barrier drives sensitization. Waiting for a positive skin test inverts the logic of testing, because a positive test in this setting flags risk requiring supervised introduction or challenge, not a green light, and sensitization is the outcome early feeding aims to preempt, not a safety milestone.",
    "id": 86
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "A 49-year-old deer hunter from Tennessee has three episodes of urticaria and hypotension beginning around 2 a.m., hours after steak dinners. Skin testing to common foods is negative. Which test will most likely explain his episodes?",
    "options": {
      "A": "A baseline serum tryptase level drawn to evaluate for underlying indolent systemic mastocytosis",
      "B": "An oral food challenge to beef performed with standard sixty-minute observation",
      "C": "Patch testing to beef proteins read at forty-eight and ninety-six hours",
      "D": "Serum specific IgE testing directed against the carbohydrate galactose-alpha-1,3-galactose"
    },
    "answer": "D",
    "explanation": "The signature here, reactions delayed three to six hours after mammalian meat in a man with heavy tick exposure in lone star tick territory, is alpha-gal syndrome, an IgE response to a carbohydrate delivered by tick bites. A baseline tryptase pursues clonal mast cell disease, which causes unprovoked or sting-triggered events rather than reactions reproducibly timed hours after red meat. A standard challenge observed for one hour would be read as negative before the delayed reaction ever began, giving dangerous false reassurance. Patch testing detects delayed T cell contact responses in skin and has no role in an IgE-mediated systemic food reaction.",
    "id": 87
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "A 29-year-old pregnant woman with secondary syphilis has a convincing history of penicillin anaphylaxis and positive penicillin skin testing. Penicillin remains the required therapy in pregnancy. What is the appropriate next step?",
    "options": {
      "A": "Substitute doxycycline for the full treatment course and monitor maternal serology monthly",
      "B": "Give a two-step graded challenge up to full-dose penicillin after antihistamine and corticosteroid premedication",
      "C": "Perform rapid penicillin desensitization under monitoring, then complete the full treatment course",
      "D": "Treat with a single higher dose of benzathine penicillin to shorten total drug exposure"
    },
    "answer": "C",
    "explanation": "Doxycycline is contraindicated in pregnancy and does not reliably treat the fetus, which is the reason penicillin is mandatory for maternal syphilis in the first place. A graded challenge is a tool for patients whose evaluation suggests they are not allergic; giving escalating fractions to a skin-test-positive anaphylaxis patient invites the reaction it is meant to exclude, and antihistamine premedication masks early warning signs without preventing anaphylaxis. A single larger dose does not reduce risk, because IgE-mediated reactions are triggered by minute quantities, so shortening exposure at full strength misunderstands the mechanism entirely; only stepwise desensitization renders mast cells transiently unresponsive.",
    "id": 88
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "Which patient is the appropriate candidate for intradermal allergy testing rather than skin prick testing alone?",
    "options": {
      "A": "A 40-year-old with anaphylaxis after a yellow jacket sting and negative venom prick tests",
      "B": "A 6-year-old with eczema and suspected egg allergy whose prick test was negative",
      "C": "A 25-year-old with seasonal rhinitis seeking confirmation of grass pollen sensitization",
      "D": "A 33-year-old taking daily cetirizine who declines to stop it before any testing"
    },
    "answer": "A",
    "explanation": "Intradermal testing is the standard next step in venom allergy when prick tests are negative, because its greater sensitivity matters where a missed diagnosis means untreated risk of fatal sting anaphylaxis. Food allergens are specifically excluded from intradermal testing given the risk of systemic reactions and poor specificity, so the child with suspected egg allergy should proceed to specific IgE or supervised challenge instead. Grass pollen sensitization is detected well by prick testing alone, and adding intradermal tests for aeroallergens mainly adds false positives. Ongoing antihistamine use suppresses both prick and intradermal responses equally, so switching techniques solves nothing; serum specific IgE is the workaround there.",
    "id": 89
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 9,
    "question": "A 47-year-old man has recurrent syncope with flushing and hypotension after minor triggers, including one episode after a bee sting. Baseline serum tryptase, drawn weeks after his last episode, is 34 ng/mL. What is the most appropriate next step?",
    "options": {
      "A": "Repeat the tryptase only during an acute episode, since baseline values carry no diagnostic meaning",
      "B": "Reassure him that an elevated baseline tryptase is a normal finding after any recent anaphylaxis",
      "C": "Begin a five-year course of venom immunotherapy with a plan to stop at that point",
      "D": "Pursue bone marrow evaluation with KIT D816V testing for clonal mast cell disease"
    },
    "answer": "D",
    "explanation": "A persistently elevated baseline tryptase above 20 ng/mL is a minor criterion for systemic mastocytosis and, in a man with recurrent hypotensive episodes and sting anaphylaxis, demands marrow evaluation with CD25 immunostaining and KIT mutation analysis. Dismissing baseline values inverts their meaning, since it is precisely the between-episode elevation that flags a clonal process, while acute elevations reflect any mast cell activation. Attributing a value of 34 drawn weeks later to the past reaction ignores tryptase kinetics, because levels normalize within days of an event. Venom immunotherapy is indeed indicated if venom allergy is confirmed, but in mastocytosis it is continued lifelong, not stopped at five years, and starting it does not replace establishing the underlying diagnosis.",
    "id": 90
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "A healthy 34-year-old woman has fatigue and a positive ANA at 1:80 in a speckled pattern, obtained by her primary physician. Examination, urinalysis, blood counts, and complement levels are normal. Anti-dsDNA and ENA panel are negative. What is the best interpretation?",
    "options": {
      "A": "She has early lupus and should begin hydroxychloroquine now to prevent organ involvement",
      "B": "The speckled pattern itself confirms mixed connective tissue disease regardless of antibody specificities",
      "C": "Low-titer ANA positivity is common in healthy adults and does not establish autoimmune disease",
      "D": "The negative anti-dsDNA excludes lupus permanently, so no clinical follow-up is ever warranted"
    },
    "answer": "C",
    "explanation": "Starting hydroxychloroquine for an isolated low-titer ANA treats a laboratory finding rather than a disease, since lupus requires compatible clinical features and this patient has none on a thorough evaluation. A speckled pattern only suggests which antigens to test; mixed connective tissue disease specifically requires high-titer anti-RNP, which she lacks. Declaring lupus permanently excluded also overreaches, because autoantibodies can precede clinical disease by years and new objective findings would justify reassessment; the honest position is that nothing today establishes autoimmune disease, not that nothing ever could.",
    "id": 91
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "A 48-year-old woman has 4 months of symmetric polyarthritis of the wrists and metacarpophalangeal joints with 90 minutes of morning stiffness. Which serologic finding most strongly supports rheumatoid arthritis?",
    "options": {
      "A": "High-titer anti-cyclic citrullinated peptide antibodies with specificity near ninety-five percent",
      "B": "A positive rheumatoid factor, which occurs only in rheumatoid arthritis among chronic diseases",
      "C": "A positive ANA at 1:160, since nuclear antibodies are specific for rheumatoid synovitis",
      "D": "An elevated sedimentation rate, which localizes inflammation specifically to synovial tissue"
    },
    "answer": "A",
    "explanation": "Rheumatoid factor is sensitive but promiscuous, appearing in hepatitis C, endocarditis, Sjogren disease, tuberculosis, and healthy aging, so calling it exclusive to rheumatoid arthritis misstates its central weakness. A positive ANA occurs in many conditions and in healthy people and carries no specificity for synovitis. An elevated sedimentation rate confirms inflammation somewhere without naming the tissue or the disease. Anti-CCP antibodies, by contrast, combine sensitivity comparable to rheumatoid factor with specificity near ninety-five percent, precede disease by years, and predict erosive arthritis, which is why they anchor the serologic case.",
    "id": 92
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "A 62-year-old man has sinusitis, hemoptysis with pulmonary nodules, and a creatinine rising from 1.0 to 2.8 mg/dL with red cell casts. Which result most supports the likely diagnosis?",
    "options": {
      "A": "Perinuclear ANCA fluorescence without antigen specificity on immunoassay testing",
      "B": "Linear IgG staining along the glomerular basement membrane on renal biopsy",
      "C": "Granular immune complex deposits with low serum complement levels",
      "D": "Cytoplasmic ANCA with antibodies against proteinase 3 by immunoassay"
    },
    "answer": "D",
    "explanation": "This picture of upper airway, lung, and crescentic renal disease is granulomatosis with polyangiitis, whose signature is c-ANCA with PR3 specificity. Perinuclear fluorescence without a confirmed antigen is a nonspecific finding seen in inflammatory bowel disease, autoimmune hepatitis, and endocarditis, and antigen-specific testing outranks the pattern. Linear basement membrane staining defines anti-GBM disease, which produces pulmonary hemorrhage and nephritis but not granulomatous sinus disease and nodules. Granular deposits with hypocomplementemia describe immune complex nephritis such as lupus or cryoglobulinemia, whereas ANCA-associated glomerulonephritis is characteristically pauci-immune with normal complement.",
    "id": 93
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "A 31-year-old woman has a second unprovoked deep vein thrombosis. Anticardiolipin IgG is strongly positive. What must occur before diagnosing antiphospholipid syndrome?",
    "options": {
      "A": "Documentation of at least three separate thromboses in two different vascular beds",
      "B": "Repeat confirmation of antibody positivity at least twelve weeks after the initial test",
      "C": "Demonstration that her activated partial thromboplastin time is entirely normal",
      "D": "A renal biopsy demonstrating microthrombi within the glomerular capillary loops"
    },
    "answer": "B",
    "explanation": "The classification criteria pair one clinical event, thrombosis or defined pregnancy morbidity, with a persistent laboratory abnormality, so demanding three thromboses in separate beds invents a threshold that would delay anticoagulation decisions dangerously. Requiring a normal partial thromboplastin time has the physiology backwards, since a lupus anticoagulant characteristically prolongs phospholipid-dependent clotting times in vitro while promoting thrombosis in vivo. A renal biopsy showing microthrombi describes one severe manifestation, not a diagnostic requirement. Persistence at twelve weeks is the requirement, because transient antiphospholipid antibodies accompany infections and would otherwise mislabel patients for life.",
    "id": 94
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "A 27-year-old woman with lupus nephritis on prednisone 30 mg and mycophenolate presents with fever of 39.2 C, rigors, and cough. Which finding most favors infection over lupus flare?",
    "options": {
      "A": "A falling C3 and C4 with a rising anti-double-stranded DNA antibody titer",
      "B": "A sharply elevated C-reactive protein with an infiltrate on chest imaging",
      "C": "Diffuse arthralgias with a photosensitive rash appearing over the cheeks",
      "D": "An erythrocyte sedimentation rate of 85 mm per hour on admission"
    },
    "answer": "B",
    "explanation": "Falling complement with rising anti-dsDNA is the serologic signature of active lupus, arguing for flare rather than infection. Arthralgias with a malar photosensitive rash are likewise classic flare features. The sedimentation rate rises in both flare and infection, and in lupus it is further inflated by hypergammaglobulinemia and anemia, so it discriminates poorly in exactly this situation. C-reactive protein, by contrast, usually stays low in lupus activity outside serositis and arthritis, so a sharply elevated value with a new infiltrate and rigors points strongly toward bacterial infection, which is why cultures and early antibiotics take priority over escalating immunosuppression.",
    "id": 95
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "Three weeks after a diarrheal illness, a 44-year-old man develops ascending weakness and areflexia. Which mechanism best explains his condition?",
    "options": {
      "A": "Direct bacterial invasion of peripheral nerves with organism-induced demyelination during dissemination",
      "B": "Deposition of circulating immune complexes within the vasa nervorum causing ischemic injury",
      "C": "Antibodies against Campylobacter lipooligosaccharide cross-reacting with GM1 gangliosides on peripheral nerve",
      "D": "A toxin produced during acute infection persisting in myelin for several weeks"
    },
    "answer": "C",
    "explanation": "Guillain-Barre syndrome after Campylobacter jejuni enteritis is the canonical example of molecular mimicry, in which the antibacterial antibody response attacks structurally similar gangliosides on nerve. Direct bacterial invasion of nerves does not occur in this syndrome, and the organism is typically long cleared when weakness begins, which the two to four week latency reflects. Immune complex deposition in the vasa nervorum describes vasculitic neuropathy, which produces painful asymmetric mononeuritis multiplex rather than symmetric ascending weakness with areflexia. A persistent toxin stored in myelin is not a recognized mechanism, and no Campylobacter toxin explains the immunologic latency or the antiganglioside antibodies actually measured.",
    "id": 96
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "A 52-year-old woman with Raynaud phenomenon and skin thickening limited to the fingers and face asks about long-term risks. Anticentromere antibodies are positive. Which complication deserves the most focused long-term surveillance?",
    "options": {
      "A": "Pulmonary arterial hypertension developing years into the limited cutaneous disease course",
      "B": "Rapidly progressive diffuse skin thickening extending proximally within the first year",
      "C": "Scleroderma renal crisis, which anticentromere antibodies specifically predict among the antibody subsets",
      "D": "Erosive symmetric small-joint arthritis with rheumatoid nodules over the extensor surfaces"
    },
    "answer": "A",
    "explanation": "Anticentromere antibodies mark limited cutaneous systemic sclerosis, whose signature late threat is pulmonary arterial hypertension, screened for with periodic echocardiography and pulmonary function testing. Rapid proximal skin progression characterizes diffuse disease, which travels with anti-topoisomerase I or anti-RNA polymerase III rather than anticentromere antibodies. Renal crisis is likewise concentrated in early diffuse disease and is specifically predicted by anti-RNA polymerase III, so attributing it to anticentromere serology inverts the antibody associations. Erosive small-joint arthritis with nodules describes rheumatoid arthritis, not a systemic sclerosis pattern, though mild arthralgias occur in scleroderma.",
    "id": 97
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "A 58-year-old man has painless jaundice, a diffusely enlarged pancreas, bilateral submandibular gland swelling, and retroperitoneal fibrosis. Serum IgG4 is twice normal. What establishes the diagnosis?",
    "options": {
      "A": "The elevated serum IgG4 level alone, which is fully specific at twice the normal limit",
      "B": "Response to antibiotics covering gram-negative biliary organisms within one week",
      "C": "Positron emission tomography demonstrating avidity in the pancreas and salivary glands",
      "D": "Biopsy showing lymphoplasmacytic infiltrate rich in IgG4-positive plasma cells with storiform fibrosis"
    },
    "answer": "D",
    "explanation": "Serum IgG4 is elevated in only about two thirds of patients and rises in many unrelated conditions, so even a doubled value cannot carry the diagnosis by itself, and pancreatic cancer, the disease this presentation most needs to exclude, can coexist with modest elevations. Antibiotic response addresses cholangitis from biliary obstruction without explaining the multiorgan fibroinflammatory process. PET avidity confirms metabolically active tissue in the involved organs but cannot distinguish IgG4-related disease from lymphoma or carcinoma. Tissue is the arbiter: the dense IgG4-rich lymphoplasmacytic infiltrate with storiform fibrosis and obliterative phlebitis defines the disease and simultaneously excludes malignancy.",
    "id": 98
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "A 60-year-old woman with granulomatosis with polyangiitis in remission receives rituximab every six months. Influenza season approaches, and her next infusion is in three weeks. What is the best vaccination plan?",
    "options": {
      "A": "Skip influenza vaccination entirely this year because rituximab makes any response impossible",
      "B": "Give the live attenuated intranasal influenza vaccine, which bypasses the need for B cells",
      "C": "Vaccinate with inactivated influenza vaccine now, before the upcoming rituximab infusion",
      "D": "Wait until the week immediately after the infusion so the vaccine avoids interference"
    },
    "answer": "C",
    "explanation": "Skipping vaccination abandons partial protection, since T cell responses persist and antibody responses, while blunted, are not always absent; the strategy is timing, not omission. The live attenuated intranasal vaccine is contraindicated on significant immunosuppression, and its mechanism still depends on the immune response rituximab impairs, so it solves nothing while adding risk. Vaccinating in the week right after an infusion lands at the moment of maximal B cell depletion, the worst possible timing for seroconversion. Giving the inactivated vaccine two to four weeks before the infusion uses the remaining B cell function while it exists, which is exactly what current guidance recommends.",
    "id": 99
  },
  {
    "domain": "allergy_autoimmunity",
    "chapter": 10,
    "question": "A 49-year-old woman has two months of arthralgias, fatigue, ulcerated papules over her knuckles, and progressive dyspnea with minimal weakness and a near-normal creatine kinase. Which antibody best explains this presentation?",
    "options": {
      "A": "Anti-MDA5, associated with amyopathic dermatomyositis and rapidly progressive interstitial lung disease",
      "B": "Anti-Mi-2, associated with classic skin disease and a favorable treatment response",
      "C": "Anti-TIF1-gamma, associated primarily with malignancy screening in adult dermatomyositis",
      "D": "Anti-HMGCR, associated with statin-triggered necrotizing myopathy and very high enzymes"
    },
    "answer": "A",
    "explanation": "The combination of dermatomyositis-spectrum skin findings with ulceration, little or no weakness, normal muscle enzymes, and advancing lung disease is the anti-MDA5 phenotype, and recognizing it quickly matters because the interstitial lung disease can be rapidly fatal. Anti-Mi-2 disease is nearly the opposite profile, with prominent classic rash, definite myositis, and a good prognosis on standard therapy. Anti-TIF1-gamma flags cancer-associated dermatomyositis, and while it demands malignancy screening, it does not produce this amyopathic lung-dominant picture. Anti-HMGCR causes an immune-mediated necrotizing myopathy with severe weakness and creatine kinase in the thousands, incompatible with a near-normal enzyme level.",
    "id": 100
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "A kidney transplant recipient on tacrolimus, mycophenolate, and prednisone presents 4 months post-transplant with creatinine rising from 1.2 to 2.1 mg/dL. Plasma BK PCR shows 85,000 copies/mL. Biopsy shows tubulointerstitial inflammation with intranuclear inclusions staining positive for SV40 large T antigen. What is the most appropriate next step?",
    "options": {
      "A": "Reduce immunosuppression stepwise, typically starting with the antiproliferative agent",
      "B": "Give pulse methylprednisolone for three days to treat acute cellular rejection",
      "C": "Start intravenous cidofovir at full dose while continuing current immunosuppression unchanged",
      "D": "Begin rabbit antithymocyte globulin because this represents steroid-resistant vascular rejection"
    },
    "answer": "A",
    "explanation": "Pulse corticosteroids treat acute cellular rejection, but SV40 staining establishes BK nephropathy, and intensifying immunosuppression would accelerate viral replication and graft injury. Cidofovir has no proven efficacy in BK nephropathy, is nephrotoxic, and continuing full immunosuppression leaves the underlying driver untouched, since the disease exists because antiviral T cell immunity has been suppressed below the containment threshold. Antithymocyte globulin is reserved for biopsy-proven steroid-resistant or vascular cellular rejection, and giving a depleting agent here would represent the maximal possible worsening of the actual problem, which is treated by restoring immunity, not removing it.",
    "id": 101
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "A heart transplant candidate has a calculated panel reactive antibody of 99 percent. Which statement best describes what this value represents?",
    "options": {
      "A": "Ninety-nine percent of her circulating serum antibodies are directed specifically against HLA class I molecules",
      "B": "Her serum lysed 99 percent of lymphocytes from a random cell panel",
      "C": "Ninety-nine percent of donors in the population carry at least one antigen she has antibodies against",
      "D": "She has a 99 percent probability of hyperacute rejection with any donor organ"
    },
    "answer": "C",
    "explanation": "The cPRA does not describe the class distribution of her antibodies; it is computed from her unacceptable antigen list against donor HLA frequencies. Lysis of a physical cell panel describes the historical CDC-based PRA method, not the modern calculated value derived from single-antigen bead profiles. The value predicts the fraction of incompatible offers, not the probability of hyperacute rejection, which is prevented by crossmatching regardless of sensitization breadth; a compatible donor, once found, poses no elevated hyperacute risk simply because the recipient is broadly sensitized.",
    "id": 102
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "Six days after deceased donor kidney transplantation with basiliximab induction, a recipient develops rising creatinine. Biopsy shows glomerulitis, peritubular capillaritis, and diffuse linear C4d staining in peritubular capillaries. Donor-specific anti-HLA-DQ antibody is detected. Which treatment combination is most appropriate?",
    "options": {
      "A": "Conversion from tacrolimus to sirolimus with continued mycophenolate at current dosing",
      "B": "Plasmapheresis with intravenous immunoglobulin, with rituximab considered for refractory disease",
      "C": "Pulse methylprednisolone alone, since C4d deposition indicates a steroid-responsive process",
      "D": "Immediate transplant nephrectomy because C4d positivity indicates irreversible hyperacute rejection"
    },
    "answer": "B",
    "explanation": "Switching to an mTOR inhibitor addresses no component of antibody-mediated injury and impairs wound healing days after surgery. Steroids alone are the treatment framework for cellular rejection, and C4d marks classical complement activation by antibody on endothelium rather than predicting steroid responsiveness. Nephrectomy is the outcome for hyperacute rejection occurring on the table within minutes to hours; day-six antibody-mediated rejection with microvascular inflammation is very much treatable, and removing a salvageable graft would be a catastrophic overreaction to a biopsy finding that guides therapy rather than ending it.",
    "id": 103
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "A liver transplant recipient is CMV donor-seropositive, recipient-seronegative. Which prophylactic approach has the strongest evidence base for this patient?",
    "options": {
      "A": "No prophylaxis, because the liver allograft is relatively resistant to CMV invasion",
      "B": "Letermovir, because it is first-line for all solid organ D+/R- pairings",
      "C": "Acyclovir given at standard herpes simplex doses, which suppresses CMV reactivation adequately in this setting",
      "D": "Valganciclovir prophylaxis for three to six months, or preemptive PCR-guided therapy"
    },
    "answer": "D",
    "explanation": "Withholding prevention in the highest-risk serostatus tier invites CMV disease in the majority, and relative resistance of the liver to antibody-mediated rejection says nothing about CMV, which causes hepatitis preferentially in liver recipients. Letermovir's solid organ approval covers kidney recipients specifically, not all organs, and it remains a prophylaxis-only drug with hematopoietic transplant as its original home. Acyclovir and valacyclovir at antiherpes doses have inadequate CMV activity for a D+/R- pairing; the ganciclovir class, or a monitored preemptive strategy, is the accepted standard in this tier.",
    "id": 104
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "Which mechanism explains why 1 to 10 percent of circulating T cells can respond to a single foreign HLA molecule despite thymic selection on self HLA?",
    "options": {
      "A": "Cross-reactivity, since foreign HLA-peptide complexes structurally mimic many self-HLA-plus-foreign-peptide surfaces",
      "B": "Superantigen-like behavior of intact allogeneic HLA molecules binding T cell receptors outside the peptide groove entirely",
      "C": "Somatic hypermutation of T cell receptor genes after alloantigen exposure in lymph nodes",
      "D": "Thymic escape of clones that never underwent negative selection against any self antigen"
    },
    "answer": "A",
    "explanation": "Superantigens crosslink T cell receptor beta chains to MHC outside the groove, a property of certain microbial toxins, not of allogeneic HLA molecules themselves. T cell receptors do not undergo somatic hypermutation at all; that diversification mechanism is restricted to immunoglobulin genes in germinal center B cells. Wholesale failure of negative selection would produce broad autoimmunity rather than the observed structured cross-reactivity, and the alloreactive repertoire consists of normally selected clones whose receptors happen to fit foreign HLA-peptide surfaces that resemble their intended self-HLA-restricted targets.",
    "id": 105
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "A hematopoietic transplant recipient develops a maculopapular rash on the palms and ears, total bilirubin of 4.8 mg/dL, and 1.8 liters of watery diarrhea daily on day 35. Which statement about this condition is correct?",
    "options": {
      "A": "It strictly requires HLA mismatch between donor and recipient, so matched sibling grafts are entirely exempt",
      "B": "Skin biopsy would show granulomatous dermal inflammation with caseating necrosis",
      "C": "First-line therapy is systemic corticosteroids, and ruxolitinib is approved for steroid-refractory disease",
      "D": "The primary effectors are recipient T cells attacking residual donor hematopoietic cells"
    },
    "answer": "C",
    "explanation": "Acute GVHD occurs regularly in HLA-identical sibling transplants because minor histocompatibility antigens, polymorphic peptides presented by shared HLA, suffice as targets. The characteristic skin histology is basal vacuolar change with apoptotic keratinocytes and lymphocytic infiltration, not granulomas or caseation, which suggest mycobacterial or fungal disease. The direction of attack is donor T cells against recipient epithelium in skin, liver, and gut; recipient cells attacking the donor graft describes rejection, which the conditioning regimen and immunosuppression are designed to prevent.",
    "id": 106
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "A kidney recipient stable on tacrolimus is started on rifampin for latent tuberculosis. Two weeks later she presents with acute rejection. What is the most likely explanation?",
    "options": {
      "A": "Rifampin directly stimulated donor-reactive T cells through toll-like receptor engagement",
      "B": "Rifampin displaced tacrolimus from plasma protein binding and increased free drug clearance",
      "C": "An immune reconstitution reaction to mycobacterial antigens triggered bystander graft inflammation",
      "D": "Rifampin induced CYP3A4 and P-glycoprotein, dropping tacrolimus exposure below therapeutic levels"
    },
    "answer": "D",
    "explanation": "Rifampin has no meaningful toll-like receptor agonism relevant to alloreactivity, and rejection here follows a pharmacokinetic event, not an adjuvant effect. Protein-binding displacement is not the operative interaction for tacrolimus, whose exposure is governed by CYP3A4/5 metabolism and P-glycoprotein transport, both potently induced by rifampin, often requiring three to fivefold dose increases. Immune reconstitution syndromes occur when immunosuppression is withdrawn or immunity recovers against a live pathogen burden, which does not describe a stable recipient given a latent tuberculosis regimen; the temporal fit and known interaction make enzyme induction the parsimonious cause.",
    "id": 107
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "Which observation provides the most direct clinical evidence for the graft-versus-leukemia effect?",
    "options": {
      "A": "Higher relapse rates when transplant conditioning omits total body irradiation from the regimen",
      "B": "Donor lymphocyte infusion alone can induce durable molecular remission in relapsed chronic myeloid leukemia",
      "C": "Autologous transplantation cures a proportion of patients with relapsed diffuse large B cell lymphoma",
      "D": "Reduced-intensity conditioning regimens produce more early toxicity than fully myeloablative conditioning in older adults"
    },
    "answer": "B",
    "explanation": "Conditioning intensity comparisons confound cytotoxic antileukemic effect with immunologic effect and cannot isolate immune-mediated cure. Autologous transplant efficacy reflects high-dose chemotherapy with stem cell rescue and involves no alloreactivity whatsoever, so it says nothing about donor immune cells attacking leukemia. The toxicity profile of reduced-intensity regimens is a safety observation, not evidence of immune-mediated tumor control. Remission induced purely by infusing donor lymphocytes, with no chemotherapy given, demonstrates that alloreactive cells alone eradicate leukemic cells, the cleanest possible isolation of the effect.",
    "id": 108
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "An EBV-seronegative kidney transplant candidate is being considered for a costimulation-blockade-based maintenance regimen. Which agent is contraindicated by her serostatus?",
    "options": {
      "A": "Basiliximab, because interleukin-2 receptor blockade during induction permits unchecked EBV-driven B cell expansion afterward",
      "B": "Belatacept, because EBV-naive recipients had markedly increased central nervous system lymphoproliferative disease",
      "C": "Mycophenolate, because purine synthesis inhibition selectively impairs anti-EBV cytotoxic responses",
      "D": "Tacrolimus, because calcineurin inhibition is the dominant driver of post-transplant lymphoma"
    },
    "answer": "B",
    "explanation": "Basiliximab is an induction agent with a short window of receptor blockade and carries no serostatus-based contraindication. Mycophenolate contributes to the net state of immunosuppression like every maintenance agent but has no specific EBV-serostatus restriction attached to its label or guidelines. Calcineurin inhibitors raise lymphoproliferative risk as part of cumulative immunosuppression, yet no serostatus contraindication exists for them either; the trial-documented excess of primary central nervous system lymphoproliferative disorder in EBV-naive belatacept recipients is the specific, tested fact, and it made seropositivity a prerequisite for that drug.",
    "id": 109
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 11,
    "question": "A lung transplant recipient at 18 months has an FEV1 decline of 30 percent from her post-transplant baseline, with air trapping on expiratory CT and no infection identified. Which process best explains these findings?",
    "options": {
      "A": "Acute cellular rejection with perivascular lymphocytic infiltrates that would respond promptly to pulse corticosteroids",
      "B": "Antibody-mediated rejection with capillaritis and diffuse C4d deposition on transbronchial biopsy",
      "C": "Primary graft dysfunction from ischemia-reperfusion injury sustained at the time of implantation",
      "D": "Bronchiolitis obliterans syndrome, the obstructive fibrotic phenotype of chronic lung allograft dysfunction"
    },
    "answer": "D",
    "explanation": "Acute cellular rejection produces perivascular infiltrates and typically occurs earlier, and while it raises later risk, it does not itself explain a fixed obstructive decline with air trapping at 18 months. Antibody-mediated rejection in the lung causes capillaritis and often acute hypoxemic presentations rather than an indolent obstructive spirometric fall. Primary graft dysfunction is by definition an event of the first 72 hours after implantation, a form of acute lung injury, and cannot appear de novo at a year and a half; the irreversible small-airway fibro-obliteration of chronic rejection is the process that matches the physiology, timing, and imaging.",
    "id": 110
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "A 58-year-old woman with rheumatoid arthritis on tocilizumab presents with 24 hours of mild left lower quadrant discomfort. Temperature is 37.2 degrees Celsius, white count 8,100, CRP 3 mg/L. Which consideration should most influence her evaluation?",
    "options": {
      "A": "A normal CRP on IL-6 blockade reliably excludes clinically significant intra-abdominal infection",
      "B": "IL-6 receptor blockade suppresses acute phase responses, so imaging should proceed despite reassuring markers",
      "C": "Tocilizumab-associated pain is usually musculoskeletal, so reassessment in one week is reasonable",
      "D": "Diverticulitis and perforation risk on tocilizumab is no different from the general rheumatoid arthritis population"
    },
    "answer": "B",
    "explanation": "Treating a normal CRP as exclusionary is precisely the trap, since the drug blocks the receptor through which IL-6 drives hepatic acute phase output, flattening CRP regardless of what is happening in the abdomen. Deferring evaluation for a week ignores the drug's known association with lower intestinal perforation, which presents blandly for the same reason the markers stay flat. Claiming baseline diverticulitis risk contradicts the documented signal for perforation concentrated in patients with diverticular disease, especially with concomitant corticosteroids; this presentation warrants prompt cross-sectional imaging.",
    "id": 111
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "A 44-year-old man with severe plaque psoriasis and well-documented Crohn disease requests a biologic with high skin clearance rates. Which agent should be avoided?",
    "options": {
      "A": "Ustekinumab, because blocking IL-12 and IL-23 together reliably worsens intestinal inflammation",
      "B": "Risankizumab, because IL-23 p19 blockade is contraindicated whenever bowel disease coexists",
      "C": "Adalimumab, because TNF inhibition treats skin but has no efficacy in Crohn disease",
      "D": "Secukinumab, because IL-17 blockade can worsen or unmask inflammatory bowel disease"
    },
    "answer": "D",
    "explanation": "Ustekinumab is itself approved for Crohn disease, so the claim that dual IL-12/23 blockade worsens the bowel is backwards. Risankizumab likewise carries a Crohn indication, since IL-23 blockade treats rather than aggravates intestinal inflammation. Adalimumab has efficacy in both psoriasis and Crohn disease and would be a reasonable dual-purpose choice, making the assertion of no bowel efficacy false; the genuine hazard is the IL-17 class, where trials in Crohn disease failed and worsening or new inflammatory bowel disease has been repeatedly observed.",
    "id": 112
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "A 67-year-old woman receiving CD19 CAR-T therapy for lymphoma develops fever of 39.4 on day 2, then hypotension requiring one vasopressor on day 3 despite fluids. Ferritin and CRP are rising. What is the most appropriate treatment for this syndrome?",
    "options": {
      "A": "Tocilizumab, since vasopressor-dependent cytokine release syndrome is grade 3 and merits IL-6 receptor blockade",
      "B": "Broad-spectrum antibiotics alone, since neutropenic sepsis fully explains fever with hypotension here",
      "C": "Intravenous immunoglobulin at 2 g/kg infused promptly to neutralize the circulating inflammatory cytokines directly",
      "D": "Immediate infliximab, because TNF is the dominant effector cytokine of this syndrome"
    },
    "answer": "A",
    "explanation": "Antibiotics are indeed given empirically in this immunocompromised setting, but attributing vasopressor-dependent hypotension on day 3 after CAR-T infusion solely to sepsis ignores the classic tempo and biomarker rise of cytokine release syndrome, which requires its own specific therapy. High-dose immunoglobulin has no role in acute CRS; it neither blocks IL-6 signaling nor reverses capillary leak. TNF blockade is not the antidote because IL-6, not TNF, is the key mediator, which is why the IL-6 receptor blocker carries the approval and reverses hypotension in most patients, with corticosteroids added for refractory disease.",
    "id": 113
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "Three weeks after starting combination ipilimumab and nivolumab for melanoma, a patient develops eight watery stools daily with abdominal cramping. Stool studies are negative. Colonoscopy shows diffuse colitis. After 72 hours of methylprednisolone 2 mg/kg, he is not improving. What is the next step?",
    "options": {
      "A": "Fecal microbiota transplantation, the established second-line therapy for checkpoint colitis",
      "B": "Increase methylprednisolone to 4 mg/kg and reassess response in another week",
      "C": "Add infliximab, the standard agent for steroid-refractory immune checkpoint colitis",
      "D": "Resume nivolumab alone, since PD-1 monotherapy typically quiets established colitis"
    },
    "answer": "C",
    "explanation": "Microbiota transplantation has only small case series behind it and sits well behind established biologic rescue in every guideline algorithm. Escalating steroids further after an adequate 48-to-72-hour trial delays effective therapy while compounding steroid harm, and dose escalation beyond 2 mg/kg lacks supporting evidence. Resuming any checkpoint agent during an uncontrolled grade 3 colitis risks perforation, and PD-1 monotherapy does not treat the toxicity of the combination that caused it; guidelines direct TNF blockade, with vedolizumab as an alternative, for colitis unresponsive to high-dose corticosteroids.",
    "id": 114
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "A 30-year-old woman with Crohn disease plans pregnancy and will need continued TNF inhibition. Which property of certolizumab pegol makes it the preferred agent in the third trimester?",
    "options": {
      "A": "Its pegylated structure allows complete renal clearance before the fetal circulation is exposed",
      "B": "It lacks an Fc region, so the neonatal Fc receptor does not actively transport it across the placenta",
      "C": "It is a receptor fusion protein, and fusion proteins cannot reach the placental interface",
      "D": "Its residual murine content is low enough that fetal immune tolerance is never meaningfully breached during gestation"
    },
    "answer": "B",
    "explanation": "Pegylation prolongs half-life and has nothing to do with clearing drug before placental exposure, which is not how transfer is prevented. Certolizumab is a Fab fragment, not a receptor fusion protein; the fusion protein in the TNF class is etanercept, and fusion proteins with intact Fc regions do cross via receptor-mediated transport. Murine content governs immunogenicity to the mother, not placental transfer; the operative biology is that FcRn-mediated transcytosis requires an Fc domain, so full antibodies like infliximab and adalimumab accumulate in the fetus during the third trimester while the Fc-free Fab fragment shows minimal transfer.",
    "id": 115
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "A 62-year-old man with rheumatoid arthritis, prior myocardial infarction, and 40 pack-years asks about switching from etanercept to an oral agent. Which statement best reflects the ORAL Surveillance findings that shape this decision?",
    "options": {
      "A": "Tofacitinib showed higher rates of major cardiovascular events, malignancy, thromboembolism, and death than TNF inhibitors",
      "B": "Tofacitinib actually proved cardiovascular superiority to TNF inhibition in older patients with established coronary artery disease",
      "C": "The trial's excess risk was confined to patients younger than 50 without any risk factors",
      "D": "The findings applied only to tofacitinib, so labels for other JAK inhibitors remained unchanged"
    },
    "answer": "A",
    "explanation": "The trial demonstrated the opposite of cardiovascular superiority; tofacitinib failed noninferiority for major adverse cardiovascular events in exactly this enriched-risk population. The excess risk was observed in the enrolled population of patients aged 50 and older with at least one cardiovascular risk factor, not in young low-risk patients, who were not studied. Regulators extended boxed warnings class-wide to baricitinib and upadacitinib by mechanism, rather than leaving other labels untouched, and the labels restrict these drugs to patients with inadequate response or intolerance to TNF inhibitors, making this patient a poor candidate.",
    "id": 116
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "A 55-year-old man on ibrutinib for chronic lymphocytic leukemia presents with two weeks of headache and low-grade fever. MRI shows a ring-enhancing frontal lesion. Beyond bacterial abscess, which pathogen deserves specific early consideration?",
    "options": {
      "A": "JC polyomavirus, since BTK inhibition is the strongest known risk factor for progressive multifocal leukoencephalopathy",
      "B": "Cytomegalovirus, because BTK inhibitors characteristically cause necrotizing CMV encephalitis with mass effect",
      "C": "Toxoplasma gondii, because ibrutinib selectively destroys the CD4 T cells that contain latent toxoplasmosis",
      "D": "Aspergillus, because ibrutinib carries a recognized signal for invasive aspergillosis including brain involvement"
    },
    "answer": "D",
    "explanation": "Progressive multifocal leukoencephalopathy is a lymphocyte-trafficking and immune-surveillance disease seen with agents like natalizumab and rituximab, and it produces non-enhancing white matter lesions rather than ring-enhancing masses. CMV causes encephalitis and retinitis in profound T cell deficiency, but a necrotizing mass lesion is not its pattern and BTK inhibition is not its classic setting. Toxoplasma reactivation tracks CD4 lymphopenia, as in advanced HIV, and ibrutinib does not selectively deplete CD4 cells; the documented and repeatedly published association with this drug class, appearing early in therapy, is invasive mold disease with cerebral aspergillosis as its most feared form.",
    "id": 117
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "A hospitalist reviews the mechanism of high-dose intravenous immunoglobulin for immune thrombocytopenia. Which mechanism is best supported?",
    "options": {
      "A": "Direct agonist stimulation of megakaryocyte thrombopoietin receptors, thereby accelerating production of new platelets from marrow",
      "B": "Complement activation on splenic macrophages, destroying the cells that consume platelets",
      "C": "Saturation of neonatal Fc receptors and blockade of Fc-gamma receptors, slowing antibody-mediated platelet clearance",
      "D": "Selective adsorption of antiplatelet antibodies onto infused donor platelets acting as decoys"
    },
    "answer": "C",
    "explanation": "IVIG contains no thrombopoietin agonist activity; that mechanism belongs to romiplostim and eltrombopag. It does not destroy splenic macrophages through complement, and such destruction would be a dangerous rather than therapeutic action; the preparation is depleted of aggregates precisely to avoid complement activation. There are no donor platelets in an immunoglobulin product to serve as decoys. The supported mechanisms are competitive saturation of FcRn, which shortens the survival of pathogenic antiplatelet IgG, and blockade with modulation of activating Fc-gamma receptors on phagocytes, which spares opsonized platelets from clearance.",
    "id": 118
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "A 26-year-old woman receives an mRNA vaccine. Her physiology student brother asks why the synthetic mRNA uses N1-methylpseudouridine instead of uridine. What is the best answer?",
    "options": {
      "A": "The modified nucleoside evades innate RNA sensors, preventing translational shutdown and excessive inflammation",
      "B": "It makes the synthetic mRNA integrate far more efficiently into the host cell genome for durable antigen expression",
      "C": "It converts the mRNA into a self-replicating replicon that amplifies antigen production",
      "D": "It changes the encoded protein sequence to a more immunogenic variant of the antigen"
    },
    "answer": "A",
    "explanation": "mRNA is not a substrate for genomic integration at all; it lacks reverse transcriptase and integrase functions and never enters the nucleus as part of its mechanism, so improved integration is doubly wrong. Self-replicating RNA vaccines are a separate platform built on alphavirus replicase machinery, not a property conferred by nucleoside chemistry. Nucleoside modification does not alter the encoded amino acid sequence, which is set by the codon order; the Kariko-Weissman insight was that pseudouridine-type substitution blunts recognition by toll-like receptors and cytosolic RNA sensors, allowing efficient translation of the antigen without the innate interferon response degrading the platform.",
    "id": 119
  },
  {
    "domain": "transplant_immunotherapy",
    "chapter": 12,
    "question": "A pharmacy committee debates listing an infliximab biosimilar. Which statement about biosimilars is correct?",
    "options": {
      "A": "A biosimilar is chemically identical to its reference product, exactly like a generic small molecule",
      "B": "Approval requires separate phase 3 trials in every indication the reference product holds",
      "C": "Switching patients from reference infliximab to a biosimilar showed substantial efficacy loss in the randomized switching trials",
      "D": "Approval rests on analytic similarity plus confirmatory clinical data, with efficacy extrapolated across indications"
    },
    "answer": "D",
    "explanation": "Chemical identity is impossible to demonstrate for proteins produced in living cell lines, whose glycosylation varies even between reference product lots, which is exactly why the generic framework does not apply. Requiring trials in every indication misstates the pathway, whose premise is that exhaustive structural and functional similarity plus pharmacokinetic equivalence and one sensitive clinical comparison justify extrapolation. The randomized switching evidence, led by NOR-SWITCH, showed no meaningful loss of efficacy or safety after transition, so the claim of substantial efficacy loss inverts the trial results that underpin current substitution practice.",
    "id": 120
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A 68-year-old woman with pyelonephritis has a blood pressure of 78/44 mm Hg after 30 mL/kg of lactated Ringer solution, and her lactate is 4.8 mmol/L. Norepinephrine is started and titrated to a mean arterial pressure of 66 mm Hg, and repeat lactate is 3.9 mmol/L. Which diagnostic label best fits her current state?",
    "options": {
      "A": "Sepsis with cryptic hypoperfusion that will resolve with maintenance fluid alone",
      "B": "Severe sepsis, the intermediate category between sepsis and septic shock",
      "C": "Septic shock, because she requires vasopressors and lactate remains above 2 mmol/L",
      "D": "Refractory shock, which requires the immediate addition of both vasopressin and stress-dose hydrocortisone therapy"
    },
    "answer": "C",
    "explanation": "Cryptic hypoperfusion describes elevated lactate with normal blood pressure, which does not fit a patient who is frankly hypotensive on a vasopressor, and maintenance fluid is not a resuscitation plan. The severe sepsis category was eliminated by the Sepsis-3 definitions and no longer exists as an intermediate label. Refractory shock implies failure of escalating vasopressor therapy, whereas this patient reached her mean arterial pressure target on a single agent at an unstated dose, so mandatory immediate vasopressin and hydrocortisone overstates her trajectory even though both may be added later if requirements climb.",
    "id": 121
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A 54-year-old man on the medical ward has pneumonia, a respiratory rate of 24, a systolic pressure of 96 mm Hg, and new confusion, giving a qSOFA of 3. His resident asks how qSOFA should be used in sepsis screening. Which statement is most accurate?",
    "options": {
      "A": "A positive qSOFA should prompt urgent evaluation, but a negative qSOFA cannot exclude sepsis",
      "B": "qSOFA replaced SOFA as the required criterion for diagnosing sepsis outside the ICU",
      "C": "qSOFA is more sensitive than SIRS criteria and is the preferred single screening tool",
      "D": "Two qSOFA points establish septic shock when the lactate is simultaneously above 2 mmol/L"
    },
    "answer": "A",
    "explanation": "The claim that qSOFA replaced SOFA reverses the framework, since organ dysfunction defining sepsis is still measured by a SOFA increase of 2 points and qSOFA was only a bedside prompt. The sensitivity claim is backward as well, because validation studies showed qSOFA is specific but insensitive, and the 2021 guidelines recommend against it as a sole screening tool precisely for that reason. Combining qSOFA points with lactate does not define septic shock, which requires vasopressor dependence to maintain a mean arterial pressure of 65 mm Hg plus a lactate above 2 mmol/L despite adequate fluid.",
    "id": 122
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A 61-year-old woman with septic shock from cholangitis is resuscitated with balanced crystalloid and started on norepinephrine, now at 0.4 micrograms per kilogram per minute for the past six hours with a mean arterial pressure of 63 mm Hg. Which addition is best supported at this point?",
    "options": {
      "A": "Dopamine infusion titrated for both blood pressure support and renal protection",
      "B": "High-dose intravenous vitamin C combined with thiamine and hydrocortisone as metabolic resuscitation",
      "C": "A cosyntropin stimulation test to determine whether corticosteroids would be beneficial",
      "D": "Vasopressin at 0.03 units per minute plus hydrocortisone 200 mg daily"
    },
    "answer": "D",
    "explanation": "Dopamine causes more arrhythmias than norepinephrine, showed a mortality disadvantage in meta-analysis, and the idea of a renal-protective dose was discredited years ago. The vitamin C metabolic cocktail failed to improve outcomes in randomized trials, and the LOVIT trial suggested harm from high-dose vitamin C. Cosyntropin stimulation testing does not identify which septic patients benefit from hydrocortisone and is specifically discouraged, since the decision is made clinically from the vasopressor requirement, which this patient has already met. She also needs urgent biliary source control, but among the listed options the second vasopressor plus steroid is correct.",
    "id": 123
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A 47-year-old man on hemodialysis develops fever, and two of two blood culture sets grow methicillin-resistant Staphylococcus aureus. He defervesces by day 2 and repeat cultures at 48 hours are negative. Transesophageal echocardiography is normal and his tunneled catheter is removed. What is the minimum appropriate treatment course?",
    "options": {
      "A": "Five days of intravenous vancomycin, extrapolating from gram-negative bacteremia trials",
      "B": "Fourteen days of intravenous therapy counted from the first negative blood culture",
      "C": "Oral linezolid for ten days once he has been afebrile for 48 hours",
      "D": "Six weeks of intravenous vancomycin regardless of complication status or clearance"
    },
    "answer": "B",
    "explanation": "Short five-day courses come from trials of uncomplicated gram-negative bacteremia and cannot be extrapolated to Staphylococcus aureus, whose metastatic complication rate mandates longer therapy. Early oral switch strategies remain investigational for this organism in most guidance, and a ten-day linezolid course is shorter than the accepted minimum in any case. A six-week course is the treatment for complicated bacteremia, such as endocarditis or persistent cultures, and applying it to a patient who meets every criterion for uncomplicated infection trades unnecessary catheter days and toxicity for no benefit.",
    "id": 124
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A 59-year-old woman with a port for chemotherapy develops rigors. Paired cultures are drawn, and the port-drawn bottle turns positive with Klebsiella pneumoniae 3.5 hours before the peripherally drawn bottle grows the same organism. What does this result establish?",
    "options": {
      "A": "The catheter is the source, based on a differential time to positivity of at least 2 hours",
      "B": "Contamination of the port-drawn sample, because any genuine pathogen would grow simultaneously in both bottles",
      "C": "Secondary seeding of the catheter from an undiagnosed intraabdominal abscess",
      "D": "Nothing useful, since differential time to positivity is validated only for staphylococci"
    },
    "answer": "A",
    "explanation": "Simultaneous growth is not a criterion for contamination, and Klebsiella recovered from paired cultures with compatible timing is a true pathogen, so dismissing the port bottle misreads the test entirely. Secondary seeding from a deep abscess is possible in principle but is not what this result shows, and invoking it ignores the quantitative logic that a heavier intraluminal inoculum grows first. The claim that the method applies only to staphylococci is invented, since differential time to positivity is validated across common bacterial pathogens, which is exactly why it lets clinicians diagnose catheter-related bloodstream infection without removing every line.",
    "id": 125
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A 44-year-old man with acute myeloid leukemia and a central line grows Candida albicans in one of two blood culture sets. He is hemodynamically stable. Which management plan is most appropriate?",
    "options": {
      "A": "Repeat cultures and observe, because a single positive set most likely represents skin contamination",
      "B": "Start fluconazole, retain the catheter, and treat for seven days after defervescence",
      "C": "Start intravenous fluconazole and arrange ophthalmology follow-up only if visual symptoms develop",
      "D": "Start an echinocandin, remove the catheter, repeat cultures, and obtain a dilated eye examination"
    },
    "answer": "D",
    "explanation": "Candida in blood is never dismissed as contamination, so observation off therapy risks a death from an infection with mortality around 30 to 40 percent. Retaining the catheter leaves an unsterilizable biofilm in place, and seven days after defervescence is the wrong clock, since duration runs 14 days from the first negative culture. Empiric fluconazole is inferior to an echinocandin before speciation and susceptibility are known given non-albicans species and Candida auris, and waiting for visual symptoms misses early endophthalmitis, which is why a dilated examination is recommended for candidemic patients rather than symptom-triggered referral.",
    "id": 126
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A 72-year-old man is treated for Escherichia coli bacteremia from obstructive pyelonephritis. A ureteral stent relieves the obstruction on day 1, he is afebrile by day 3, and he is eating on day 5. Which duration and route strategy is best supported by randomized trial evidence?",
    "options": {
      "A": "Fourteen days of intravenous therapy with follow-up blood cultures every 48 hours until completion",
      "B": "Seven days total, with step-down to an oral agent with good bioavailability once stable",
      "C": "Twenty-one days total therapy, since bacteremia from a urinary source seeds the spine frequently",
      "D": "Four days total therapy, extrapolated directly from intraabdominal infection trials such as STOP-IT"
    },
    "answer": "B",
    "explanation": "Fourteen-day courses showed no advantage over seven days in randomized trials of uncomplicated gram-negative bacteremia, and routine follow-up cultures in this setting mainly generate contaminant chases rather than useful information. Three weeks of therapy answers a complication, such as vertebral osteomyelitis, that nothing in this vignette suggests. The four-day arm of STOP-IT applied to source-controlled intraabdominal infection without bacteremia, and stretching it to cover a bacteremic patient goes beyond the evidence, whereas seven days with early oral step-down is exactly what the gram-negative bacteremia trials tested.",
    "id": 127
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A 66-year-old woman in septic shock has received 30 mL/kg of crystalloid. Her attending wants to know whether to give more fluid before escalating norepinephrine. Which approach best reflects current evidence?",
    "options": {
      "A": "Give repeated boluses until the central venous pressure reaches 8 to 12 mm Hg",
      "B": "Give no further fluid under any circumstance, since CLOVERS proved liberal strategies increase mortality",
      "C": "Assess fluid responsiveness dynamically, for example with passive leg raise and stroke volume measurement",
      "D": "Infuse albumin routinely instead of crystalloid to reach a higher oncotic pressure faster"
    },
    "answer": "C",
    "explanation": "Central venous pressure targets are static measures that predict fluid responsiveness poorly and belong to the abandoned early goal-directed therapy protocol. CLOVERS found no mortality difference between restrictive and liberal strategies, so citing it to forbid all further fluid misstates a neutral trial, and some patients after initial resuscitation genuinely are responsive. Routine albumin has never shown a mortality benefit over crystalloid in sepsis, and using it to chase oncotic pressure adds cost without demonstrated outcome gain, whereas a dynamic test tells you whether this specific patient's stroke volume will actually rise with more volume.",
    "id": 128
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A blood culture drawn in the emergency department grows coagulase-negative staphylococci in one of two sets at 62 hours of incubation. The 58-year-old patient has no fever, no vascular catheter, and no prosthetic material. What is the most appropriate next step?",
    "options": {
      "A": "Repeat blood cultures and withhold antibiotics while assessing the clinical picture",
      "B": "Start intravenous vancomycin and obtain transesophageal echocardiography within 48 hours",
      "C": "Treat with oral doxycycline for seven days to cover partially treated bacteremia",
      "D": "Start vancomycin plus rifampin, since coagulase-negative staphylococci form biofilm on native valves"
    },
    "answer": "A",
    "explanation": "Empiric vancomycin with transesophageal echocardiography treats a contaminant like endocarditis, spending an invasive test and nephrotoxic drug on a single late-growing set in a host with no hardware or catheter. An oral doxycycline course invents a syndrome of partially treated bacteremia that this afebrile patient does not have. Adding rifampin borrows a strategy from prosthetic valve and device infections, where biofilm on foreign material justifies it, and native valve involvement by a skin commensal found in one late bottle is exactly the situation where repeat cultures and clinical judgment, not escalation, are correct.",
    "id": 129
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 13,
    "question": "A 63-year-old man with Staphylococcus aureus bacteremia from a psoas abscess remains febrile with positive blood cultures on day 6 of vancomycin dosed to an appropriate AUC target. The isolate remains vancomycin-susceptible. Which next step is most appropriate?",
    "options": {
      "A": "Extend vancomycin alone to a total of eight weeks without further imaging",
      "B": "Add gentamicin to vancomycin for synergy for the remainder of the treatment course",
      "C": "Switch to oral trimethoprim-sulfamethoxazole, which showed noninferiority for deep staphylococcal infection",
      "D": "Reimage for undrained infection, arrange abscess drainage, and consider daptomycin plus ceftaroline"
    },
    "answer": "D",
    "explanation": "Prolonging the same failing drug without pursuing source control ignores the central rule that persistent bacteremia means an uncontrolled focus until proven otherwise. Adding gentamicin for staphylococcal synergy increases nephrotoxicity without survival benefit and was abandoned for native valve disease after randomized data. Trimethoprim-sulfamethoxazole was inferior to vancomycin for severe staphylococcal infection including bacteremia in randomized comparison, so an oral switch in an uncontrolled deep infection compounds the problem, whereas drainage of the psoas collection plus a salvage regimen addresses both the source and the persistent organism.",
    "id": 130
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 34-year-old man develops fever, hypotension, diffuse macular erythroderma, vomiting, and confusion three days after nasal packing for epistaxis. Blood cultures remain negative. Which mechanism best explains this presentation?",
    "options": {
      "A": "Preformed heat-stable enterotoxin absorbed from the gastrointestinal tract and driving a systemic cytokine release",
      "B": "A superantigen crosslinking MHC class II directly to T cell receptors outside the peptide groove",
      "C": "Exfoliative toxin cleaving desmoglein-1 in the superficial epidermis with secondary bacteremia",
      "D": "Lipopolysaccharide activating Toll-like receptor 4 on monocytes and endothelial cells"
    },
    "answer": "B",
    "explanation": "Preformed enterotoxin ingestion causes staphylococcal food poisoning, a self-limited vomiting illness within hours of a meal, not shock with erythroderma from a packed nares. Desmoglein-1 cleavage produces scalded skin syndrome, whose flaccid bullae and positive Nikolsky sign differ from this intact macular erythroderma, and it is a pediatric and renal-failure disease pattern. Lipopolysaccharide signaling describes gram-negative endotoxin, which is chemically absent from staphylococci. Toxic shock from a retained foreign body is classically culture-negative because TSST-1 acts at a distance, which is exactly what the vignette shows.",
    "id": 131
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 52-year-old woman with MRSA bacteremia from a hemodialysis catheter develops new multilobar pneumonia while on vancomycin, and the team considers switching agents for a rising creatinine. Which drug would be the poorest choice for her lung infection, and why?",
    "options": {
      "A": "Linezolid, because oxazolidinones penetrate epithelial lining fluid too slowly to treat pneumonia",
      "B": "Ceftaroline, because no cephalosporin binds penicillin-binding protein 2a with clinical efficacy",
      "C": "Telavancin, because lipoglycopeptides are contraindicated in all patients with renal dysfunction",
      "D": "Daptomycin, because pulmonary surfactant sequesters and inactivates it within the alveolar space"
    },
    "answer": "D",
    "explanation": "Linezolid actually concentrates in epithelial lining fluid and performs at least as well as vancomycin in MRSA pneumonia trials, so the penetration claim is inverted. Ceftaroline was engineered specifically to bind penicillin-binding protein 2a, which is the entire basis of its anti-MRSA activity, making the sweeping cephalosporin statement false. Telavancin carries renal warnings that demand caution, but calling it contraindicated in every patient with any renal dysfunction overstates the label, and it retains lung activity. Surfactant inactivation of daptomycin is a genuine pharmacologic failure mode, which is why the drug is never used for primary pneumonia.",
    "id": 132
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 61-year-old man has Enterococcus faecalis endocarditis of a native aortic valve. His creatinine clearance is 38 mL/min and the isolate shows high-level gentamicin resistance. Which regimen is most appropriate?",
    "options": {
      "A": "Ampicillin plus ceftriaxone for six weeks of intravenous therapy",
      "B": "Ceftriaxone monotherapy for six weeks, since E. faecalis is cephalosporin-susceptible",
      "C": "Ampicillin plus gentamicin, because synergy overcomes high-level aminoglycoside resistance",
      "D": "Oral amoxicillin for six weeks after two weeks of intravenous ampicillin"
    },
    "answer": "A",
    "explanation": "Enterococci are intrinsically resistant to every cephalosporin, so ceftriaxone alone has no activity at all; its role exists only in combination, where it saturates complementary penicillin-binding proteins alongside ampicillin. High-level gentamicin resistance specifically abolishes aminoglycoside synergy, so the ampicillin-gentamicin regimen loses its bactericidal rationale and adds nephrotoxicity in a patient whose renal function is already limited. A largely oral amoxicillin strategy is not established therapy for enterococcal endocarditis outside carefully selected step-down protocols, whereas the double beta-lactam combination is the preferred regimen in exactly this scenario.",
    "id": 133
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 45-year-old kidney transplant recipient on tacrolimus and prednisone presents with three weeks of cough, a cavitary right upper lobe nodule, and a new seizure. Sputum shows branching, beaded, weakly acid-fast gram-positive filaments. Which management step is most appropriate?",
    "options": {
      "A": "High-dose penicillin G alone, with surgical drainage of any collections that develop",
      "B": "Isoniazid, rifampin, pyrazinamide, and ethambutol pending mycobacterial culture confirmation",
      "C": "Trimethoprim-sulfamethoxazole plus imipenem, with brain imaging already implied by the seizure",
      "D": "Voriconazole, because cavitary nodules with brain lesions in transplantation indicate invasive aspergillosis"
    },
    "answer": "C",
    "explanation": "Penicillin is the treatment for Actinomyces, the anaerobic branching organism that is not acid-fast and does not typically produce this pulmonary-cerebral combination in transplant patients. The four-drug tuberculosis regimen answers acid-fast bacilli, but beaded branching filaments that are only weakly acid-fast identify Nocardia, and Mycobacterium tuberculosis does not branch. Invasive aspergillosis is a legitimate consideration in this host, but the Gram stain morphology already excludes a mold, since Aspergillus appears as septate hyphae on fungal stains rather than gram-positive filaments, making combination sulfonamide-carbapenem therapy with brain imaging the correct move.",
    "id": 134
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 68-year-old woman hospitalized for pneumonia develops profuse diarrhea, a white blood cell count of 24,000 per microliter, and a positive stool toxin assay for Clostridioides difficile, her first episode. She is hemodynamically stable without ileus. Which initial treatment is preferred by current guidelines?",
    "options": {
      "A": "Intravenous metronidazole, reserving oral agents for patients who fail initial therapy",
      "B": "Oral vancomycin 500 mg four times daily combined with intravenous metronidazole from the very outset",
      "C": "A single infusion of bezlotoxumab as monotherapy to neutralize circulating toxin B",
      "D": "Fidaxomicin 200 mg twice daily for ten days, which lowers recurrence compared with vancomycin"
    },
    "answer": "D",
    "explanation": "Intravenous metronidazole reaches the colonic lumen poorly and as monotherapy is reserved for settings where oral therapy is impossible, having been displaced even in its oral form by inferior cure rates. The high-dose vancomycin plus intravenous metronidazole combination is the regimen for fulminant disease with hypotension, ileus, or megacolon, none of which this stable patient has. Bezlotoxumab is an adjunct given alongside antibiotics to reduce recurrence in high-risk patients and has no role as standalone treatment, since it neutralizes toxin without killing the organism producing it.",
    "id": 135
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 29-year-old man sustains a deep thigh laceration in a farming accident. Eighteen hours later he has pain out of proportion, tense edema, crepitus, and a heart rate of 132. Gram stain of wound exudate shows large gram-positive rods with a striking absence of neutrophils. What best explains the missing inflammatory cells?",
    "options": {
      "A": "Alpha toxin, a phospholipase C that lyses membranes and suppresses local leukocyte responses",
      "B": "Rapid consumption of complement by the fibrin coat surrounding the organisms",
      "C": "Theta toxin selectively inducing apoptosis in resident tissue macrophages while entirely sparing neutrophils",
      "D": "An overwhelming inoculum that simply outpaces a normal neutrophil chemotactic response"
    },
    "answer": "A",
    "explanation": "A fibrin coat consuming complement describes staphylococcal coagulase strategy rather than clostridial myonecrosis, and complement consumption alone would not empty the exudate of neutrophils. Attributing selective macrophage apoptosis to perfringolysin misstates its biology and would still leave neutrophils visible on the smear. Inoculum outpacing chemotaxis is a hand-wave, since heavily infected wounds from other organisms are packed with neutrophils. The paucity of leukocytes despite fulminant tissue destruction is a recognized signature of Clostridium perfringens alpha toxin, which destroys and repels inflammatory cells while lysing muscle membranes.",
    "id": 136
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 74-year-old man on infliximab for rheumatoid arthritis presents with fever, headache, and ataxia. Cerebrospinal fluid shows 180 white cells per microliter with 60 percent lymphocytes, protein 110 mg/dL, and glucose 48 mg/dL. Empiric vancomycin and ceftriaxone are started. What is the most significant gap in this regimen?",
    "options": {
      "A": "No coverage for herpes simplex virus, the most likely cause of this lymphocytic picture",
      "B": "No dexamethasone, which is required before antibiotics in every adult meningitis",
      "C": "No ampicillin, leaving Listeria monocytogenes untreated because cephalosporins are inert against it",
      "D": "No rifampin, which is needed to sterilize cerebrospinal fluid when vancomycin is used"
    },
    "answer": "C",
    "explanation": "Acyclovir for herpes encephalitis is a defensible empiric addition, but calling it the most significant gap ignores that a brainstem syndrome with mixed pleocytosis in an anti-TNF-treated patient is the textbook setting for Listeria rhombencephalitis, a bacterial disease his current regimen cannot touch. Dexamethasone benefits pneumococcal meningitis specifically and is not an absolute requirement in every adult, and it may worsen outcomes in Listeria meningitis. Rifampin as a vancomycin adjunct is a niche consideration for pneumococcal isolates under dexamethasone, not a standard requirement, whereas intrinsic cephalosporin resistance of Listeria is a hard fact that only ampicillin remedies here.",
    "id": 137
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 58-year-old woman is found to have Streptococcus gallolyticus endocarditis of the mitral valve, susceptible to penicillin. Beyond antimicrobial therapy and valve assessment, which additional evaluation is indicated?",
    "options": {
      "A": "Bone marrow biopsy to exclude an underlying plasma cell dyscrasia driving infection",
      "B": "Colonoscopy, because this organism's bacteremia is strongly associated with colorectal neoplasia",
      "C": "Upper endoscopy only, since the organism translocates exclusively from gastric mucosa",
      "D": "Whole-body positron emission tomography to identify metastatic infectious foci before surgery"
    },
    "answer": "B",
    "explanation": "A marrow examination answers hematologic malignancy questions that this organism does not raise, since its epidemiologic association runs through the colonic mucosa rather than the marrow. Restricting evaluation to upper endoscopy misplaces the lesion anatomically, because the documented association is with colonic adenomas and carcinomas, making colonoscopy the indicated study. Positron emission tomography has a growing role in prosthetic valve and device infection, but using it routinely to stage a native valve infection substitutes an expensive test for the specific, guideline-supported cancer screening this bacteremia demands.",
    "id": 138
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 3-week-old infant develops poor feeding, constipation, a weak cry, ptosis, and progressive floppiness over two days. The parents report sweetening his pacifier with honey. Which treatment is most appropriate?",
    "options": {
      "A": "Equine heptavalent antitoxin plus high-dose penicillin to eradicate intestinal organisms",
      "B": "Intravenous immunoglobulin at standard replacement dosing plus supportive care alone",
      "C": "Pyridostigmine bridging therapy while awaiting confirmatory electromyography results",
      "D": "Human botulism immune globulin and supportive care, avoiding aminoglycosides entirely"
    },
    "answer": "D",
    "explanation": "The equine heptavalent product is for botulism in older children and adults, and antibiotics are actually discouraged in infant botulism because bacterial lysis can release additional toxin into the gut, with aminoglycosides further impairing neuromuscular transmission. Standard intravenous immunoglobulin contains no meaningful titer against botulinum toxin, so it substitutes an unrelated product for the specific licensed one. Pyridostigmine addresses myasthenia gravis physiology and does not restore transmission when SNARE proteins have been cleaved, and waiting on electromyography delays the specific therapy, BabyBIG, whose early administration shortens ventilation and hospitalization.",
    "id": 139
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 14,
    "question": "A 26-year-old woman presents with fever and a new mitral regurgitant murmur. Three blood culture sets grow a coagulase-negative Staphylococcus identified as Staphylococcus lugdunensis. The intern suggests dismissing it as contamination. What is the best response?",
    "options": {
      "A": "Treat this organism with the same seriousness as Staphylococcus aureus and evaluate for endocarditis",
      "B": "Agree with the intern, since coagulase-negative staphylococci require prosthetic material to cause disease",
      "C": "Repeat cultures in 72 hours and treat only if the same species grows again",
      "D": "Start oral doxycycline for presumed skin flora bacteremia and arrange outpatient follow-up"
    },
    "answer": "A",
    "explanation": "The claim that coagulase-negative staphylococci need foreign material misses the defining exception, because Staphylococcus lugdunensis causes destructive native valve endocarditis despite its laboratory classification. Waiting three days for confirmatory cultures in a patient with three positive sets and a new regurgitant murmur ignores that repeated concordant growth has already excluded contamination. Oral doxycycline with outpatient follow-up treats a trivialized diagnosis rather than the aggressive endovascular infection this organism produces, whereas managing it like S. aureus, with echocardiography, bactericidal intravenous therapy, and surgical evaluation, matches its known behavior.",
    "id": 140
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 66-year-old man is bacteremic with Enterobacter cloacae from a postoperative intraabdominal infection. The initial susceptibility report shows the isolate susceptible to ceftriaxone, cefepime, and meropenem. Which regimen is most appropriate for his bloodstream infection?",
    "options": {
      "A": "Cefepime, because inducible AmpC derepression predicts on-therapy failure of ceftriaxone",
      "B": "Ceftriaxone, because the laboratory report confirms susceptibility at standard breakpoints",
      "C": "Piperacillin-tazobactam, because tazobactam reliably inhibits chromosomal AmpC beta-lactamase",
      "D": "Ertapenem reserved only after documented ceftriaxone failure with repeat positive cultures"
    },
    "answer": "A",
    "explanation": "Trusting the day-1 ceftriaxone result ignores the defining behavior of Enterobacter, in which stably derepressed AmpC mutants are selected during third-generation cephalosporin therapy and emerge as on-treatment resistance in serious infections. Tazobactam is a poor inhibitor of AmpC enzymes, so the piperacillin-tazobactam rationale rests on a false premise even when the isolate tests susceptible. Waiting for a documented clinical failure before switching converts a predictable laboratory phenomenon into a relapse of bacteremia in a postoperative patient, whereas cefepime is stable to AmpC hydrolysis and treats the infection correctly the first time.",
    "id": 141
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 59-year-old woman has Klebsiella pneumoniae bacteremia from pyelonephritis. The isolate produces an NDM metallo-beta-lactamase along with a CTX-M ESBL. Which regimen is most likely to be active?",
    "options": {
      "A": "Meropenem-vaborbactam, since vaborbactam restores carbapenem activity against carbapenemase producers",
      "B": "Imipenem-relebactam combined with amikacin for bactericidal synergy at the urinary source",
      "C": "Ceftazidime-avibactam plus aztreonam, letting avibactam protect aztreonam from the serine enzymes",
      "D": "High-dose ceftazidime-avibactam alone, because avibactam inhibits enzymes of every Ambler class"
    },
    "answer": "C",
    "explanation": "Vaborbactam and relebactam are boronate and diazabicyclooctane inhibitors of serine enzymes such as KPC, and neither touches the zinc-dependent active site of a metallo-beta-lactamase, so both carbapenem combinations fail against NDM regardless of any added aminoglycoside. Avibactam likewise cannot inhibit class B enzymes, so ceftazidime-avibactam alone leaves ceftazidime exposed to NDM hydrolysis. The working construction exploits aztreonam's intrinsic stability to metalloenzymes while avibactam neutralizes the co-carried ESBL and any AmpC that would otherwise destroy aztreonam, which is why the paired regimen is the guideline-endorsed choice here.",
    "id": 142
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 71-year-old man with diabetes has six weeks of severe left ear pain, purulent otorrhea, and granulation tissue on the floor of the external canal at the bony-cartilaginous junction. His erythrocyte sedimentation rate is 88 mm/hr. Which statement about this condition is most accurate?",
    "options": {
      "A": "Amphotericin B should be started empirically, since Aspergillus causes most cases in diabetes",
      "B": "It is skull-base osteomyelitis usually caused by Pseudomonas aeruginosa, requiring weeks of antipseudomonal therapy",
      "C": "Topical fluoroquinolone drops for ten days are adequate once debris is cleared",
      "D": "Urgent radical mastoidectomy is the primary therapy here, with systemic antibiotics playing only a supporting role"
    },
    "answer": "B",
    "explanation": "Aspergillus causes a minority of malignant otitis externa, mostly in profoundly immunocompromised hosts, so empiric amphotericin ahead of antipseudomonal coverage misorders the probabilities in a patient with diabetes. Topical drops treat simple otitis externa, and a ten-day topical course cannot reach osteomyelitis of the skull base, which this duration, granulation tissue, and inflammatory markers announce. Surgery in this disease is limited to biopsy and debridement of necrotic tissue in refractory cases, not a primary mastoidectomy, whereas prolonged systemic antipseudomonal therapy, classically with ciprofloxacin or an antipseudomonal beta-lactam guided by cultures, is the established treatment.",
    "id": 143
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 24-year-old woman presents with two days of fever, tenosynovitis of the right wrist, migratory arthralgias, and six scattered pustular lesions on her extremities. She had a similar, milder episode last year. Blood cultures grow Neisseria gonorrhoeae. Beyond ceftriaxone, which evaluation does the recurrence specifically warrant?",
    "options": {
      "A": "Serum protein electrophoresis to identify an immunoglobulin paraprotein impairing opsonization",
      "B": "Dihydrorhodamine flow cytometry to detect a defect of the phagocyte NADPH oxidase",
      "C": "Quantitative immunoglobulin levels with pre- and post-vaccination pneumococcal antibody titers",
      "D": "A CH50 assay screening for deficiency of terminal complement components C5 through C9"
    },
    "answer": "D",
    "explanation": "A paraprotein workup addresses recurrent encapsulated respiratory infection in myeloma physiology, not recurrent disseminated Neisseria, whose clearance depends on direct membrane attack complex lysis rather than opsonization alone. Dihydrorhodamine testing finds chronic granulomatous disease, whose signature is catalase-positive abscess-formers like Staphylococcus and Serratia rather than gonococcus. Quantitative immunoglobulins with vaccine responses screen for antibody deficiency, which presents with sinopulmonary infections and Giardia rather than repeated gonococcal dissemination. Recurrent Neisseria bacteremia is the classic flag for terminal complement deficiency, and a CH50 near zero is the screening result that clinches it.",
    "id": 144
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 48-year-old man with hereditary hemochromatosis eats raw oysters and 30 hours later develops fever, hypotension, and rapidly spreading hemorrhagic bullae on both legs. Which management is most appropriate?",
    "options": {
      "A": "Vancomycin plus clindamycin for presumed staphylococcal toxic shock with dermatologic consultation",
      "B": "Oral doxycycline alone with outpatient follow-up in 48 hours given early presentation",
      "C": "Doxycycline plus ceftriaxone with urgent surgical evaluation of the bullous extremities",
      "D": "Ciprofloxacin monotherapy after confirmatory stool cultures identify the responsible Vibrio species"
    },
    "answer": "C",
    "explanation": "Staphylococcal toxic shock produces diffuse erythroderma rather than hemorrhagic bullae after shellfish in an iron-overloaded host, and its regimen leaves Vibrio vulnificus completely untreated. Any oral outpatient plan misjudges a disease whose septicemic form kills up to half of patients within days, and clinical deterioration outruns a 48-hour follow-up. Waiting on stool cultures confuses this invasive septicemia with Vibrio gastroenteritis, and the diagnosis is made from blood and bullae cultures while empiric therapy proceeds. The established approach combines a tetracycline with a third-generation cephalosporin plus early debridement of necrotic tissue.",
    "id": 145
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 63-year-old woman completes induction chemotherapy for acute leukemia. On day 12 of neutropenia, while on cefepime for fever, she deteriorates with new pneumonia and bacteremia caused by a gram-negative rod identified as Stenotrophomonas maltophilia. What best explains why her current regimen failed, and what is the preferred treatment?",
    "options": {
      "A": "Intrinsic L1 metallo-beta-lactamase-driven beta-lactam resistance; trimethoprim-sulfamethoxazole is the treatment of choice",
      "B": "Acquired KPC carbapenemase from a plasmid; meropenem-vaborbactam restores beta-lactam activity",
      "C": "Porin OprD loss developing on therapy; ceftolozane-tazobactam reliably overcomes this mechanism",
      "D": "Inducible AmpC derepression selected during cefepime exposure; ertapenem would be the logical next beta-lactam"
    },
    "answer": "A",
    "explanation": "KPC acquisition describes Enterobacterales epidemiology, and meropenem-vaborbactam has no reliable role against Stenotrophomonas, whose resistance is chromosomal and intrinsic rather than plasmid-borne. OprD porin loss is the classic Pseudomonas route to carbapenem resistance and is irrelevant to an organism that resists carbapenems from birth, and ceftolozane-tazobactam is an anti-Pseudomonas answer. The AmpC derepression story belongs to Enterobacter and relatives, and ertapenem would be futile against a metalloenzyme producer. Stenotrophomonas selection during broad beta-lactam exposure in neutropenia is textbook, and trimethoprim-sulfamethoxazole remains first-line therapy.",
    "id": 146
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 19-year-old college student presents with five days of sore throat, then rigors, right-sided neck pain and swelling, and new pleuritic chest pain. Computed tomography shows thrombosis of the right internal jugular vein and multiple peripheral cavitating lung nodules. Which organism and treatment are most likely correct?",
    "options": {
      "A": "Streptococcus pyogenes, treated with penicillin plus clindamycin and urgent neck exploration",
      "B": "Kingella kingae, treated with ceftriaxone after prolonged blood culture incubation",
      "C": "Staphylococcus aureus, treated with intravenous vancomycin plus immediate systemic anticoagulation as primary therapy",
      "D": "Fusobacterium necrophorum, treated with a beta-lactamase-stable regimen such as ampicillin-sulbactam"
    },
    "answer": "D",
    "explanation": "Group A streptococcal pharyngitis can precede peritonsillar abscess, but the specific combination of internal jugular septic thrombophlebitis with septic pulmonary emboli after pharyngitis defines Lemierre syndrome, an anaerobic disease for which routine neck exploration is not primary therapy. Kingella is a pathogen of septic arthritis in toddlers, not postanginal sepsis, and modern culture systems need no extended incubation for it. Staphylococcus aureus causes septic thrombophlebitis of catheterized veins, and anticoagulation in Lemierre syndrome is a debated adjunct rather than primary treatment, whereas Fusobacterium necrophorum with beta-lactamase-stable therapy matches both the syndrome and its microbiology.",
    "id": 147
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 44-year-old man returns from three weeks in Pakistan with nine days of escalating fever, headache, abdominal pain, and constipation. Heart rate is 64 at a temperature of 39.6 degrees Celsius, and he has faint salmon-colored macules on his trunk. Blood cultures are pending. Which empiric therapy is most appropriate?",
    "options": {
      "A": "Ciprofloxacin, the historical drug of choice for enteric fever acquired in South Asia",
      "B": "Meropenem, because extensively drug-resistant typhoid resistant to ceftriaxone circulates in Pakistan",
      "C": "Azithromycin combined with dexamethasone regardless of severity, given to prevent late intestinal perforation",
      "D": "Doxycycline, covering both rickettsial disease and typhoid while cultures incubate"
    },
    "answer": "B",
    "explanation": "Fluoroquinolone nonsusceptibility is so prevalent in South Asian Typhi that ciprofloxacin stopped being reliable empiric therapy there years ago. Azithromycin is reasonable for uncomplicated typhoid, but dexamethasone is reserved for severe disease with shock or depressed consciousness rather than given universally, and steroids do not prevent perforation. Doxycycline treats rickettsioses but is not standard therapy for typhoid and would gamble a bacteremic illness on the wrong drug class. Travel specifically from Pakistan raises the extensively drug-resistant clone, for which a carbapenem is the recommended empiric choice pending susceptibilities.",
    "id": 148
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 52-year-old woman with cirrhosis is admitted with Klebsiella pneumoniae bacteremia from a monomicrobial pyogenic liver abscess; the isolate is hypermucoviscous and string-test positive. In addition to drainage and antibiotics, which complication should be actively screened for?",
    "options": {
      "A": "Guillain-Barre syndrome from molecular mimicry against GM1 gangliosides",
      "B": "Hemolytic uremic syndrome caused by systemic absorption of circulating Shiga toxin from the colon",
      "C": "Endophthalmitis from metastatic seeding, warranting a dilated ophthalmologic examination",
      "D": "Struvite nephrolithiasis from urease-driven alkalinization of the urinary tract"
    },
    "answer": "C",
    "explanation": "Ganglioside mimicry causing ascending paralysis is the Campylobacter story and has no association with Klebsiella liver abscess. Shiga toxin disease belongs to E. coli O157:H7 and Shigella dysenteriae, producing renal endothelial injury after dysentery rather than complicating a hepatic abscess. Urease-driven struvite stones are the Proteus signature, and although Klebsiella is urease-positive, stone screening is not the recognized complication here. The hypervirulent K1/K2 Klebsiella syndrome is defined by metastatic spread to the eye and central nervous system, and missed endophthalmitis costs vision, which is why an eye examination is part of the workup.",
    "id": 149
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 15,
    "question": "A 36-year-old man being treated for a duodenal ulcer asks about eradication testing after completing bismuth quadruple therapy for Helicobacter pylori. He remains on omeprazole daily. Which plan gives a reliable test of cure?",
    "options": {
      "A": "Serologic IgG testing performed eight weeks after therapy ends, with any falling titer taken as confirming eradication",
      "B": "Urea breath testing at least four weeks after antibiotics, with the proton pump inhibitor held for two weeks",
      "C": "An immediate stool antigen test before hospital discharge to document early response",
      "D": "Repeat endoscopy with biopsy in one year reserved only for recurrent symptoms"
    },
    "answer": "B",
    "explanation": "Serology stays positive long after successful treatment and cannot separate cured from active infection on any clinically useful timeline. A stool antigen drawn immediately after therapy reads residual antigen and suppressed but viable organisms unreliably, since accurate testing requires at least four weeks after antibiotics. Deferring all confirmation to a symptom-triggered endoscopy a year later misses asymptomatic persistence in a disease linked to gastric adenocarcinoma, and biopsy is not required when noninvasive tests suffice. The breath test with an adequate antibiotic-free interval and the proton pump inhibitor held two weeks is the standard test of cure.",
    "id": 150
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 42-year-old woman born in the Philippines and vaccinated with bacille Calmette-Guerin in infancy is starting infliximab for Crohn disease. Her chest radiograph is normal and she has no symptoms. Which screening approach is best?",
    "options": {
      "A": "Tuberculin skin testing with a 15 mm cutoff, since prior vaccination raises the threshold for positivity",
      "B": "An interferon-gamma release assay, which uses antigens absent from bacille Calmette-Guerin",
      "C": "No screening, because a normal chest radiograph excludes latent tuberculosis infection reliably",
      "D": "Sputum nucleic acid amplification testing on three specimens before the first biologic dose"
    },
    "answer": "B",
    "explanation": "Raising the skin test cutoff to 15 mm for a vaccinated patient about to receive a TNF inhibitor misapplies the stratified thresholds, since a patient starting a biologic belongs in the 5 mm high-risk category and vaccination cross-reactivity is handled by choosing a different test rather than moving the line. Skipping screening because imaging is normal confuses latent infection, which is by definition radiographically silent, with active disease. Sputum molecular testing is a test for active pulmonary disease in a symptomatic patient and has no role in an asymptomatic person with clear imaging, whereas the ESAT-6 and CFP-10 antigens used by interferon-gamma release assays are absent from the vaccine strain and give a specific answer here.",
    "id": 151
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 55-year-old man with smear-positive cavitary pulmonary tuberculosis has a rapid molecular test detecting an rpoB mutation. Fluoroquinolone susceptibility is subsequently confirmed. Which treatment is preferred?",
    "options": {
      "A": "Standard isoniazid, rifampin, pyrazinamide, and ethambutol with extension to nine months total",
      "B": "Bedaquiline, pretomanid, linezolid, and moxifloxacin for six months with serial electrocardiograms",
      "C": "Amikacin, capreomycin, cycloserine, and para-aminosalicylic acid for eighteen to twenty-four months",
      "D": "Isoniazid, ethambutol, pyrazinamide, and levofloxacin for six months of daily therapy"
    },
    "answer": "B",
    "explanation": "Continuing the standard regimen and merely lengthening it leaves the patient on a regimen whose backbone drug has been genotypically defeated, since rpoB mutations confer rifampin resistance. The injectable-heavy long regimen represents superseded practice, carrying ototoxicity and nephrotoxicity for worse cure rates than the modern oral regimen. Substituting a fluoroquinolone for isoniazid while keeping rifampin describes the regimen for isoniazid monoresistance, which reverses the resistance pattern described here. Rifampin resistance is managed as multidrug-resistant disease, and BPaLM is the preferred six-month regimen when fluoroquinolone susceptibility is documented, with QT monitoring because bedaquiline and moxifloxacin both prolong it.",
    "id": 152
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 61-year-old slender woman with no smoking history has two years of chronic cough. Computed tomography shows right middle lobe and lingular bronchiectasis with clustered small nodules. Two separate sputum cultures grow Mycobacterium avium complex, macrolide-susceptible. Which statement is most accurate?",
    "options": {
      "A": "She meets diagnostic criteria and should receive azithromycin, rifampin, and ethambutol",
      "B": "Azithromycin monotherapy is appropriate because the isolate is macrolide-susceptible",
      "C": "Two positive cultures represent colonization, so observation with repeat imaging is preferred",
      "D": "Isoniazid, rifampin, pyrazinamide, and ethambutol should be started pending speciation confirmation"
    },
    "answer": "A",
    "explanation": "Macrolide monotherapy is specifically prohibited because it selects 23S ribosomal RNA mutations that cost the patient the single most important drug in the regimen. Calling two concordant positive cultures mere colonization ignores the published criteria, which are satisfied here by compatible symptoms, compatible imaging, and two separate positive expectorated sputum cultures of the same species. The four-drug tuberculosis regimen treats M. tuberculosis, and pyrazinamide and isoniazid have no meaningful role against M. avium complex, so it would be the wrong drugs for an organism already identified. The three-drug macrolide, rifamycin, and ethambutol combination is the established regimen.",
    "id": 153
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 34-year-old man with newly diagnosed HIV, a CD4 count of 32 cells per microliter, and culture-confirmed pulmonary tuberculosis starts rifampin-based therapy. When should antiretroviral therapy begin?",
    "options": {
      "A": "Within the first two weeks of tuberculosis therapy, since early initiation reduces mortality at this CD4 count",
      "B": "After completing the full six-month tuberculosis course to avoid immune reconstitution syndrome",
      "C": "At eight weeks, the standard interval that applies regardless of CD4 count",
      "D": "Immediately, together with a ritonavir-boosted protease inhibitor, which is unaffected by rifampin enzyme induction"
    },
    "answer": "A",
    "explanation": "Deferring antiretroviral therapy for six months in a patient with a CD4 count of 32 cells per microliter trades a manageable inflammatory syndrome for a real risk of death from other opportunistic infections. The eight-week interval is correct for higher CD4 counts but not for profound immunosuppression, where randomized data favor starting within two weeks. Protease inhibitors are heavily affected by rifampin induction, not spared by it, which is why rifabutin substitution or a dolutegravir-based regimen with dose adjustment is used, making that option pharmacologically backward.",
    "id": 154
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 47-year-old woman on month two of isoniazid, rifampin, pyrazinamide, and ethambutol reports difficulty distinguishing red from green and mild blurring of central vision. Which action is most appropriate?",
    "options": {
      "A": "Add pyridoxine 50 mg daily, since this presentation reflects isoniazid-induced neuropathy",
      "B": "Check uric acid and treat for gout-associated ocular inflammation from pyrazinamide",
      "C": "Reassure her that orange discoloration of secretions commonly causes transient visual changes",
      "D": "Stop ethambutol immediately and arrange ophthalmologic evaluation of acuity and color vision"
    },
    "answer": "D",
    "explanation": "Pyridoxine prevents isoniazid peripheral neuropathy, a sensory disturbance of the extremities rather than loss of red-green discrimination, so supplementation does not address optic nerve toxicity. Rifampin does color secretions orange, but that is a harmless discoloration of tears and urine and does not impair color perception or acuity, so offering reassurance risks permanent vision loss. Pyrazinamide raises uric acid and causes arthralgias, not ocular inflammation, so a gout workup chases the wrong drug. Dose-dependent retrobulbar optic neuritis from ethambutol demands immediate drug cessation, which is why baseline and monthly vision checks exist.",
    "id": 155
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 29-year-old man with tuberculous meningitis and HIV (CD4 count 68 cells per microliter) is started on antituberculous therapy. Which additional management decisions are best supported?",
    "options": {
      "A": "Give dexamethasone and start antiretroviral therapy on the same day as tuberculosis treatment",
      "B": "Withhold corticosteroids because they impair penetration of antituberculous drugs into cerebrospinal fluid",
      "C": "Give dexamethasone with a taper, and defer antiretroviral therapy for roughly four to eight weeks",
      "D": "Give dexamethasone and treat for a total of six months, the same duration as pulmonary disease"
    },
    "answer": "C",
    "explanation": "Starting antiretroviral therapy the same day in tuberculous meningitis increases severe adverse events, since intracranial immune reconstitution is dangerous in a closed space, so the usual early-initiation rule for low CD4 counts is deliberately suspended here. Withholding steroids contradicts randomized evidence that adjunctive dexamethasone reduces mortality in tuberculous meningitis, and the stated rationale about drug penetration is invented. Treating central nervous system disease for only six months is too short, since 9 to 12 months is recommended, so that choice pairs a correct steroid decision with an inadequate duration.",
    "id": 156
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 52-year-old aquarium hobbyist develops a violaceous nodule on the dorsum of his right hand, followed by two more nodules tracking up the forearm over six weeks. Which laboratory instruction is most important when submitting the biopsy?",
    "options": {
      "A": "Request extended incubation for six weeks on solid media at 37 degrees Celsius",
      "B": "Request fungal culture only, since sporotrichoid spread indicates Sporothrix schenckii",
      "C": "Request routine bacterial culture, because rapidly growing mycobacteria appear within seven days",
      "D": "Request mycobacterial culture at 30 degrees Celsius, the temperature favoring Mycobacterium marinum"
    },
    "answer": "D",
    "explanation": "Incubating only at 37 degrees Celsius is the specific error that causes this organism to be missed, because it is a cooler-temperature grower found in acral skin. Sporotrichoid lymphatic spread is a pattern, not a diagnosis, and requesting fungal culture alone in a patient with aquarium exposure abandons the leading candidate. Routine bacterial culture will not recover a mycobacterium at all, and the seven-day growth window belongs to the rapid growers such as M. fortuitum rather than to this organism. Telling the laboratory to incubate mycobacterial cultures at 30 degrees Celsius is what makes recovery likely.",
    "id": 157
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 38-year-old man with HIV starts antiretroviral therapy two weeks after beginning treatment for culture-confirmed pulmonary tuberculosis. Three weeks later he develops recurrent fever and enlarging cervical nodes, and his viral load has fallen substantially. Sputum cultures from before therapy were pan-susceptible. What is the best next step?",
    "options": {
      "A": "Stop the antiretroviral therapy permanently, since immune reconstitution indicates that it was started far too early",
      "B": "Continue both regimens, exclude treatment failure and new infection, and add corticosteroids for symptoms",
      "C": "Broaden antituberculous therapy empirically for presumed acquired multidrug resistance",
      "D": "Interrupt antituberculous therapy for two weeks to reduce the antigen load driving inflammation"
    },
    "answer": "B",
    "explanation": "Permanently stopping antiretroviral therapy sacrifices immune recovery for a syndrome that is usually self-limited and treatable, and reinterpreting a falling viral load as an error misreads a successful response. Broadening for presumed resistance ignores that the baseline isolate was pan-susceptible and that acquired resistance takes months of inadequate therapy, not three weeks of appropriate therapy. Interrupting tuberculosis treatment risks relapse and resistance selection to reduce antigen the immune system is already attacking. Paradoxical immune reconstitution inflammatory syndrome is managed by continuing both regimens, excluding alternatives, and using corticosteroids, which randomized data support.",
    "id": 158
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 66-year-old man being evaluated for weight loss and fever has miliary infiltrates on chest computed tomography, pancytopenia, and hepatosplenomegaly. Three sputum smears are negative for acid-fast bacilli. What is the most appropriate next step?",
    "options": {
      "A": "Begin empiric four-drug antituberculous therapy while pursuing additional diagnostic specimens",
      "B": "Await culture results for six weeks before committing to therapy to preserve diagnostic accuracy",
      "C": "Diagnose sarcoidosis, since miliary nodules with smear-negative sputum favor a granulomatous noninfectious process",
      "D": "Start a fluoroquinolone alone, which covers mycobacteria while leaving other cultures interpretable"
    },
    "answer": "A",
    "explanation": "Waiting six weeks for culture in miliary disease is untenable because untreated disseminated tuberculosis has very high mortality, and smear negativity is expected in this form rather than reassuring. Declaring sarcoidosis on the basis of negative smears ignores that the clinical picture of wasting, fever, pancytopenia, and hepatosplenomegaly with a miliary pattern strongly favors disseminated infection, and the funduscopic search for choroidal tubercles would push further in that direction. Fluoroquinolone monotherapy is an especially harmful choice because it partially treats tuberculosis, selects fluoroquinolone resistance, and lowers culture yield, whereas empiric four-drug therapy alongside continued diagnostic sampling is the standard approach.",
    "id": 159
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 16,
    "question": "A 31-year-old recent arrival from Nepal has a positive interferon-gamma release assay, no symptoms, and normal chest imaging. She takes no interacting medications and wants the shortest effective course. Which regimen best fits?",
    "options": {
      "A": "Nine months of daily isoniazid with pyridoxine, the historical standard for latent infection",
      "B": "Six months of daily isoniazid, rifampin, pyrazinamide, and ethambutol as for active disease",
      "C": "Twelve weeks of once-weekly isoniazid plus rifapentine, which can be self-administered",
      "D": "Two weeks of high-dose rifampin, which achieves sterilization equivalent to longer courses"
    },
    "answer": "C",
    "explanation": "The nine-month isoniazid course remains effective but is the longest option with the poorest completion rate and more hepatotoxicity, so it does not match her request or current preference for rifamycin-based short courses. Treating latent infection with the full four-drug active-disease regimen overtreats a patient with no clinical, radiographic, or microbiologic evidence of active tuberculosis and adds unnecessary toxicity. A two-week rifampin course is not an established regimen and the claimed equivalence is fabricated. The twelve-dose weekly isoniazid plus rifapentine regimen is a recommended short course with high completion rates and is appropriate here.",
    "id": 160
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 28-year-old man has a reactive treponemal chemiluminescent immunoassay ordered as a screening test, with a nonreactive RPR. He reports no history of treated syphilis. What is the appropriate next step?",
    "options": {
      "A": "Report the result as a false positive, since a nonreactive RPR excludes treponemal infection",
      "B": "Treat empirically with a single dose of benzathine penicillin G and repeat the RPR in six months",
      "C": "Perform a second, different treponemal test such as TP-PA to arbitrate the discordant results",
      "D": "Perform lumbar puncture, because discordant serology by itself indicates asymptomatic neurosyphilis"
    },
    "answer": "C",
    "explanation": "Declaring a false positive on the basis of a nonreactive nontreponemal test ignores that late latent and previously treated syphilis commonly have nonreactive or very low RPR values, so the discordance is unresolved rather than negative. Treating empirically without arbitration commits a patient to therapy and a permanent diagnosis on a single automated assay that has a real false-positive rate. Lumbar puncture is indicated for neurologic, ocular, or otologic symptoms, tertiary disease, or treatment failure, and discordant screening serology alone is not an indication. The reverse-sequence algorithm specifically calls for a second treponemal test of a different format to resolve this pattern.",
    "id": 161
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 31-year-old woman at 22 weeks of gestation has secondary syphilis and a documented, skin-test-confirmed IgE-mediated penicillin allergy. Which management is correct?",
    "options": {
      "A": "Ceftriaxone 1 g daily for ten days, accepting partial cross-reactivity as an acceptable trade-off",
      "B": "Azithromycin 2 g as a single oral dose, which reliably prevents congenital infection",
      "C": "Doxycycline 100 mg twice daily for fourteen days with fetal growth monitoring",
      "D": "Formal penicillin desensitization in a monitored setting, then benzathine penicillin G"
    },
    "answer": "D",
    "explanation": "Substituting ceftriaxone is not an established regimen for preventing congenital syphilis and would leave the fetus inadequately protected while relying on assumed cross-reactivity data. Azithromycin fails to prevent fetal infection and macrolide resistance in T. pallidum is widespread, so the claimed reliability is false. Doxycycline is contraindicated in pregnancy and, separately, does not prevent congenital infection, so growth monitoring does not rescue the choice. Penicillin is the only adequate therapy for syphilis in pregnancy, which makes desensitization followed by penicillin the standard of care rather than an alternative.",
    "id": 162
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 9-year-old boy in North Carolina has five days of fever, severe headache, myalgia, and now macules on his wrists and ankles spreading to his trunk. Platelets are 92,000 per microliter, sodium is 129 mmol/L, and transaminases are mildly elevated. Which treatment is most appropriate?",
    "options": {
      "A": "Doxycycline immediately, which is recommended for suspected rickettsial illness at any age",
      "B": "Chloramphenicol, historically preferred in children under nine years old to avoid permanent dental staining",
      "C": "Ceftriaxone plus vancomycin while awaiting confirmatory rickettsial serology",
      "D": "Amoxicillin for presumed early Lyme disease given the tick exposure history"
    },
    "answer": "A",
    "explanation": "Choosing chloramphenicol to avoid dental staining reflects outdated teaching, since short doxycycline courses do not stain teeth and chloramphenicol is associated with higher mortality in this disease. Empiric ceftriaxone and vancomycin treat bacterial sepsis and meningitis but have no activity against an obligate intracellular rickettsia, and waiting for serology, which is retrospective, is the single greatest contributor to death from this infection. Amoxicillin for presumed Lyme disease misreads the syndrome, since a centripetal petechial rash with palm and sole involvement, hyponatremia, and thrombocytopenia is not Lyme disease and amoxicillin lacks rickettsial activity.",
    "id": 163
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 72-year-old splenectomized man in Connecticut has two weeks of fever, fatigue, and dark urine. Hemoglobin is 8.1 g/dL, lactate dehydrogenase is elevated, and a thin smear shows intraerythrocytic ring forms and occasional tetrads with 7 percent parasitemia. Which treatment is most appropriate?",
    "options": {
      "A": "Doxycycline plus ceftriaxone, covering probable coinfection with Lyme disease and anaplasmosis",
      "B": "Clindamycin plus quinine, with consideration of exchange transfusion for severe disease",
      "C": "Atovaquone plus azithromycin for seven days as standard first-line outpatient therapy",
      "D": "Artemether-lumefantrine, since the smear morphology is consistent with Plasmodium falciparum"
    },
    "answer": "B",
    "explanation": "Doxycycline and ceftriaxone treat the tick-borne bacterial coinfections that share this vector but have no activity against a babesial parasite, leaving the hemolysis untreated. The atovaquone plus azithromycin combination is correct for mild disease, and calling it appropriate here underestimates an asplenic patient with 7 percent parasitemia and significant hemolysis, who belongs on the severe-disease regimen. Antimalarial artemisinin combination therapy answers a misidentification, since the tetrad or Maltese cross form and the absence of a travel history point away from falciparum malaria, whose treatment differs.",
    "id": 164
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 45-year-old goat farmer with a bicuspid aortic valve has three months of low-grade fever, weight loss, and a new murmur. Three sets of blood cultures are sterile after five days. Serology shows a phase I IgG titer markedly higher than phase II. Which treatment is indicated?",
    "options": {
      "A": "Ceftriaxone plus gentamicin for six weeks, the standard regimen for culture-negative endocarditis",
      "B": "Doxycycline plus rifampin for six weeks, mirroring the regimen used in brucellosis",
      "C": "Doxycycline for fourteen days, the same course used for acute infection with this organism",
      "D": "Doxycycline plus hydroxychloroquine for at least eighteen months, with serologic follow-up"
    },
    "answer": "D",
    "explanation": "A ceftriaxone and gentamicin regimen targets the streptococci and HACEK organisms of conventional culture-negative endocarditis and has no activity against an obligate intracellular organism living in the phagolysosome. The brucellosis regimen treats a different intracellular pathogen and does not include the agent needed to alkalinize the phagolysosome, so it is both the wrong drug pair and far too short. A fourteen-day course treats acute infection, and applying it to persistent focalized infection of a valve guarantees relapse. The dominant phase I titer defines persistent infection, treated with doxycycline plus hydroxychloroquine for 18 months on a native valve.",
    "id": 165
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 34-year-old woman is bitten on the hand by her cat. Twelve hours later the wound is exquisitely painful, erythematous, and draining purulent fluid, with early lymphangitis. Which antibiotic choice is best?",
    "options": {
      "A": "Amoxicillin-clavulanate, which covers Pasteurella multocida along with staphylococci and anaerobes",
      "B": "Cephalexin, providing reliable coverage of both the likely gram-negative and gram-positive wound organisms",
      "C": "Clindamycin monotherapy, chosen for its anaerobic and staphylococcal activity in bite wounds",
      "D": "Trimethoprim-sulfamethoxazole for community-acquired MRSA, the dominant bite wound pathogen"
    },
    "answer": "A",
    "explanation": "Cephalexin is a first-generation cephalosporin, and Pasteurella multocida is characteristically resistant to this class, which is precisely the classic error in cat bite management. Clindamycin also lacks reliable Pasteurella activity despite good anaerobic and staphylococcal coverage, so it leaves the organism most likely responsible for a 12-hour fulminant cat bite cellulitis untreated. Community-acquired MRSA is not the dominant bite wound pathogen, and trimethoprim-sulfamethoxazole has poor streptococcal coverage, making it doubly unsuitable. Amoxicillin-clavulanate covers Pasteurella, oral anaerobes, streptococci, and staphylococci together, which is why it is standard.",
    "id": 166
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 26-year-old man awakens to find a bat flying in his bedroom. He has no visible bite and has never received rabies vaccine. What is the appropriate management?",
    "options": {
      "A": "Observe for ten days and begin prophylaxis only if the bat is captured and tests positive",
      "B": "Rabies vaccine alone on days 0, 3, 7, and 14, since immune globulin is reserved for visible wounds",
      "C": "Human rabies immune globulin 20 IU/kg plus vaccine on days 0, 3, 7, and 14",
      "D": "No prophylaxis, because bats in the United States rarely carry the rabies virus"
    },
    "answer": "C",
    "explanation": "The ten-day observation period applies only to healthy, available dogs, cats, and ferrets, not to bats, and waiting for testing of an escaped animal risks a uniformly fatal disease. Withholding immune globulin because no wound is visible misapplies the indication, since immune globulin is given to all previously unvaccinated patients with a significant exposure and infiltrated at the wound site when one exists. Declaring bats low risk inverts the epidemiology, as bats are a leading source of human rabies in the United States and their bites are frequently unnoticed, which is exactly why an unwitnessed bat exposure in a sleeping person warrants full prophylaxis.",
    "id": 167
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 38-year-old triathlete develops fever, severe calf myalgia, and conjunctival suffusion nine days after an open-water swim in floodwater. He then becomes jaundiced with a bilirubin of 9 mg/dL, creatinine of 3.4 mg/dL, potassium of 3.0 mmol/L, and platelets of 68,000 per microliter, with only modestly elevated transaminases. Which diagnosis and treatment fit best?",
    "options": {
      "A": "Acute hepatitis A infection, treated with supportive care and contact vaccination",
      "B": "Severe leptospirosis (Weil syndrome), treated with intravenous penicillin G or ceftriaxone",
      "C": "Plasmodium falciparum malaria, treated with intravenous artesunate and supportive care",
      "D": "Yellow fever, treated supportively with close attention to hemorrhage, coagulopathy, and hepatic failure"
    },
    "answer": "B",
    "explanation": "Hepatitis A produces jaundice with markedly elevated transaminases rather than the striking bilirubin-transaminase dissociation seen here, and it does not cause hypokalemic acute kidney injury or conjunctival suffusion. Falciparum malaria requires travel to an endemic region and a positive smear, neither suggested by a freshwater swim in floodwater, and it does not produce the calf myalgia and conjunctival findings described. Yellow fever likewise requires appropriate exposure and shows very high transaminases. Freshwater exposure with calf myalgia, conjunctival suffusion, high bilirubin with low transaminases, hypokalemic renal failure, and a high creatine kinase is the classic severe leptospirosis picture.",
    "id": 168
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 50-year-old man in Wisconsin has a 9 cm expanding annular erythematous lesion on his thigh, present for five days, with mild fatigue. Lyme serology is negative. What is the best course of action?",
    "options": {
      "A": "Await convalescent serology in four weeks and treat only if seroconversion is documented",
      "B": "Order a two-tier test with IgM immunoblot and treat only if two IgM bands are present",
      "C": "Treat now with doxycycline for erythema migrans, which is a clinical diagnosis",
      "D": "Treat with intravenous ceftriaxone for twenty-eight days given the lesion size and systemic symptoms"
    },
    "answer": "C",
    "explanation": "Waiting for convalescent serology delays treatment for weeks in a patient whose pathognomonic lesion already establishes the diagnosis, and untreated early disease can disseminate to the nerves and heart in that interval. Requiring IgM immunoblot bands before treating has the same problem, since serology is insensitive during early localized infection and a negative result at five days is expected rather than informative. Intravenous ceftriaxone for a month is reserved for meningitis, high-grade carditis, or refractory arthritis, and using it for uncomplicated erythema migrans exposes the patient to line complications for no benefit when oral doxycycline for ten days suffices.",
    "id": 169
  },
  {
    "domain": "bacterial_diseases",
    "chapter": 17,
    "question": "A 44-year-old woman who eats unpasteurized goat cheese from her family farm has three months of undulating fever, drenching sweats, low back pain, and a new diastolic murmur. Blood cultures held for extended incubation grow a small, slow-growing gram-negative coccobacillus. Which management principle is most important?",
    "options": {
      "A": "Multidrug therapy with intracellular activity for a prolonged course, with surgical evaluation of the valve",
      "B": "Doxycycline monotherapy for six weeks, adequate because the organism is highly tetracycline-susceptible",
      "C": "A single agent chosen strictly by its minimum inhibitory concentration, since combination therapy adds only toxicity",
      "D": "Ceftriaxone for four weeks, the standard duration for native valve bacterial endocarditis"
    },
    "answer": "A",
    "explanation": "Monotherapy of any kind, including doxycycline, produces unacceptably high relapse rates because the organism survives inside macrophages where single-agent exposure fails to eradicate it, so susceptibility testing results do not translate into monotherapy success. Arguing that combinations only add toxicity reverses the evidence, since doxycycline paired with an aminoglycoside or rifampin is the established approach. Ceftriaxone for four weeks is the regimen for streptococcal native valve endocarditis and is both the wrong drug class and the wrong duration for endocarditis caused by a facultative intracellular organism, which is the leading cause of death in this infection and usually requires valve surgery.",
    "id": 170
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 58-year-old man with chronic obstructive pulmonary disease is hospitalized with severe pneumonia requiring high-flow nasal oxygen at 60 liters per minute. Blood cultures and a urinary pneumococcal antigen are sent. C-reactive protein is markedly elevated, and influenza testing is negative. Which adjunctive therapy is best supported?",
    "options": {
      "A": "Hydrocortisone 200 mg daily with a taper, based on a mortality benefit in severe pneumonia",
      "B": "Intravenous immunoglobulin to neutralize pneumococcal capsular polysaccharide antigen",
      "C": "Inhaled corticosteroids given at high dose to reduce airway inflammation throughout the acute illness",
      "D": "Routine addition of vancomycin and an antipseudomonal agent regardless of risk factors"
    },
    "answer": "A",
    "explanation": "Intravenous immunoglobulin has no established role in ordinary bacterial pneumonia and would not be given to neutralize capsular antigen, which is not how pneumococcal disease is treated. Inhaled corticosteroids act topically on airway inflammation in obstructive disease and do not address the systemic inflammatory response of severe pneumonia, so escalating them substitutes the wrong route and target. Reflexively adding anti-MRSA and antipseudomonal coverage without risk factors is precisely the practice guidelines abandoned when the healthcare-associated pneumonia category was retired. The CAPE COD trial showed a 28-day mortality reduction with hydrocortisone in severe community-acquired pneumonia, which fits this patient on high-flow oxygen.",
    "id": 171
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 64-year-old woman returning from a hotel stay has pneumonia with confusion, diarrhea, sodium of 128 mmol/L, alanine aminotransferase of 140 units per liter, and a creatine kinase of 900 units per liter. Her Legionella urinary antigen is negative. What is the best next step?",
    "options": {
      "A": "Conclude that Legionella is excluded and treat with ceftriaxone alone for typical bacterial pneumonia",
      "B": "Send lower respiratory culture on buffered charcoal yeast extract medium and treat with levofloxacin",
      "C": "Send Legionella serology and repeat the urinary antigen after 72 hours of therapy",
      "D": "Add doxycycline to ceftriaxone, since tetracyclines are the preferred agents for legionellosis"
    },
    "answer": "B",
    "explanation": "Treating the negative antigen as exclusionary misunderstands the assay, which detects only serogroup 1 of L. pneumophila and therefore misses other serogroups and species, and ceftriaxone alone would fail entirely against an intracellular organism. Repeating the urinary antigen and waiting on serology delays therapy in a patient whose hyponatremia, transaminitis, elevated creatine kinase, diarrhea, and travel history make the diagnosis likely, and serology is retrospective. Doxycycline has activity but is not the preferred agent, since a respiratory fluoroquinolone or azithromycin is recommended, and the more important omission in that choice is the failure to obtain a culture that can detect non-serogroup-1 disease and support outbreak investigation.",
    "id": 172
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 41-year-old healthy man has three days of sore throat, fever by history, tonsillar exudate, and tender anterior cervical nodes, without cough. Rapid antigen testing for group A streptococcus is negative. What is the most appropriate management?",
    "options": {
      "A": "Treat empirically with amoxicillin for ten days because the clinical score is high",
      "B": "Order a heterophile antibody test and treat with prednisone for presumed mononucleosis",
      "C": "Prescribe azithromycin for five days to cover both streptococcal and atypical pathogens",
      "D": "Perform throat culture and withhold antibiotics pending the result, providing symptom relief"
    },
    "answer": "D",
    "explanation": "Empiric amoxicillin after a negative rapid test treats a patient who most likely has viral pharyngitis, since even a high Centor score leaves most adults without streptococcal infection and the test used is highly specific. Azithromycin adds macrolide resistance pressure and covers atypical pathogens that do not cause this syndrome. Jumping to mononucleosis testing with corticosteroids is unsupported without splenomegaly, posterior adenopathy, or profound fatigue, and steroids are not routine therapy for pharyngitis. Backup culture with symptomatic care is reasonable in an adult with a high score and negative antigen test, and it withholds antibiotics until a pathogen is documented.",
    "id": 173
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 29-year-old woman is hospitalized on day 6 of influenza A after several days of improvement followed by abrupt high fever, pleuritic pain, and hypotension. Chest imaging shows a new cavitating right lower lobe consolidation. Which empiric regimen is most appropriate?",
    "options": {
      "A": "Ceftriaxone plus azithromycin, the standard inpatient community-acquired pneumonia regimen",
      "B": "Piperacillin-tazobactam combined with tobramycin for a presumed Pseudomonas aeruginosa superinfection of the lung",
      "C": "Ceftriaxone plus vancomycin or linezolid, covering post-influenza Staphylococcus aureus",
      "D": "Oseltamivir alone at double dose, since the deterioration reflects ongoing viral replication"
    },
    "answer": "C",
    "explanation": "The standard inpatient regimen omits any anti-MRSA agent, which is the specific gap that kills young patients with necrotizing post-influenza staphylococcal pneumonia. Antipseudomonal therapy with an aminoglycoside targets an organism without a risk factor here, and aminoglycosides penetrate lung poorly. Doubling oseltamivir misreads the clinical course, since secondary bacterial infection, not continued viral replication, explains improvement followed by abrupt deterioration with a new cavitating consolidation, and there is no established benefit to double-dose oseltamivir. Adding vancomycin or linezolid to a beta-lactam addresses both pneumococcus and community MRSA.",
    "id": 174
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 70-year-old man hospitalized with COVID-19 is on room air with a saturation of 96 percent, symptomatic for 3 days, and has multiple comorbidities. Which treatment approach is best supported?",
    "options": {
      "A": "Dexamethasone 6 mg daily for ten days plus therapeutic-dose anticoagulation",
      "B": "Tocilizumab plus baricitinib to preempt the inflammatory phase of illness",
      "C": "An antiviral such as remdesivir, withholding dexamethasone while he requires no supplemental oxygen",
      "D": "Empiric ceftriaxone and azithromycin, since bacterial coinfection is present in most hospitalized cases"
    },
    "answer": "C",
    "explanation": "Dexamethasone showed benefit only in patients requiring supplemental oxygen or ventilation, with a signal toward harm in those who do not, so giving it to a patient on room air inverts the trial result. Layering two immunomodulators as prophylaxis against a phase he has not entered exposes him to immunosuppression during active viral replication without evidence of benefit. Empiric antibiotics rest on a false premise, since early bacterial coinfection in COVID-19 is uncommon. Within the first week, therapy targets replication, making an antiviral appropriate while steroids are deliberately withheld until an oxygen requirement appears.",
    "id": 175
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 62-year-old man intubated for 6 days develops a new left lower lobe infiltrate, fever, purulent secretions, and worsening oxygenation. He received cefazolin perioperatively but no other recent antibiotics, the unit's MRSA rate among S. aureus isolates is 8 percent, and he is not in shock. Which empiric approach fits guidelines?",
    "options": {
      "A": "Cefepime alone, with tracheal aspirate culture sent before starting and de-escalation planned",
      "B": "Meropenem, vancomycin, and amikacin together, then narrowing the regimen after cultures return in 48 hours",
      "C": "Vancomycin plus ceftazidime plus levofloxacin, giving dual antipseudomonal coverage",
      "D": "Await bronchoscopic quantitative culture results before initiating any antibiotic therapy"
    },
    "answer": "A",
    "explanation": "Triple therapy with a carbapenem, vancomycin, and an aminoglycoside gives MRSA and dual gram-negative coverage that his risk profile does not justify, and aminoglycosides penetrate lung poorly. Adding vancomycin and a second antipseudomonal agent has the same problem, since dual coverage is reserved for prior intravenous antibiotic exposure, high local resistance, shock, or acute respiratory distress syndrome. Withholding antibiotics pending bronchoscopy delays therapy in a deteriorating patient, and guidelines prefer noninvasive semiquantitative sampling anyway. A single active antipseudomonal beta-lactam with cultures sent first and a de-escalation plan matches both his MRSA risk and his gram-negative risk.",
    "id": 176
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 55-year-old woman with pneumonia has a moderate left pleural effusion. Thoracentesis yields turbid fluid with pH 7.08, glucose 42 mg/dL, lactate dehydrogenase 1,400 units per liter, and a negative Gram stain. Ultrasound shows septations. What is the best management?",
    "options": {
      "A": "Repeat thoracentesis in 48 hours and drain only if the Gram stain becomes positive",
      "B": "Antibiotics alone for six weeks, since a negative Gram stain indicates a sterile inflammatory effusion",
      "C": "Immediate video-assisted thoracoscopic decortication, since fibrinolytics are ineffective in empyema",
      "D": "Chest tube drainage, and if drainage stalls, intrapleural tissue plasminogen activator with DNase"
    },
    "answer": "D",
    "explanation": "Waiting for a positive Gram stain misuses the criteria, since a pH below 7.20, glucose below 60 mg/dL, elevated lactate dehydrogenase, and septations each independently mandate drainage, and culture-negative empyema is common. Proceeding straight to decortication skips an effective, less invasive step, and the claim that fibrinolytics are ineffective contradicts the MIST2 finding that combined tissue plasminogen activator and DNase improved drainage, although either agent alone did not. Antibiotics alone for a loculated complicated effusion leaves an undrained infected space, the classic source-control failure, and a negative Gram stain does not make the fluid sterile.",
    "id": 177
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 33-year-old previously healthy man has 8 days of cough, low-grade fever, and headache, with a chest radiograph showing bilateral patchy interstitial infiltrates that look worse than he appears. His hemoglobin has fallen to 10.2 g/dL with an elevated reticulocyte count and a positive direct antiglobulin test for complement. Which pathogen and treatment fit best?",
    "options": {
      "A": "Streptococcus pneumoniae, treated with a high-dose oral amoxicillin course for five days as an outpatient",
      "B": "Legionella pneumophila, treated with levofloxacin after sending a urinary antigen test",
      "C": "Mycoplasma pneumoniae, treated with doxycycline or a macrolide depending on local resistance",
      "D": "Chlamydia psittaci, treated with doxycycline after confirming avian exposure history"
    },
    "answer": "C",
    "explanation": "Pneumococcal pneumonia typically produces focal consolidation in a patient who looks ill, and amoxicillin cannot treat an organism with no cell wall in any case. Legionella characteristically causes severe disease with hyponatremia, diarrhea, and transaminitis rather than a walking illness with cold agglutinin hemolysis, and it does not produce this hematologic signature. Psittacosis requires bird exposure and presents with severe headache, hepatitis, and splenomegaly. Protracted cough with radiographic findings exceeding the clinical appearance, plus cold agglutinin-mediated hemolytic anemia, is the classic Mycoplasma pattern, treated with doxycycline or a macrolide as resistance permits.",
    "id": 178
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 46-year-old woman with no comorbidities has 12 days of paroxysmal coughing fits with post-tussive vomiting and a white count of 18,000 per microliter with 62 percent lymphocytes. Nasopharyngeal PCR confirms Bordetella pertussis. Her 2-month-old nephew lives in the home. Which management is most appropriate?",
    "options": {
      "A": "Azithromycin for her and macrolide postexposure prophylaxis for household contacts including the infant",
      "B": "Azithromycin for her alone, since prophylaxis is not effective once a case is already symptomatic",
      "C": "Supportive care only, because antibiotics after the catarrhal stage neither help nor reduce transmission",
      "D": "Amoxicillin-clavulanate for her plus Tdap for the infant as immediate postexposure protection"
    },
    "answer": "A",
    "explanation": "Treating only the index patient abandons an infant at the highest risk of fatal pertussis, and household prophylaxis is specifically recommended regardless of the index case's stage. Claiming antibiotics are useless after the catarrhal stage overstates a real limitation, since late treatment does little for symptoms but still shortens the infectious period, which is the reason to give it. Amoxicillin-clavulanate has no established role in pertussis, and Tdap cannot be given to a 2-month-old as postexposure protection, since that infant needs the primary DTaP series on schedule plus chemoprophylaxis now.",
    "id": 179
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 18,
    "question": "A 52-year-old man with a seizure disorder and poor dentition has 4 weeks of fever, weight loss, and foul-smelling sputum. Imaging shows a 5 cm thick-walled cavity with an air-fluid level in the right lower lobe. Which management is best?",
    "options": {
      "A": "A five-day course of ceftriaxone plus azithromycin, exactly matching the standard community-acquired pneumonia duration",
      "B": "Ampicillin-sulbactam with anaerobic coverage for three weeks or more, guided by clinical and radiographic response",
      "C": "Immediate surgical lobectomy, since medical therapy rarely resolves a cavity of this size",
      "D": "Isoniazid, rifampin, pyrazinamide, and ethambutol pending sputum acid-fast results"
    },
    "answer": "B",
    "explanation": "A five-day community-acquired pneumonia course is far too short for a lung abscess and omits reliable anaerobic coverage, which this putrid presentation with poor dentition specifically requires. Moving to lobectomy first ignores that most abscesses drain through the bronchial tree and resolve on prolonged antibiotics, with surgery reserved for medical failure or complications. Starting full antituberculous therapy commits the patient to four drugs with real toxicity when the clinical picture of aspiration risk, periodontal disease, and putrid sputum points to anaerobic abscess, though tuberculosis should still be excluded diagnostically alongside treatment for the likely diagnosis.",
    "id": 180
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "A 68-year-old man with fever, confusion, and nuchal rigidity is about to receive empiric therapy for suspected bacterial meningitis. Blood cultures have been drawn, and a head CT is planned before lumbar puncture because he is obtunded. Which management sequence is most appropriate?",
    "options": {
      "A": "Perform CT and lumbar puncture first so cultures are obtained before any therapy begins",
      "B": "Give dexamethasone with vancomycin, ceftriaxone, and ampicillin now, then obtain CT and lumbar puncture",
      "C": "Give vancomycin and ceftriaxone now, hold dexamethasone until the pneumococcal antigen returns positive",
      "D": "Give ceftriaxone alone now and add other agents once CSF Gram stain results return"
    },
    "answer": "B",
    "explanation": "Delaying all therapy until after imaging and lumbar puncture sacrifices the survival benefit of early antibiotics, and CSF studies remain informative for hours after dosing. Withholding dexamethasone until an organism is confirmed defeats its purpose, since the steroid must be given before or with the first antibiotic dose to blunt lysis-driven inflammation. A regimen of ceftriaxone alone leaves both resistant pneumococci and Listeria uncovered in a patient over 50, and waiting on the Gram stain to complete the regimen repeats the same timing error.",
    "id": 181
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "A 24-year-old college student is diagnosed with meningococcal meningitis and treated with ceftriaxone. Her roommate, her boyfriend, and the emergency physician who examined her throat with a tongue depressor ask about prophylaxis. Who requires chemoprophylaxis?",
    "options": {
      "A": "All three contacts, because any shared indoor air exposure warrants prophylaxis after meningococcal disease",
      "B": "The roommate only, because prophylaxis is restricted to persons sharing a bedroom",
      "C": "The physician only, because healthcare workers carry the highest documented secondary attack rate",
      "D": "The roommate and boyfriend, but not the physician, whose exposure did not involve respiratory secretions directly"
    },
    "answer": "D",
    "explanation": "Extending prophylaxis to everyone sharing indoor air vastly overtreats, since risk concentrates in household and intimate contacts rather than casual ones. Restricting prophylaxis to bedroom-sharing contacts is too narrow because kissing and other salivary exposure qualify a partner. Giving prophylaxis to the examining physician alone inverts the actual risk hierarchy; clinicians need it only after unprotected exposure to secretions during procedures such as intubation or airway suctioning, not after a routine examination.",
    "id": 182
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "A 41-year-old woman presents with three days of fever, aphasia, and a generalized seizure. MRI shows FLAIR hyperintensity in the left temporal lobe. CSF shows 85 lymphocytes, 220 red cells, normal glucose, and protein of 88 mg/dL. HSV PCR from this initial tap is negative. What is the best next step?",
    "options": {
      "A": "Continue intravenous acyclovir and repeat the HSV PCR on cerebrospinal fluid in several days",
      "B": "Stop acyclovir, since a negative PCR effectively excludes herpes simplex encephalitis",
      "C": "Switch therapy to ganciclovir to cover cytomegalovirus and human herpesvirus 6 encephalitis",
      "D": "Start high-dose corticosteroids for presumed autoimmune limbic encephalitis without further viral testing"
    },
    "answer": "A",
    "explanation": "Abandoning acyclovir on the basis of one early negative PCR ignores the recognized false-negative window in the first 72 hours of temporal lobe encephalitis, when the pretest probability here is high. Redirecting therapy toward cytomegalovirus and HHV-6 fits immunocompromised hosts, not an immunocompetent adult with classic unilateral temporal disease. Empiric steroids for autoimmune encephalitis are premature and potentially harmful before herpes has been convincingly excluded, since the infectious mimic is both more likely and more immediately lethal.",
    "id": 183
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "A 55-year-old man on hemodialysis has 10 days of worsening thoracic back pain, now with fever and new difficulty walking. Examination shows midline spine tenderness and brisk knee reflexes with bilateral leg weakness. Which diagnostic study should be obtained?",
    "options": {
      "A": "Plain radiographs of the thoracic spine followed by outpatient rheumatology referral if unrevealing",
      "B": "Technetium bone scan to localize infection before any cross-sectional imaging is arranged",
      "C": "Gadolinium-enhanced MRI of the entire spine performed emergently the same day",
      "D": "CT myelography next week after blood cultures and inflammatory markers have resulted"
    },
    "answer": "C",
    "explanation": "Plain films lack sensitivity for epidural infection and a routine outpatient pathway squanders the hours in which cord function can still be saved. Nuclear imaging localizes poorly, cannot show cord compression, and adds delay without surgical planning value. Deferring definitive imaging a week while laboratory studies return is the classic error in this disease, where progression from weakness to paraplegia occurs over hours to days; full-spine MRI is also specifically needed because skip lesions occur.",
    "id": 184
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "A 36-year-old man with untreated HIV and a CD4 count of 42 presents with two weeks of headache and blurred vision. CSF cryptococcal antigen is positive and opening pressure is 34 cm of water. Liposomal amphotericin B and flucytosine are begun. What additional intervention most reduces his early mortality risk?",
    "options": {
      "A": "Immediate initiation of antiretroviral therapy alongside induction antifungal treatment today",
      "B": "Serial therapeutic lumbar punctures to lower intracranial pressure until it stabilizes",
      "C": "Adjunctive dexamethasone for six weeks to control the inflammatory response",
      "D": "Addition of fluconazole 400 mg daily to the current two-drug induction regimen"
    },
    "answer": "B",
    "explanation": "Starting antiretrovirals immediately increases mortality from CNS immune reconstitution and is deferred roughly four to six weeks. Adjunctive dexamethasone in cryptococcal meningitis was tested in a large randomized trial and caused harm, including more disability and adverse events, so it has no role here. Adding fluconazole to amphotericin plus flucytosine offers no incremental induction benefit while pressure goes unmanaged; raised intracranial pressure is the dominant reversible driver of early death in this disease.",
    "id": 185
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "A 47-year-old immigrant from rural Guatemala has a first seizure. MRI shows two cystic parenchymal lesions, each with an eccentric mural nodule and surrounding edema. Before starting albendazole and corticosteroids, which evaluation must be completed?",
    "options": {
      "A": "Dilated funduscopic examination to exclude intraocular cysticerci before antiparasitic therapy",
      "B": "Serum Taenia serology, without which antiparasitic treatment cannot be justified",
      "C": "Stool ova and parasite testing on three consecutive daily specimens",
      "D": "Electroencephalography to confirm an epileptogenic focus corresponding to a visualized cyst"
    },
    "answer": "A",
    "explanation": "Serology supports the diagnosis but the imaging here is already characteristic, and treatment does not hinge on antibody results. Stool studies screen for an adult intestinal tapeworm carrier, which matters for household transmission control but does not gate antiparasitic therapy for the brain lesions. EEG adds nothing to the management decision, since antiseizure medication is indicated regardless. An unexamined eye is the true hazard: killing an intraocular cyst with antiparasitics incites inflammation that can destroy vision, so the retina must be inspected first.",
    "id": 186
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "Three weeks after completing acyclovir for PCR-confirmed HSV-1 encephalitis, a 19-year-old woman develops worsening agitation, orofacial dyskinesias, and autonomic instability. Repeat CSF HSV PCR is negative with 18 lymphocytes. What is the most likely explanation?",
    "options": {
      "A": "Relapsed herpes encephalitis from an acyclovir-resistant viral strain requiring foscarnet",
      "B": "Acyclovir neurotoxicity, which characteristically produces movement disorders after treatment ends",
      "C": "Progression to herpes-associated cerebral vasculitis with deep infarction on both sides",
      "D": "Anti-NMDA receptor encephalitis triggered by the preceding herpetic neuronal injury"
    },
    "answer": "D",
    "explanation": "Resistant viral relapse is far less likely with a negative repeat PCR, and the new movement disorder phenotype does not resemble recrudescent necrotizing encephalitis. Acyclovir neurotoxicity occurs during dosing, mainly with renal impairment, and manifests as encephalopathy with myoclonus that resolves after the drug stops, not weeks later. Post-herpetic vasculitis produces stroke-like deficits rather than this stereotyped psychiatric and dyskinetic syndrome. The combination of dyskinesias, autonomic storm, and recent HSV infection in a young woman is the recognized autoimmune sequel, confirmed by CSF antibody testing.",
    "id": 187
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "A 71-year-old man has six weeks of rapidly progressive dementia with startle-provoked myoclonus. MRI shows cortical ribboning on diffusion-weighted imaging. Which CSF test has the highest specificity for sporadic Creutzfeldt-Jakob disease?",
    "options": {
      "A": "The 14-3-3 protein assay, an established marker of rapid neuronal loss",
      "B": "Total tau concentration measured by enzyme-linked immunoassay on fresh cerebrospinal fluid",
      "C": "Real-time quaking-induced conversion testing amplifying misfolded prion protein",
      "D": "Oligoclonal band analysis paired with an elevated immunoglobulin G index"
    },
    "answer": "C",
    "explanation": "The 14-3-3 protein rises with any rapid neuronal destruction, including stroke, encephalitis, and seizures, so it is sensitive but poorly specific. Total tau behaves the same way as a general injury marker and cannot distinguish prion disease from aggressive mimics. Oligoclonal bands indicate intrathecal antibody synthesis and point toward inflammatory or demyelinating disease, essentially the wrong category. Seeded amplification of misfolded prion protein detects the pathologic conformer itself, which is why its specificity approaches one hundred percent.",
    "id": 188
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "A 58-year-old woman with a ventriculoperitoneal shunt placed eight months ago presents with two weeks of low-grade headache and nausea. Shunt-tap CSF grows Cutibacterium acnes on day nine of anaerobic incubation. What is the most appropriate management?",
    "options": {
      "A": "Shunt removal with external ventricular drainage, intravenous therapy, then delayed new shunt placement",
      "B": "Retain the shunt and treat with six weeks of intravenous penicillin alone",
      "C": "Dismiss the isolate as a skin contaminant given its late growth in broth",
      "D": "Retain the shunt and add intraventricular vancomycin through a reservoir tap daily"
    },
    "answer": "A",
    "explanation": "Treating through retained hardware fails predictably because biofilm organisms are metabolically shielded from bactericidal drugs regardless of duration. Dismissing the organism as contamination misreads its biology; Cutibacterium is a classic indolent device pathogen whose slow anaerobic growth is expected, and the compatible symptoms make it real. Instilling intraventricular vancomycin into a retained infected shunt still leaves the colonized surface in place and adds chemical ventriculitis risk, so device removal remains the curative step.",
    "id": 189
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 19,
    "question": "A 62-year-old renal transplant recipient on tacrolimus and prednisone develops fever and confusion over three days. CSF shows 380 white cells with 60 percent lymphocytes, glucose 38 mg/dL, and a Gram stain showing rare gram-positive rods. Which empiric addition is most essential?",
    "options": {
      "A": "Liposomal amphotericin B for presumed disseminated cryptococcal infection with meningitis",
      "B": "High-dose intravenous ampicillin directed specifically against Listeria monocytogenes infection",
      "C": "Intravenous trimethoprim-sulfamethoxazole targeting Nocardia species in the central nervous system",
      "D": "Four-drug antituberculous therapy with adjunctive dexamethasone started today"
    },
    "answer": "B",
    "explanation": "Cryptococcus would show yeast forms and a positive antigen rather than gram-positive rods, and amphotericin does not treat the organism actually seen. Nocardia appears as branching, beaded, partially acid-fast filaments, usually with brain abscesses rather than diffuse meningitis. Tuberculosis produces no organisms on Gram stain and evolves more subacutely; nothing here justifies displacing therapy for the visualized pathogen. Gram-positive rods with a mononuclear-predominant, low-glucose CSF in a T-cell-suppressed host is Listeria until proven otherwise, and cephalosporins never cover it.",
    "id": 190
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 58-year-old man has E. faecalis bacteremia and a 12 mm mitral vegetation. Creatinine is 2.1 mg/dL. High-level aminoglycoside resistance testing is pending. Which regimen is most appropriate?",
    "options": {
      "A": "Ampicillin plus gentamicin for six weeks with twice-weekly renal function monitoring throughout",
      "B": "Vancomycin monotherapy for six weeks given the elevated baseline creatinine level",
      "C": "Ampicillin plus ceftriaxone for six weeks without any aminoglycoside exposure",
      "D": "Ceftriaxone monotherapy for four weeks as used for streptococcal endocarditis"
    },
    "answer": "C",
    "explanation": "Pairing ampicillin with gentamicin in a patient whose creatinine is already 2.1 invites progressive renal injury over six weeks when an equally effective nonnephrotoxic option exists. Vancomycin alone is a poor enterococcal killer, essentially bacteriostatic in this setting, and reserves itself for penicillin-allergic patients needing combination therapy. Ceftriaxone by itself has no meaningful activity against enterococci at all; its value here is purely synergistic, saturating complementary penicillin-binding proteins alongside ampicillin, so it can never anchor the regimen alone.",
    "id": 191
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 47-year-old woman with a bioprosthetic aortic valve has three weeks of fatigue and fever. Three blood culture sets are negative at day five. She raises goats and drinks raw milk. Which test is most likely to establish the diagnosis?",
    "options": {
      "A": "Coxiella burnetii serology with attention to the phase I immunoglobulin G titer",
      "B": "Repeat blood cultures held for thirty days for HACEK organisms",
      "C": "Serum galactomannan and beta-D-glucan testing for fungal endocarditis screening",
      "D": "Peripheral blood smear examination for intraerythrocytic organisms by an experienced technologist"
    },
    "answer": "A",
    "explanation": "Prolonged incubation for HACEK organisms reflects outdated practice, since modern continuously monitored systems grow them within the standard five days, and nothing here suggests oral flora. Fungal markers target Candida and molds, which favor catheters, parenteral nutrition, and injection drug use rather than livestock exposure. A blood smear hunts organisms like Babesia that do not cause endocarditis. Parturient goat and raw dairy exposure with culture-negative prosthetic valve infection is the classic Q fever story, and a phase I IgG titer of 1:800 or higher is itself a major diagnostic criterion.",
    "id": 192
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 63-year-old man with MSSA prosthetic mitral valve endocarditis is started on cefazolin and gentamicin. Blood cultures clear on day three. When should rifampin be added, and why is it used at all?",
    "options": {
      "A": "Never, because rifampin adds only hepatotoxicity in staphylococcal prosthetic valve infection",
      "B": "From day one, since delaying rifampin allows early biofilm formation on the sewing ring",
      "C": "Only if repeat imaging shows a new paravalvular abscess or valve dehiscence",
      "D": "After bacteremia clears, because rifampin penetrates biofilm but selects resistance during ongoing bacteremia"
    },
    "answer": "D",
    "explanation": "Dismissing rifampin entirely contradicts its established role against staphylococci adherent to prosthetic material, where it reaches organisms other agents cannot. Starting it on day one, while intuitively appealing for biofilm prevention, exposes a large circulating bacterial population to a drug with a single-step resistance mechanism, and resistant mutants emerge readily during active bacteremia. Tying rifampin to abscess formation misunderstands its indication, which is the presence of prosthetic material itself rather than any specific complication seen on imaging.",
    "id": 193
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 29-year-old man who injects opioids has tricuspid endocarditis with MSSA, multiple septic pulmonary emboli, no left-sided involvement, and stable hemodynamics. Vegetation measures 11 mm. What is the most appropriate treatment plan?",
    "options": {
      "A": "Urgent tricuspid valve replacement because the vegetation exceeds the ten millimeter threshold",
      "B": "Cloxacillin or cefazolin for two weeks with addiction medicine consultation and buprenorphine initiation",
      "C": "Vancomycin for two weeks to cover possible methicillin-resistant strains during susceptibility confirmation",
      "D": "Daptomycin for six weeks because pulmonary emboli inactivate beta-lactams through surfactant binding"
    },
    "answer": "B",
    "explanation": "Operating on an uncomplicated tricuspid valve with preserved hemodynamics ignores that the embolism-prevention size thresholds were derived for left-sided disease, and prosthetic material in ongoing injection drug use invites reinfection. Vancomycin has never validated a two-week course and produces inferior outcomes against methicillin-susceptible staphylococci. The surfactant interaction runs in exactly the opposite direction: surfactant inactivates daptomycin, not beta-lactams, and six weeks of it is unnecessary here. Short-course beta-lactam therapy is proven for uncomplicated right-sided MSSA disease, and pairing it with opioid use disorder treatment addresses the actual relapse risk.",
    "id": 194
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 71-year-old woman with S. aureus aortic valve endocarditis develops a new first-degree atrioventricular block on daily electrocardiography. Blood cultures remain positive on day six of cefazolin. What do these findings most likely indicate?",
    "options": {
      "A": "Extension of infection into the aortic root and perivalvular tissue requiring surgical evaluation",
      "B": "Cefazolin failure due to the inoculum effect, correctable by switching to nafcillin",
      "C": "Concurrent Lyme carditis, which should be confirmed with two-tier serologic testing",
      "D": "An expected finding, since staphylococcal bacteremia often persists ten days on appropriate therapy"
    },
    "answer": "A",
    "explanation": "Invoking the cefazolin inoculum effect to explain both conduction disease and persistent bacteremia stretches a contested laboratory phenomenon past its clinical footprint, and switching beta-lactams does not treat undrained pus. Lyme carditis produces fluctuating block in the right exposure setting, not in a patient with an established alternative cause sitting immediately above the conduction system. Normalizing bacteremia at day six understates its meaning; clearance is expected within roughly three to four days, and persistence is a defined marker of uncontrolled infection. New PR prolongation in aortic valve endocarditis localizes an abscess burrowing toward the atrioventricular node.",
    "id": 195
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 55-year-old man completed 12 days of intravenous therapy for penicillin-susceptible viridans streptococcal mitral endocarditis. He is afebrile, cultures cleared promptly, and TEE shows no abscess. He asks about finishing treatment at home with pills. Which statement best reflects the evidence?",
    "options": {
      "A": "Oral therapy for left-sided endocarditis remains experimental and should never leave the trial setting",
      "B": "Oral step-down is acceptable only for right-sided tricuspid infections in people who inject drugs",
      "C": "Randomized trial evidence supports oral completion in stable patients like him after imaging excludes complications",
      "D": "Oral therapy is reasonable only if a peripherally inserted central catheter cannot be placed"
    },
    "answer": "C",
    "explanation": "Labeling oral step-down experimental ignores a completed randomized noninferiority trial whose findings held at long-term follow-up and entered guidelines. Restricting the strategy to right-sided disease in injection drug use inverts the actual trial population, which enrolled stable left-sided streptococcal, enterococcal, and staphylococcal infections. Framing oral therapy as a last resort for failed vascular access treats a validated pathway as a concession; eligibility rests on clinical stability, susceptible organisms, excluded complications, and reliable absorption and follow-up rather than on catheter logistics.",
    "id": 196
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 66-year-old woman with a dual-chamber pacemaker presents with MSSA bacteremia from an unclear source. Her device pocket is entirely benign on examination. TEE shows a 9 mm mobile echodensity on the right ventricular lead. What is the appropriate device management?",
    "options": {
      "A": "Intravenous cefazolin for six weeks with the device left in place given the normal pocket",
      "B": "Complete extraction of the generator and all leads followed by culture-guided reimplantation timing",
      "C": "Surgical replacement of the generator alone, since the pocket is the usual infection reservoir",
      "D": "Chronic oral antibiotic suppression after four weeks of intravenous therapy without extraction"
    },
    "answer": "B",
    "explanation": "Retaining hardware through six weeks of therapy leaves a colonized biofilm surface that predicts relapse regardless of pocket appearance. Exchanging only the generator misreads the anatomy of this infection, which is on the lead in the bloodstream, and partial removal carries the relapse risk of full retention. Chronic suppression without extraction is a salvage strategy reserved for patients who cannot undergo removal, not a primary plan for an extraction candidate. Lead vegetations with staphylococcal bacteremia mandate removing the entire system, then reassessing need and timing for a new device.",
    "id": 197
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 19-year-old previously healthy man has five days of severe sore throat, then rigors, right-sided neck pain, and pleuritic chest pain. CT shows internal jugular vein thrombosis and multiple cavitating lung nodules. Which organism is the most likely cause?",
    "options": {
      "A": "Streptococcus pyogenes extending from a peritonsillar abscess into deep neck spaces",
      "B": "Staphylococcus aureus seeding the lungs from an unrecognized tricuspid valve vegetation",
      "C": "Eikenella corrodens introduced through occult oral trauma with septic embolization",
      "D": "Fusobacterium necrophorum invading the internal jugular vein from the oropharynx"
    },
    "answer": "D",
    "explanation": "Group A streptococcal pharyngitis can produce local suppurative complications, but jugular vein thrombophlebitis with septic pulmonary emboli after pharyngitis is not its signature syndrome. Tricuspid endocarditis explains cavitating pulmonary nodules yet not the antecedent sore throat with unilateral neck pain and jugular thrombosis, and this patient has no bloodstream entry risk described. Eikenella belongs to bite wound and oral trauma infections without this postanginal pattern. The sequence of pharyngitis, jugular thrombophlebitis, and metastatic lung lesions in a healthy adolescent defines Lemierre syndrome and its anaerobic cause.",
    "id": 198
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 62-year-old man with a mechanical aortic valve and prior endocarditis needs a dental extraction. He has no drug allergies. What prophylaxis, if any, is indicated?",
    "options": {
      "A": "No prophylaxis, since daily oral hygiene produces more cumulative bacteremia than any extraction",
      "B": "Clindamycin 600 mg orally one hour before the procedure as first-line coverage",
      "C": "Amoxicillin 2 grams orally thirty to sixty minutes before the extraction",
      "D": "Intravenous vancomycin infused during the procedure given his mechanical prosthesis"
    },
    "answer": "C",
    "explanation": "The hygiene-bacteremia argument correctly narrowed the prophylaxis population but did not eliminate it, and this man carries two of the highest-risk conditions, a prosthetic valve and prior endocarditis, undergoing exactly the procedure type the recommendation covers. Clindamycin has been moved away from first-line status because of Clostridioides difficile and other adverse events, and he has no penicillin allergy requiring an alternative. Intraprocedural vancomycin is unsupported for dental prophylaxis in any guideline pathway. A single oral amoxicillin dose beforehand is the standard regimen.",
    "id": 199
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 20,
    "question": "A 76-year-old man presents with fever and back pain. Blood cultures grow Salmonella enterica. CT angiography shows a saccular outpouching of the infrarenal abdominal aorta with surrounding fat stranding. What is the most appropriate management approach?",
    "options": {
      "A": "Antimicrobial therapy combined with surgical or endovascular intervention on the infected aorta",
      "B": "Six weeks of ceftriaxone alone with repeat imaging to confirm aneurysm stabilization",
      "C": "Oral ciprofloxacin for two weeks as used for uncomplicated Salmonella gastroenteritis bacteremia",
      "D": "Observation with serial imaging, since small mycotic aneurysms usually sterilize without intervention"
    },
    "answer": "A",
    "explanation": "Antibiotics alone leave infected, structurally degraded aortic wall in place, and rupture risk remains high regardless of culture clearance, so a purely medical course with surveillance imaging is a gamble on tissue integrity that guidelines do not endorse. A two-week fluoroquinolone course addresses gastroenteritis-associated bacteremia, not endovascular infection of an artery, and grossly undertreats. Watchful waiting misapplies lessons from small intracranial aneurysms, which sometimes resolve on therapy, to the aorta, where expansion and rupture are the expected natural history. Salmonella has a specific affinity for atherosclerotic aorta, and cure requires source control plus prolonged therapy.",
    "id": 200
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "A 6-year-old boy has 3 days of bloody diarrhea and abdominal cramps without fever after a county fair. Stool PCR detects Shiga toxin-producing E. coli. His mother asks for antibiotics. What is the best management?",
    "options": {
      "A": "Azithromycin for three days to shorten illness and reduce household transmission risk",
      "B": "Ciprofloxacin for five days with loperamide for symptomatic control of cramping",
      "C": "Trimethoprim-sulfamethoxazole, since childhood dosing is well established and resistance remains uncommon",
      "D": "Supportive hydration only, avoiding both antibiotics and antimotility agents entirely"
    },
    "answer": "D",
    "explanation": "Each antibiotic option shares the same fatal flaw in this organism: antimicrobial exposure induces the phage-encoded Shiga toxin genes and is associated with higher rates of hemolytic uremic syndrome, the complication that makes this infection dangerous, and no agent, macrolide, fluoroquinolone, or sulfonamide, has demonstrated safety sufficient to override that concern in children. The addition of loperamide compounds the error by retaining toxin in the colon. Volume support while monitoring renal function, platelets, and hemoglobin is the entire correct program.",
    "id": 201
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "Twelve guests develop abrupt vomiting 3 hours after a graduation lunch that featured sliced ham, potato salad, and cream pastries left out through the afternoon. Most recover by the next morning. Which mechanism explains this outbreak?",
    "options": {
      "A": "Invasion of ileal epithelium by an organism acquired from undercooked ham",
      "B": "Ingestion of a preformed heat-stable enterotoxin elaborated in food before consumption",
      "C": "In vivo toxin production by clostridial spores that germinated within the intestine",
      "D": "Person-to-person spread of a norovirus introduced by an ill food handler"
    },
    "answer": "B",
    "explanation": "Invasive enteric infection cannot produce illness within 3 hours, since organisms need a day or more to establish and injure mucosa. Clostridium perfringens illness from spores germinating in vivo fits the food types but runs on an 8 to 16 hour clock and causes watery diarrhea rather than dominant vomiting. Norovirus requires 12 to 48 hours of incubation and typically spans more than one day. Only a toxin already sitting in the food, staphylococcal enterotoxin from handled protein-rich dishes held at room temperature, explains violent emesis on this timeline.",
    "id": 202
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "A 57-year-old man with cirrhosis is admitted with confusion. Paracentesis shows 480 nucleated cells with 68 percent neutrophils; culture is pending. Creatinine is 1.4 mg/dL. Beyond cefotaxime, which intervention reduces his risk of renal failure and death?",
    "options": {
      "A": "Intravenous albumin at 1.5 grams per kilogram now, repeated at 1 gram per kilogram on day three",
      "B": "Immediate transjugular intrahepatic portosystemic shunt placement to reduce portal pressure",
      "C": "Large-volume paracentesis removing all ascitic fluid to eliminate the infected reservoir",
      "D": "Addition of intravenous metronidazole to cover anaerobic organisms in ascitic fluid"
    },
    "answer": "A",
    "explanation": "Shunt placement treats refractory ascites and variceal bleeding, not acute infection, and would be hazardous during sepsis with encephalopathy. Draining the abdomen completely does not sterilize anything, risks circulatory dysfunction, and has no role as infection therapy. Anaerobes are rare in spontaneous bacterial peritonitis, and their presence would actually argue for a perforated viscus rather than broader empiric coverage. Albumin on days one and three is the intervention with randomized evidence for preventing hepatorenal injury and lowering mortality, particularly with his elevated creatinine.",
    "id": 203
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "A 44-year-old woman has fever, jaundice, and right upper quadrant pain. Blood pressure is 82/50 despite fluids, and she is confused. Ultrasound shows a dilated common bile duct with stones. Antibiotics are started. What is the most appropriate next step?",
    "options": {
      "A": "Laparoscopic cholecystectomy with intraoperative common bile duct exploration this admission",
      "B": "Continue antibiotics for 48 hours and proceed to drainage only if fever persists",
      "C": "Emergent endoscopic retrograde cholangiography for biliary decompression as soon as feasible",
      "D": "Magnetic resonance cholangiopancreatography to characterize the obstruction before any intervention"
    },
    "answer": "C",
    "explanation": "Going first to cholecystectomy addresses the gallbladder while leaving the pressurized, infected duct undrained, and duct exploration in an unstable septic patient carries far more risk than endoscopy. A 48-hour antibiotic trial belongs to mild cholangitis; vasopressor-dependent hypotension with altered consciousness defines severe, Grade III disease, where delay costs lives because antibiotics penetrate an obstructed duct poorly. Additional imaging adds hours without changing the already-established need for decompression. Ductal drainage under pressure is the definitive act; everything else is staging.",
    "id": 204
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "A 51-year-old man is on day 16 of necrotizing pancreatitis. He develops new fever and rising vasopressor requirements, and CT shows gas bubbles within the pancreatic necrosis. Along with carbapenem therapy, what is the best intervention strategy?",
    "options": {
      "A": "Immediate open surgical necrosectomy to remove all infected necrotic tissue at once",
      "B": "Antibiotics alone for the full course, since intervention is contraindicated before four weeks",
      "C": "Endoscopic ultrasound-guided fine needle aspiration solely to confirm infection before acting",
      "D": "Percutaneous or endoscopic drainage first, escalating to minimally invasive necrosectomy only if he fails"
    },
    "answer": "D",
    "explanation": "Primary open necrosectomy in the second week is the historical approach that produced prohibitive mortality in friable, unorganized tissue and now serves only as rescue. Withholding all intervention behind a rigid four-week rule misreads the principle; the timeline is a preference for maturation, not a barrier when a septic patient is deteriorating, and drainage can proceed early. Aspiration purely for confirmation is unnecessary here because gas in the collection with clinical decline already establishes infection. The step-up sequence, drain first and debride only on failure, is the trial-validated standard.",
    "id": 205
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "A 38-year-old man who emigrated from India 8 years ago has 10 days of fever and right upper quadrant pain. CT shows a solitary 7 cm right-lobe liver abscess. E. histolytica serology is positive. He is hemodynamically stable. What is the best initial management?",
    "options": {
      "A": "Metronidazole followed by paromomycin, reserving drainage for rupture risk or nonresponse",
      "B": "Percutaneous catheter drainage plus metronidazole, since abscesses this large always require evacuation",
      "C": "Albendazole for three months with serial imaging to document cyst involution",
      "D": "Piperacillin-tazobactam with urgent drainage for presumed pyogenic Klebsiella liver abscess"
    },
    "answer": "A",
    "explanation": "Routine catheter drainage of amebic abscess is unnecessary because the response to nitroimidazole therapy is rapid and reliable; drainage is held for imminent rupture, left-lobe lesions near the pericardium, or failure to improve, and size alone at 7 cm in a stable patient does not mandate it. Albendazole with months of surveillance describes management of hydatid cyst disease, a different parasite with different imaging. Treating empirically as pyogenic abscess ignores the positive serology and classic epidemiology. The step examiners and clinicians alike forget is the luminal agent afterward, which eradicates intestinal carriage.",
    "id": 206
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "A 62-year-old woman has CT-confirmed uncomplicated sigmoid diverticulitis: localized pain, white count 12,400, no abscess or free air. She is immunocompetent, tolerating oral intake, with reliable follow-up. Which management is supported by randomized trials?",
    "options": {
      "A": "Admission for intravenous ceftriaxone and metronidazole until inflammatory markers normalize completely",
      "B": "Outpatient supportive care without antibiotics, with instructions to return for worsening symptoms",
      "C": "Oral amoxicillin-clavulanate for ten days followed by interval screening colonoscopy next week",
      "D": "Urgent colonoscopy during this episode to exclude a perforated sigmoid malignancy"
    },
    "answer": "B",
    "explanation": "Hospitalization with intravenous therapy for uncomplicated disease in a stable immunocompetent patient exceeds what the evidence supports and exposes her to nosocomial risk without benefit. A routine oral antibiotic course is precisely what the randomized trials tested against and failed to show necessary in this population, and colonoscopy is deferred roughly six or more weeks because instrumenting an acutely inflamed colon risks perforation, which also eliminates the urgent-scope option regardless of the malignancy question. Observation with safety-net instructions is the trial-supported path.",
    "id": 207
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "A 58-year-old man with dyspepsia tests positive for H. pylori by stool antigen. He took clarithromycin for bronchitis last year. Which regimen and follow-up plan is most appropriate?",
    "options": {
      "A": "Clarithromycin, amoxicillin, and omeprazole for seven days with symptom-based follow-up alone",
      "B": "Levofloxacin triple therapy for ten days, confirming eradication only if symptoms persist",
      "C": "Bismuth, tetracycline, metronidazole, and a proton pump inhibitor for fourteen days, then confirm eradication",
      "D": "Proton pump inhibitor monotherapy for eight weeks with repeat stool antigen at completion"
    },
    "answer": "C",
    "explanation": "Clarithromycin triple therapy fails at unacceptable rates in settings of macrolide resistance, and his prior macrolide exposure specifically predicts a resistant strain; a seven-day course with no test of cure compounds both errors. Levofloxacin-based therapy is a salvage option, not first line, and eradication testing is mandatory for every treated patient rather than contingent on symptoms. Acid suppression alone treats nothing microbiologic and, if anything, complicates subsequent testing. Bismuth quadruple therapy for a full fourteen days with confirmation at least four weeks later is the current standard.",
    "id": 208
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "A 31-year-old woman with acute myeloid leukemia, neutropenic on day 12 of induction, develops fever, right lower quadrant pain, and distension. CT shows cecal wall thickening of 9 mm with pericolonic stranding and no free air. What is the most appropriate management?",
    "options": {
      "A": "Urgent right hemicolectomy before perforation can occur in an immunocompromised host",
      "B": "Bowel rest and piperacillin-tazobactam, with surgery reserved for perforation, bleeding, or deterioration",
      "C": "Colonoscopy with biopsies to differentiate neutropenic enterocolitis from cytomegalovirus colitis",
      "D": "Oral vancomycin and intravenous metronidazole for presumed fulminant C. difficile colitis"
    },
    "answer": "B",
    "explanation": "Prophylactic resection in a profoundly neutropenic, thrombocytopenic patient carries formidable operative risk and removes bowel that usually recovers with marrow recovery; surgery in typhlitis is held for perforation, uncontrolled hemorrhage, or collapse. Endoscopy of a necrotic, friable cecum risks the very perforation everyone fears and is relatively contraindicated in this syndrome. C. difficile-directed therapy addresses a different disease that this imaging pattern, focal cecal necrotizing inflammation in neutropenia, does not suggest, although testing for it is reasonable. Conservative therapy with broad gram-negative, anaerobic, and pseudomonal coverage is the standard.",
    "id": 209
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 21,
    "question": "A 49-year-old renal transplant recipient on tacrolimus and mycophenolate has 3 weeks of bloody diarrhea. Plasma CMV PCR is 2,100 IU/mL. Colonoscopy shows several well-demarcated colonic ulcers. What establishes the diagnosis of CMV colitis?",
    "options": {
      "A": "The plasma viral load itself, since any detectable CMV DNA in blood confirms tissue-invasive disease",
      "B": "Stool multiplex PCR positivity for cytomegalovirus on two separate specimens",
      "C": "A fourfold rise in CMV immunoglobulin G titer over the following four weeks",
      "D": "Ulcer-edge biopsy showing characteristic inclusions with confirmatory immunohistochemical staining"
    },
    "answer": "D",
    "explanation": "Plasma DNAemia is common in transplant recipients without organ invasion and can be low or even absent in compartmentalized colitis, so blood PCR at any value neither confirms nor excludes the diagnosis. Stool-based viral detection lacks validation for invasive disease and cannot distinguish shedding from tissue injury. Serologic rises indicate exposure kinetics, useless in a chronically seropositive immunosuppressed host. Tissue is the standard: biopsy of the ulcer demonstrating cytomegalic inclusion-bearing cells with positive immunohistochemistry ties the virus to the lesion and justifies ganciclovir.",
    "id": 210
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 78-year-old woman in a skilled nursing facility becomes more confused over 2 days. She has no fever, dysuria, suprapubic pain, or flank tenderness, and vital signs are normal. Urinalysis sent by nursing shows pyuria, and culture grows E. coli above 100,000 colonies. What is the best management?",
    "options": {
      "A": "Evaluate for other causes of delirium and withhold antibiotics for the bacteriuria",
      "B": "Ciprofloxacin for seven days given the organism's high colony count and her age",
      "C": "Nitrofurantoin for five days, since delirium counts as a urinary symptom in older adults",
      "D": "Single-dose fosfomycin to balance treatment benefit against resistance selection pressure"
    },
    "answer": "A",
    "explanation": "Every treatment arm here medicalizes colonization: asymptomatic bacteriuria with pyuria is highly prevalent in institutionalized older women, and randomized data show treating it prevents nothing while driving resistance and C. difficile risk. A high colony count does not distinguish infection from colonization. Framing nonspecific confusion as a urinary symptom is exactly the reasoning error that guidelines warn against when no genitourinary signs or systemic instability exist, and it forecloses the real delirium workup, medications, dehydration, and other infections among them. Choosing a gentler drug does not repair an absent indication.",
    "id": 211
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 29-year-old woman at 14 weeks of gestation has 100,000 colonies of E. coli on a screening urine culture. She feels entirely well. What is the appropriate management?",
    "options": {
      "A": "No treatment, because asymptomatic bacteriuria should not be treated regardless of context",
      "B": "Ciprofloxacin for seven days with a test of cure two weeks after completion",
      "C": "An appropriate oral agent such as amoxicillin-clavulanate or cephalexin, then follow-up culture",
      "D": "Daily cranberry supplementation with repeat culture each trimester of the pregnancy"
    },
    "answer": "C",
    "explanation": "Pregnancy is one of the two settings where the no-treatment rule for asymptomatic bacteriuria inverts, because untreated bacteriuria progresses to pyelonephritis at high rates and is linked to preterm birth, so withholding therapy misapplies an otherwise sound principle. Fluoroquinolones are avoided in pregnancy given cartilage toxicity concerns and superior alternatives. Cranberry surveillance is not treatment and leaves the progression risk untouched. A pregnancy-compatible agent selected by susceptibilities, followed by a culture to confirm clearance, is the standard.",
    "id": 212
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 47-year-old diabetic woman has fever of 39.4 degrees Celsius, left flank pain, and vomiting. She is on day 3 of ceftriaxone for pyelonephritis with a pansusceptible E. coli, yet fevers persist. What is the most appropriate next step?",
    "options": {
      "A": "Extend ceftriaxone to a fourteen-day total course before reassessing her clinical response",
      "B": "Obtain contrast-enhanced CT of the abdomen to evaluate for obstruction or abscess",
      "C": "Broaden coverage to meropenem for presumed extended-spectrum beta-lactamase production",
      "D": "Repeat blood and urine cultures and await results before changing management"
    },
    "answer": "B",
    "explanation": "Prolonging the same drug against a susceptible organism mistakes a source problem for a duration problem; fever persisting beyond 48 to 72 hours of active therapy is the defined trigger for imaging. Escalating to a carbapenem treats a resistance problem she does not have, since susceptibilities are known. Repeating cultures passively is reasonable as an adjunct but delays the decisive study. Persistent fever in a diabetic with pyelonephritis means obstruction, perinephric abscess, or emphysematous infection until CT proves otherwise, and each of those demands a procedure no antibiotic substitutes for.",
    "id": 213
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 24-year-old man has purulent urethral discharge. Nucleic acid amplification testing returns positive for both N. gonorrhoeae and C. trachomatis. He weighs 84 kg and has no allergies. What is the recommended treatment?",
    "options": {
      "A": "Ceftriaxone 250 mg intramuscularly once plus azithromycin 1 gram orally once",
      "B": "Cefixime 800 mg orally once plus doxycycline for seven days as coequal first-line therapy",
      "C": "Gentamicin 240 mg intramuscularly with azithromycin 2 grams for dual-site eradication",
      "D": "Ceftriaxone 500 mg intramuscularly once plus doxycycline 100 mg twice daily for seven days"
    },
    "answer": "D",
    "explanation": "The 250 mg ceftriaxone dose with routine azithromycin reproduces the pre-2020 regimen, retired because rising cephalosporin MICs demanded a higher dose and azithromycin resistance undermined the second drug. Oral cefixime is an alternative only when ceftriaxone is unavailable, not a coequal choice, given inferior pharyngeal eradication. Gentamicin plus high-dose azithromycin is reserved for true cephalosporin allergy. Current therapy pairs weight-appropriate ceftriaxone at 500 mg with doxycycline directed specifically at his documented chlamydial coinfection.",
    "id": 214
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 26-year-old man who has sex with men has recurrent urethritis despite completing doxycycline. Testing identifies Mycoplasma genitalium; macrolide resistance testing is unavailable locally. What is the most appropriate regimen?",
    "options": {
      "A": "Azithromycin 1 gram as a single observed dose with retesting in three weeks",
      "B": "Amoxicillin-clavulanate for ten days targeting the organism's atypical cell wall",
      "C": "Doxycycline for seven days followed immediately by moxifloxacin for seven days",
      "D": "Trimethoprim-sulfamethoxazole for fourteen days with symptomatic follow-up as needed"
    },
    "answer": "C",
    "explanation": "Single-dose azithromycin fails frequently because macrolide resistance in M. genitalium exceeds half of isolates in many settings, precisely why resistance-guided therapy exists. Any beta-lactam is mechanistically futile against an organism that has no cell wall for the drug to attack. Trimethoprim-sulfamethoxazole has no reliable activity against this pathogen. The sequential strategy uses doxycycline to reduce organism load, then moxifloxacin, the fluoroquinolone with dependable activity, to eradicate, and it is the recommended empiric pathway when resistance status is unknown.",
    "id": 215
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 22-year-old woman has lower abdominal pain, dyspareunia, and cervical motion tenderness. Pregnancy test is negative; she appears well, tolerates oral intake, and has no adnexal mass on examination or ultrasound. What is the recommended outpatient regimen?",
    "options": {
      "A": "Ceftriaxone intramuscularly once, plus doxycycline and metronidazole each for fourteen days",
      "B": "Ceftriaxone intramuscularly once plus azithromycin one gram weekly for two weeks",
      "C": "Doxycycline alone for fourteen days after negative gonorrhea and chlamydia testing returns",
      "D": "Levofloxacin with metronidazole for fourteen days as preferred first-line empiric coverage"
    },
    "answer": "A",
    "explanation": "Azithromycin-based dosing is not the guideline outpatient regimen and weekly dosing undertreats the anaerobic component now recognized in pelvic inflammatory disease. Waiting for negative amplification tests to narrow therapy misunderstands the disease, since PID is treated empirically on clinical criteria and negative cervical testing does not exclude upper tract infection. Fluoroquinolone-based regimens lost first-line status when gonococcal resistance became widespread and return only when cephalosporins are impossible and gonorrhea risk is low. The ceftriaxone, doxycycline, and metronidazole triple regimen covers gonococcus, chlamydia, and anaerobes together.",
    "id": 216
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 31-year-old woman has culture-documented cystitis four times in the past year, each following intercourse. Cultures show susceptible E. coli each time. She prefers to minimize antibiotic exposure. Which strategy has randomized evidence of noninferiority to daily antibiotic prophylaxis?",
    "options": {
      "A": "Daily oral cranberry extract standardized to proanthocyanidin content taken indefinitely",
      "B": "Oral estradiol therapy to restore protective lactobacillus-dominant vaginal flora",
      "C": "Increasing daily water intake by one and a half liters above baseline",
      "D": "Methenamine hippurate one gram twice daily as a nonantibiotic urinary antiseptic"
    },
    "answer": "D",
    "explanation": "Cranberry preparations carry modest and inconsistent evidence, never tested head-to-head against prophylactic antibiotics with a noninferiority result. Estrogen's benefit applies to postmenopausal women with urogenital atrophy, is given vaginally rather than orally for this purpose, and is irrelevant to a premenopausal patient. Increased hydration reduced episodes in a trial of low-volume drinkers but was compared with usual intake, not with antibiotic prophylaxis. Methenamine, generating formaldehyde in acidic urine, matched daily antibiotic prophylaxis in the randomized ALTAR trial, making it the answer with the evidence claimed.",
    "id": 217
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 34-year-old man returns from a trip with a painless, indurated penile ulcer with a clean base and bilateral rubbery, nontender inguinal nodes. Darkfield microscopy is unavailable. Which pairing of diagnosis and initial test is most accurate?",
    "options": {
      "A": "Chancroid, best confirmed by culture of the ulcer base on selective media",
      "B": "Primary syphilis, evaluated with treponemal and nontreponemal serologic testing",
      "C": "Herpes simplex virus, confirmed by polymerase chain reaction swab of the lesion",
      "D": "Lymphogranuloma venereum, confirmed with serovar-specific chlamydial nucleic acid testing"
    },
    "answer": "B",
    "explanation": "Chancroid produces the opposite ulcer, painful, ragged, and undermined, with suppurative unilateral adenopathy, and its culture is insensitive even where attempted. Herpetic lesions are painful, multiple, and shallow following a tingling prodrome, not solitary and indurated. Lymphogranuloma venereum's ulcer is transient and typically healed before the painful matted buboes appear, and this patient's nodes are nontender. A painless indurated chancre with rubbery bilateral nodes is the textbook description of primary syphilis, with serology as the practical diagnostic pathway; very early lesions may need repeat testing.",
    "id": 218
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 28-year-old transgender woman with a syphilis diagnosis last year asks how to reduce her risk of future bacterial STIs. She uses condoms inconsistently. Beyond routine screening, which intervention has randomized trial support?",
    "options": {
      "A": "Continuous daily doxycycline 100 mg maintained for as long as risk continues",
      "B": "A single dose of benzathine penicillin every three months as chemoprophylaxis",
      "C": "Doxycycline 200 mg taken within seventy-two hours after condomless sexual contact",
      "D": "Meningococcal B vaccination, which provides durable cross-protection against gonorrhea"
    },
    "answer": "C",
    "explanation": "Daily continuous doxycycline was not the strategy tested in the landmark trials and adds cumulative exposure without demonstrated advantage over event-driven dosing. Scheduled benzathine penicillin has no trial basis for bacterial STI prevention in this setting. Meningococcal B vaccines show only partial, observational cross-protection signals against gonorrhea, an active research question rather than an established intervention, and no effect on chlamydia or syphilis. Event-driven doxycycline post-exposure prophylaxis reduced chlamydia and syphilis by roughly two thirds in randomized trials among men who have sex with men and transgender women with a prior STI.",
    "id": 219
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 22,
    "question": "A 42-year-old man with poorly controlled diabetes presents with fever, right flank pain, and hypotension. CT shows gas dissecting through the right renal parenchyma and perinephric space. Resuscitation and meropenem are begun. What is the next essential step?",
    "options": {
      "A": "Percutaneous drainage of the affected kidney with urgent urologic consultation",
      "B": "Continue antibiotics alone for seventy-two hours, since gas often resolves with glycemic control",
      "C": "Immediate bilateral renal ultrasound surveillance without invasive intervention planned",
      "D": "Hyperbaric oxygen therapy to halt anaerobic gas production within the parenchyma"
    },
    "answer": "A",
    "explanation": "Emphysematous pyelonephritis with parenchymal and perinephric gas plus shock is a necrotizing closed-space infection where antibiotics alone carry high mortality, so a three-day medical trial wagers tissue and life on a strategy reserved for the mildest gas patterns in stable patients. Surveillance imaging without a drainage plan is observation of a fire. Hyperbaric oxygen has no established role and delays source control. Percutaneous drainage with urology engaged, holding nephrectomy for extensive destruction or failure, is the modern kidney-sparing standard.",
    "id": 220
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 52-year-old man has 2 days of spreading, tender erythema of the left shin without purulence, fluctuance, or trauma history. Temperature is 37.9 degrees Celsius, and he looks well. He has no MRSA history. What is the most appropriate therapy?",
    "options": {
      "A": "Trimethoprim-sulfamethoxazole orally, since community MRSA now causes most cellulitis",
      "B": "Cephalexin orally, targeting beta-hemolytic streptococci as the presumed pathogens",
      "C": "Vancomycin intravenously until blood cultures return negative at forty-eight hours",
      "D": "Clindamycin orally to cover streptococci and staphylococci while suppressing toxins"
    },
    "answer": "B",
    "explanation": "Assigning most nonpurulent cellulitis to MRSA inverts the epidemiology, since serologic and molecular studies attribute the syndrome overwhelmingly to streptococci, and trimethoprim-sulfamethoxazole is the weaker anti-streptococcal choice. Intravenous vancomycin overtreats a well-appearing patient with mild disease, and blood cultures in uncomplicated cellulitis are low yield rather than a therapy gate. Clindamycin adds toxin suppression this syndrome does not need, carries meaningful C. difficile risk, and local streptococcal resistance makes it a less dependable pick; the toxin argument belongs to necrotizing infection and toxic shock, not routine cellulitis.",
    "id": 221
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 44-year-old woman with obesity has severe left thigh pain, low-grade erythema, and tachycardia of 128. The pain seems far worse than the visible findings, and edema extends beyond the erythema. Her LRINEC score calculates to 4. What is the most appropriate next step?",
    "options": {
      "A": "Observation with serial examinations, since the score places her at low risk",
      "B": "MRI of the thigh with surgical consultation to follow if fascial enhancement appears",
      "C": "Broad-spectrum antibiotics alone with reassessment after twenty-four hours of therapy",
      "D": "Immediate surgical consultation for operative exploration of the deep fascia"
    },
    "answer": "D",
    "explanation": "Using the score to defer action misreads its validation record, since LRINEC lacks the sensitivity to exclude necrotizing infection and was never designed as a rule-out instrument against a concerning examination. Making MRI the gatekeeper inserts hours of delay for a study whose negative result could not overrule pain out of proportion with disproportionate tachycardia. Antibiotics without surgery treat the one component of the disease that antibiotics reach while necrosis advances along the fascia. Exploration answers the question definitively and, when positive, is already the treatment; mortality tracks time to first debridement.",
    "id": 222
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 36-year-old man presents 20 hours after a cat bite to the hand with rapidly spreading erythema, swelling, and pain at the puncture sites. He has no allergies. Which oral regimen is most appropriate?",
    "options": {
      "A": "Cephalexin, providing reliable coverage of skin flora inoculated by the bite",
      "B": "Clindamycin, covering staphylococci, streptococci, and the oral anaerobes of cats",
      "C": "Amoxicillin-clavulanate, covering Pasteurella multocida along with anaerobes and skin organisms",
      "D": "Azithromycin, chosen for tissue penetration into the deep spaces of the hand"
    },
    "answer": "C",
    "explanation": "The rapid onset within a day is the signature of Pasteurella multocida, and the two most tempting single agents each miss it: cephalexin lacks dependable Pasteurella activity despite covering ordinary skin flora, and clindamycin misses it entirely while handling the anaerobes. Azithromycin is not a recommended single agent for established bite infection and leaves the anaerobic component uncertain. The combination agent covers Pasteurella, anaerobes, streptococci, and methicillin-susceptible staphylococci at once, which is why it is the default for infected bites; the hand location also warrants evaluation for tendon sheath involvement.",
    "id": 223
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 59-year-old man with cirrhosis develops fever, hypotension, and hemorrhagic bullae on the leg 18 hours after wading in Gulf Coast seawater with an abrasion. Which management is most appropriate?",
    "options": {
      "A": "Ceftriaxone plus doxycycline with urgent surgical evaluation for debridement",
      "B": "Vancomycin monotherapy pending blood culture identification of the pathogen",
      "C": "Piperacillin-tazobactam alone, deferring surgery unless crepitus develops on examination",
      "D": "Oral ciprofloxacin with outpatient wound care and next-day follow-up"
    },
    "answer": "A",
    "explanation": "Vancomycin has no activity against the gram-negative Vibrio vulnificus this exposure and host describe, so waiting on cultures with it running is unprotected time in a disease that kills within days. A beta-lactam alone without a tetracycline or quinolone partner departs from the recommended combination, and conditioning surgery on crepitus misunderstands a necrotizing infection that rarely produces gas; hemorrhagic bullae in a hypotensive cirrhotic already justify the operating room. Outpatient oral therapy is indefensible for septic shock. The ceftriaxone-doxycycline combination with early debridement is the standard.",
    "id": 224
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 63-year-old man with diabetes has a plantar ulcer of 5 weeks. A sterile probe passes to gritty bone; ESR is 84. He is afebrile and stable, and blood cultures are negative. Radiographs show cortical erosion. What is the best next step to guide therapy?",
    "options": {
      "A": "Begin piperacillin-tazobactam plus vancomycin immediately and reassess in six weeks",
      "B": "Superficial wound swab culture to direct a prolonged oral antibiotic course",
      "C": "Technetium bone scan to confirm osteomyelitis before considering any tissue sampling",
      "D": "Bone biopsy for culture and histology before antibiotics are started"
    },
    "answer": "D",
    "explanation": "Launching six weeks of broad empiric therapy in a stable afebrile patient forfeits the microbiologic diagnosis the whole course depends on, and deep pathogens in diabetic foot osteomyelitis are unpredictable enough that guessing fails often. Superficial swabs report the colonizing surface film rather than the bone pathogen and correlate poorly with deep cultures. A bone scan adds nothing when probe-to-bone, an ESR above 70, and radiographic erosion have already made the diagnosis probable; the question is no longer whether bone is infected but what organism is there. Stable disease permits biopsy first, which is the stewardship anchor.",
    "id": 225
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 66-year-old woman has 6 weeks of progressive lumbar back pain, worse at night, with ESR 92 and CRP 110. MRI shows L3-L4 discitis with endplate destruction. She is afebrile, neurologically intact, and hemodynamically stable. Two blood culture sets are negative. What is the most appropriate next step?",
    "options": {
      "A": "Empiric vancomycin plus ceftriaxone for six weeks with repeat MRI at completion",
      "B": "Image-guided biopsy of the disc space before any antibiotics are given",
      "C": "Empiric oral doxycycline while awaiting Brucella and Q fever serologies",
      "D": "Surgical fusion of the involved segment with intraoperative cultures"
    },
    "answer": "B",
    "explanation": "Empiric intravenous therapy in this stable, intact patient commits her to six weeks of treatment aimed at a guess and, worse, suppresses the yield of any later biopsy; the routine end-of-course MRI compounds it, since imaging lags healing and misleads. Starting doxycycline empirically for zoonotic causes without exposure history inverts the workup, although sending the serologies themselves is reasonable. Surgery is reserved for neurologic compromise, instability, or failure of medical therapy, none present. Stability is precisely what buys time for biopsy-first management, the guideline standard when blood cultures are negative.",
    "id": 226
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 71-year-old man with a 4-year-old total knee arthroplasty develops acute knee pain and fever 5 days after an episode of S. aureus bacteremia from a skin source. Symptoms began 3 days ago; the prosthesis was previously well functioning and radiographs show no loosening. Which strategy is most appropriate?",
    "options": {
      "A": "Debridement with polyethylene liner exchange, implant retention, and prolonged therapy including rifampin",
      "B": "Two-stage exchange with spacer placement, since any prosthetic infection mandates removal",
      "C": "Intravenous cefazolin for six weeks without surgery given the short symptom duration",
      "D": "Chronic oral suppression with doxycycline after two weeks of intravenous therapy"
    },
    "answer": "A",
    "explanation": "Reflexively removing every infected prosthesis overtreats the acute hematogenous scenario, where a short symptom duration and a stable, well-fixed implant are exactly the conditions under which retention strategies succeed. Antibiotics without debridement fail against even immature biofilm and leave infected tissue and the colonized liner in place. Jumping to indefinite suppression concedes cure in a patient who has not yet been offered curative management and reserves itself for those unfit for surgery. Debridement with modular exchange plus rifampin-containing combination therapy is the indicated approach.",
    "id": 227
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 24-year-old sexually active woman has 4 days of migratory wrist and ankle pain, pain along the extensor tendons of the right hand, and six scattered pustular lesions on her forearms and legs. Knee aspiration shows 28,000 white cells; synovial culture is negative. What is the most likely diagnosis and best diagnostic step?",
    "options": {
      "A": "Reactive arthritis; HLA-B27 testing with ophthalmologic screening examination for uveitis",
      "B": "Acute rheumatic fever; antistreptolysin O titers and echocardiography for carditis",
      "C": "Disseminated gonococcal infection; nucleic acid amplification testing of all exposed mucosal sites",
      "D": "Staphylococcal septic arthritis; repeat arthrocentesis with prolonged culture incubation"
    },
    "answer": "C",
    "explanation": "Reactive arthritis follows enteric or genitourinary infection by weeks and favors asymmetric lower-extremity arthritis with enthesitis, not tenosynovitis with pustules. Rheumatic fever's migratory arthritis affects large joints after pharyngitis and brings no pustular rash. Staphylococcal arthritis is typically a single hot joint with much higher synovial counts and positive cultures, not a migratory syndrome. The triad of tenosynovitis, dermatitis, and polyarthralgia in a young sexually active patient is disseminated gonococcal infection, in which joint and blood cultures are frequently negative and mucosal site amplification testing carries the diagnostic yield.",
    "id": 228
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 47-year-old man completes incision and drainage of a 3 cm thigh abscess. Culture grows MRSA. He is afebrile with minimal surrounding erythema. Beyond the drainage already performed, what does randomized trial evidence support?",
    "options": {
      "A": "No antibiotics, since drainage alone is definitive for abscesses under five centimeters",
      "B": "Intravenous vancomycin for three days followed by an oral step-down agent",
      "C": "Mupirocin decolonization of the nares alone to prevent household transmission",
      "D": "A short course of oral trimethoprim-sulfamethoxazole to improve cure and reduce recurrence"
    },
    "answer": "D",
    "explanation": "The drainage-alone position was the traditional teaching that the two large randomized trials specifically overturned, showing higher cure rates and fewer new lesions when trimethoprim-sulfamethoxazole or clindamycin followed incision and drainage even for smaller abscesses. Intravenous vancomycin is disproportionate for a drained, afebrile outpatient lesion. Decolonization addresses recurrence prevention and household spread as a separate strategy but does not substitute for treating the current infection. The adjunctive oral anti-MRSA course is the evidence-supported addition.",
    "id": 229
  },
  {
    "domain": "clinical_syndromes",
    "chapter": 23,
    "question": "A 38-year-old aquarium hobbyist has a 6-week nodular lesion on the dorsal hand with two new nodules ascending the forearm in a linear pattern. He recalls scraping his hand while cleaning the tank. Biopsy shows granulomatous inflammation; routine bacterial cultures are negative. What is the most likely organism and appropriate management?",
    "options": {
      "A": "Sporothrix schenckii, treated with itraconazole for three to six months",
      "B": "Mycobacterium marinum, treated with months of clarithromycin plus ethambutol",
      "C": "Nocardia brasiliensis, treated with trimethoprim-sulfamethoxazole for three months",
      "D": "Staphylococcus aureus, retreated after repeat culture on enriched aerobic media"
    },
    "answer": "B",
    "explanation": "Sporotrichosis produces an identical lymphocutaneous ascending pattern, which is exactly why the exposure history decides it: rose thorns and soil point to the fungus, while fish tank water points to the mycobacterium, and granulomas with negative routine cultures fit an organism that grows only on mycobacterial media at cooler incubation temperatures. Nocardial lymphocutaneous disease occurs but is the less likely fit for aquarium exposure. Staphylococci do not produce indolent granulomatous nodules marching up lymphatics over weeks. The clinical lesson embedded here is to request mycobacterial and fungal cultures whenever a skin biopsy shows granulomas.",
    "id": 230
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "A 24 year old man presents with fever, pharyngitis, diffuse rash, and painful oral ulcers 18 days after a condomless receptive anal exposure. A rapid oral fluid antibody test is negative. Which test combination most reliably establishes the diagnosis now?",
    "options": {
      "A": "Fourth generation antigen antibody immunoassay together with a quantitative plasma HIV RNA test",
      "B": "Repeat rapid oral fluid antibody testing in two weeks with strict abstinence counseling",
      "C": "HIV-1 and HIV-2 antibody differentiation immunoassay followed by Western blot confirmation testing",
      "D": "CD4 lymphocyte count with CD4 percentage and a heterophile antibody test for mononucleosis"
    },
    "answer": "A",
    "explanation": "Waiting two weeks to repeat an oral fluid antibody test leaves a highly infectious acute infection undiagnosed during its most transmissible phase, and oral fluid assays have the longest window periods of all. Going straight to the antibody differentiation immunoassay fails for the same reason the rapid test failed, since antibodies are often still absent at day 18, and Western blot is no longer part of the recommended algorithm. A CD4 count with a heterophile test addresses the mononucleosis mimic but cannot rule HIV in or out, and CD4 counts are nonspecific and transiently depressed by many acute illnesses.",
    "id": 231
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "A 31 year old woman starting therapy asks why her clinic will not prescribe abacavir before a laboratory result returns. Which result is the clinic waiting for?",
    "options": {
      "A": "Baseline genotypic resistance testing of the reverse transcriptase and protease genes",
      "B": "A quantitative hepatitis B surface antigen level with reflex e antigen testing",
      "C": "HLA-B*5701 testing to exclude the allele mediating the abacavir hypersensitivity reaction",
      "D": "A plasma viral load to confirm the value sits below five hundred thousand copies"
    },
    "answer": "C",
    "explanation": "Genotypic resistance testing is part of the baseline evaluation but does not predict hypersensitivity, which is an immunologic reaction unrelated to viral mutations. Hepatitis B testing governs whether the backbone must contain tenofovir, not whether abacavir is immunologically safe. A viral load threshold of five hundred thousand copies is the caution attached to the dolutegravir plus lamivudine two-drug regimen and has no bearing on abacavir hypersensitivity risk.",
    "id": 232
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "A patient suppressed for six years on bictegravir, tenofovir alafenamide, and emtricitabine asks whether he can transmit HIV to his seronegative wife during condomless sex. His viral load has been below 50 copies for six years. What is the most accurate counseling?",
    "options": {
      "A": "Risk is greatly reduced but she should take daily oral preexposure prophylaxis indefinitely",
      "B": "Durable suppression below 200 copies means he does not transmit HIV sexually",
      "C": "Transmission remains possible so condoms remain necessary for every act of intercourse",
      "D": "Risk depends mainly on his CD4 count, which should be checked before counseling"
    },
    "answer": "B",
    "explanation": "Framing suppression as merely risk reduction requiring the partner to take indefinite preexposure prophylaxis contradicts the PARTNER and HPTN 052 data, though she may choose PrEP for her own reassurance or as a bridge during any adherence lapse. Insisting condoms remain necessary for HIV prevention specifically is not supported by zero linked transmissions across tens of thousands of condomless acts in serodifferent couples with suppression, although condoms still prevent other infections and pregnancy. The CD4 count reflects immunologic damage and prophylaxis needs and has no role in transmission counseling once the viral load is durably undetectable.",
    "id": 233
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "A 44 year old man on tenofovir disoproxil fumarate, emtricitabine, and dolutegravir develops normoglycemic glycosuria, hypophosphatemia, and new proteinuria. What is the most likely mechanism?",
    "options": {
      "A": "Dolutegravir inhibition of tubular creatinine secretion through the organic cation transporter",
      "B": "Immune complex glomerulonephritis from uncontrolled viral replication in the kidney",
      "C": "Emtricitabine crystal deposition within the distal nephron causing obstructive tubulopathy",
      "D": "Proximal tubular mitochondrial injury from tenofovir disoproxil producing acquired Fanconi syndrome"
    },
    "answer": "D",
    "explanation": "Dolutegravir's interaction with the organic cation transporter produces only a benign creatinine rise of roughly a tenth of a point without glycosuria, phosphate wasting, or proteinuria. Immune complex disease and classic HIV-associated nephropathy occur with uncontrolled viremia, whereas this patient's syndrome is a drug effect with a proximal tubular signature. Emtricitabine does not cause crystal nephropathy; the historic crystal offenders were indinavir and atazanavir, and their lesion is stones and crystalluria rather than Fanconi physiology.",
    "id": 234
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "A 29 year old transgender woman requests preexposure prophylaxis but says she cannot take a daily pill. Which option is best supported for her?",
    "options": {
      "A": "Oral tenofovir alafenamide with emtricitabine taken only around anticipated sexual exposures",
      "B": "Intramuscular cabotegravir administered every two months after appropriate initiation dosing",
      "C": "A single dose of doravirine taken within seventy two hours after each exposure",
      "D": "Enfuvirtide self-injections administered subcutaneously twice weekly during periods of sexual activity"
    },
    "answer": "B",
    "explanation": "On-demand dosing is studied with tenofovir disoproxil plus emtricitabine in men who have sex with men, not with the alafenamide salt, and event-driven use requires planning around sex that daily-pill nonadherence already makes doubtful. A single postexposure dose of doravirine is neither postexposure prophylaxis, which requires 28 days of a three-drug regimen, nor prevention. Enfuvirtide is a fusion inhibitor for salvage therapy in treatment-experienced patients and has no role whatsoever in prevention.",
    "id": 235
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "A patient failing raltegravir-based therapy has a genotype showing Q148H with G140S in integrase. Which statement best guides the next regimen?",
    "options": {
      "A": "Dolutegravir may retain partial activity but requires twice daily dosing and full support from other agents",
      "B": "Bictegravir once daily will be fully active because it is a second generation integrase inhibitor",
      "C": "All integrase inhibitors are now equally inactive and the class must be abandoned permanently",
      "D": "The mutations will revert quickly off drug, so raltegravir can be recycled after a short holiday"
    },
    "answer": "A",
    "explanation": "Assuming bictegravir remains fully active is wrong because the Q148 pathway with accessory mutations such as G140S meaningfully reduces susceptibility to both second generation drugs. Declaring the entire class permanently unusable overstates the case, since dose-adjusted dolutegravir salvaged many such patients in the VIKING studies when paired with active companions. Recycling raltegravir after a holiday ignores archived resistance: variants fade from plasma sequencing without drug pressure but persist in the reservoir and reemerge immediately upon reexposure.",
    "id": 236
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "A woman at 24 weeks of gestation is newly diagnosed with HIV, viral load 85,000 copies per milliliter. Which management is most appropriate?",
    "options": {
      "A": "Defer therapy until after delivery to avoid fetal antiretroviral exposure during organogenesis",
      "B": "Begin zidovudine monotherapy now and add combination therapy in the third trimester",
      "C": "Start an efavirenz based regimen because integrase inhibitors are contraindicated in pregnancy",
      "D": "Start dolutegravir with tenofovir and emtricitabine now and follow viral load closely"
    },
    "answer": "D",
    "explanation": "Deferring therapy until delivery maximizes perinatal transmission risk, which tracks maternal viral load, and organogenesis is already complete at 24 weeks. Zidovudine monotherapy is a relic of the ACTG 076 era that invites resistance and undertreats the mother. The claim that integrase inhibitors are contraindicated inverts current guidance: dolutegravir is a preferred agent throughout pregnancy after the initial neural tube defect signal shrank with accumulating surveillance data, while efavirenz is merely an alternative.",
    "id": 237
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "A 52 year old man on ritonavir-boosted darunavir receives an intra-articular triamcinolone injection for shoulder pain. Six weeks later he has facial fullness, central weight gain, and an undetectable morning cortisol. What happened?",
    "options": {
      "A": "Darunavir directly stimulated adrenal glucocorticoid production causing autonomous endogenous Cushing syndrome",
      "B": "The injection introduced infection that seeded the adrenal glands and destroyed them",
      "C": "Ritonavir blocked CYP3A4 metabolism of triamcinolone, producing iatrogenic Cushing syndrome with adrenal suppression",
      "D": "The patient developed primary adrenal insufficiency from disseminated cytomegalovirus adrenalitis"
    },
    "answer": "C",
    "explanation": "Protease inhibitors do not stimulate adrenal steroidogenesis, and endogenous Cushing syndrome would show an elevated rather than suppressed cortisol axis. An infected adrenal gland from a shoulder injection is anatomically and clinically implausible and adrenal destruction causes deficiency features, not cushingoid ones. Cytomegalovirus adrenalitis occurs in advanced untreated disease with CD4 counts below 50 and produces adrenal insufficiency with hyperpigmentation and hypotension, the physiologic opposite of this presentation.",
    "id": 238
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "Which property of the latent HIV reservoir best explains why analytic treatment interruption leads to rebound viremia even after 15 years of suppression?",
    "options": {
      "A": "Integrated provirus persists in long-lived resting memory CD4 cells that proliferate homeostatically",
      "B": "Antiretroviral drugs never reach therapeutic concentrations inside lymph node germinal centers",
      "C": "Continuous low-level replication on therapy replenishes the reservoir despite undetectable plasma viremia",
      "D": "The reservoir resides exclusively in the central nervous system behind the blood brain barrier"
    },
    "answer": "A",
    "explanation": "Drug penetration into lymphoid tissue is an area of study but suppressive regimens demonstrably halt replication there, and sanctuary pharmacology alone would predict evolving viral sequences on therapy, which are not observed. The absence of sequence evolution likewise argues against ongoing replication replenishing the reservoir in suppressed patients, whose reservoirs are instead maintained by cellular longevity and clonal expansion. Restricting the reservoir to the central nervous system contradicts direct measurements showing the dominant reservoir sits in resting memory CD4 cells throughout blood and lymphoid tissue.",
    "id": 239
  },
  {
    "domain": "hiv",
    "chapter": 24,
    "question": "A patient on dolutegravir begins taking over-the-counter calcium carbonate and a magnesium-aluminum antacid for reflux. Three months later his viral load is 4,200 copies per milliliter after years of suppression. What most likely explains the rebound?",
    "options": {
      "A": "Dolutegravir induced its own metabolism through progressive hepatic enzyme autoinduction over time",
      "B": "Calcium carbonate raised gastric pH enough to block dolutegravir absorption completely",
      "C": "Spontaneous archiving of the R263K mutation emerged without any selective drug pressure",
      "D": "Polyvalent cations chelated dolutegravir in the gut and reduced its absorption below therapeutic levels"
    },
    "answer": "D",
    "explanation": "Dolutegravir does not autoinduce its metabolism; that behavior belongs to drugs like carbamazepine and, within HIV therapy, partially to older agents such as nevirapine. Gastric pH changes impair absorption of drugs like rilpivirine and atazanavir, whereas the dolutegravir problem with antacids is cation chelation rather than acidity itself. Resistance mutations such as R263K do not arise spontaneously without drug pressure and would be a consequence of prolonged subtherapeutic exposure, not the initiating event of this rebound.",
    "id": 240
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "A 36 year old man with HIV and a CD4 count of 90 presents with three weeks of dyspnea and dry cough. Room air arterial oxygen tension is 62 millimeters of mercury, and induced sputum immunofluorescence confirms Pneumocystis jirovecii. Besides trimethoprim-sulfamethoxazole, what should be started?",
    "options": {
      "A": "Prednisone forty milligrams twice daily within seventy two hours, tapered over three weeks",
      "B": "Aerosolized pentamidine monthly to consolidate treatment response and prevent early relapse",
      "C": "Empiric intravenous liposomal amphotericin B pending fungal blood culture results",
      "D": "Immediate antiretroviral therapy the same day regardless of oxygenation status"
    },
    "answer": "A",
    "explanation": "Aerosolized pentamidine is a prophylaxis option for patients intolerant of oral agents, not an adjunct to acute treatment, and it does not reach adequate alveolar concentrations for established pneumonia. Amphotericin has no activity against Pneumocystis because the organism's membrane lacks ergosterol, the drug's target. Same-day antiretroviral therapy is reasonable in many opportunistic infections, but the question asks what the oxygenation of 62 mandates, and in moderate to severe Pneumocystis pneumonia the evidence-based addition is corticosteroids; antiretroviral timing here is early but typically within two weeks rather than obligatorily same day.",
    "id": 241
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "A 41 year old woman with a CD4 count of 45 and positive Toxoplasma IgG presents with hemiparesis. Imaging shows three ring-enhancing basal ganglia lesions. What is the most appropriate next step?",
    "options": {
      "A": "Immediate stereotactic brain biopsy of the largest and most accessible lesion",
      "B": "Whole brain radiation therapy for presumed primary central nervous system lymphoma",
      "C": "Empiric pyrimethamine, sulfadiazine, and leucovorin with repeat imaging in two weeks",
      "D": "Cerebrospinal fluid cytology and flow cytometry before any therapy begins"
    },
    "answer": "C",
    "explanation": "Brain biopsy is reserved for patients who fail to respond to empiric therapy, are Toxoplasma seronegative, or have imaging strongly favoring lymphoma, since biopsy carries real morbidity and most seropositive patients with multiple lesions have toxoplasmosis. Radiation for presumed lymphoma without tissue confirmation would irreversibly commit a likely treatable infection to the wrong pathway. Lumbar puncture in a patient with multiple mass lesions and focal deficits risks herniation, and cytology has poor sensitivity for lymphoma anyway, so it neither safely nor reliably settles the question.",
    "id": 242
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "A 29 year old man with newly diagnosed HIV, CD4 count 30, is diagnosed with cryptococcal meningitis; opening pressure is 34 centimeters of water. Induction therapy is started. When should antiretroviral therapy begin?",
    "options": {
      "A": "The same week, because early therapy improves survival in advanced immunosuppression",
      "B": "Only after the full year of fluconazole maintenance therapy has finished",
      "C": "After two weeks of induction, at the transition to consolidation fluconazole",
      "D": "Deferred roughly four to six weeks after antifungal therapy has started"
    },
    "answer": "D",
    "explanation": "Starting the same week reflects the correct instinct for most opportunistic infections but was directly tested in cryptococcal meningitis, where early initiation increased mortality in the COAT trial, driven by intracranial reconstitution inflammation. Waiting a full year of maintenance abandons the patient to profound immunodeficiency and every other opportunistic infection for that duration. The two-week transition point still fell within the harmful early window studied, and guidelines specifically counsel the four to six week deferral rather than tying initiation to the consolidation switch.",
    "id": 243
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "A 38 year old man with a CD4 count of 22 reports floaters and a right visual field defect. Funduscopy shows perivascular hemorrhages with fluffy white retinal infiltrates near the macula. Best initial management?",
    "options": {
      "A": "Oral valganciclovir plus immediate intravitreal antiviral injection given the sight-threatening location",
      "B": "Intravenous acyclovir at meningeal doses for presumed varicella zoster retinal necrosis",
      "C": "Systemic corticosteroids to reduce retinal inflammation before any antiviral exposure",
      "D": "Observation with weekly dilated examinations until the CD4 count exceeds fifty"
    },
    "answer": "A",
    "explanation": "Acyclovir lacks reliable activity against cytomegalovirus, whose UL97 kinase phosphorylates ganciclovir rather than acyclovir efficiently, and the fundus picture described is classic cytomegalovirus retinitis rather than the rapidly confluent peripheral necrosis of zoster. Corticosteroids without antiviral cover accelerate viral replication and retinal destruction; their ocular role comes later if immune recovery uveitis develops. Observation while awaiting immune recovery guarantees progressive irreversible retinal loss, since untreated retinitis advances relentlessly and the fovea-threatening location makes delay measured in days costly.",
    "id": 244
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "A 33 year old woman with tuberculosis and a new HIV diagnosis has a CD4 count of 38. Sputum is smear positive; she starts rifampin, isoniazid, pyrazinamide, and ethambutol. When should antiretroviral therapy start, and with what caution?",
    "options": {
      "A": "Within eight weeks, because low counts make early therapy too dangerous to attempt",
      "B": "Within two weeks, using dolutegravir dosed twice daily to offset rifampin induction",
      "C": "After completing the intensive phase, using bictegravir as the preferred anchor drug",
      "D": "Simultaneously with tuberculosis therapy on day one, using a boosted protease inhibitor"
    },
    "answer": "B",
    "explanation": "Reserving the eight week window for low counts inverts the trial evidence, which showed survival benefit from starting within two weeks precisely when the CD4 count is below 50. Waiting out the entire intensive phase forfeits that benefit, and bictegravir is prohibited with rifampin because induction drops its levels unacceptably. Day-one simultaneous initiation is not required and a boosted protease inhibitor is among the worst partners for rifampin, whose induction overwhelms ritonavir boosting; the pill burden and interaction profile make that pairing unusable without switching to rifabutin.",
    "id": 245
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "Three weeks after starting antiretroviral therapy, a man treated for disseminated Mycobacterium avium complex develops recurrent fever and enlarging, tender cervical lymphadenopathy. Blood cultures are now negative and his viral load has fallen from 500,000 to 800 copies. What is the best course?",
    "options": {
      "A": "Stop antiretroviral therapy until all lymphadenopathy resolves completely, then rechallenge cautiously",
      "B": "Switch antimycobacterial therapy to a second-line regimen for presumed macrolide resistance",
      "C": "Continue both therapies and add anti-inflammatory treatment, using corticosteroids if severe",
      "D": "Begin empiric chemotherapy for lymphoma given the rapidly enlarging lymph nodes"
    },
    "answer": "C",
    "explanation": "Interrupting antiretroviral therapy is reserved for life-threatening reconstitution disease, usually central nervous system involvement, and stopping it here would trade a manageable inflammatory syndrome for renewed immunodeficiency. Presuming macrolide resistance contradicts the microbiology, since blood cultures have sterilized and the virologic response is excellent, both marking paradoxical immune reconstitution rather than treatment failure. Empiric lymphoma chemotherapy without tissue diagnosis is never appropriate, and the timeline of worsening weeks after antiretroviral initiation with falling viral load points squarely at reconstitution inflammation, though biopsy is reasonable if the picture fails to settle.",
    "id": 246
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "A 45 year old man with a CD4 count of 60 has fevers, night sweats, ten kilograms of weight loss, diarrhea, pancytopenia, and an alkaline phosphatase four times normal. What is the best diagnostic test?",
    "options": {
      "A": "Serum cryptococcal antigen with reflex lumbar puncture if the result returns positive",
      "B": "Stool ova and parasite examination on three consecutive daily specimens",
      "C": "Bone scan to evaluate the disproportionately elevated alkaline phosphatase level",
      "D": "Mycobacterial blood cultures, with marrow or node biopsy if cultures are unrevealing"
    },
    "answer": "D",
    "explanation": "Cryptococcal antigen screening belongs in this patient's workup as a matter of routine at his count, but the wasting syndrome with cytopenias and a hepatic-pattern alkaline phosphatase elevation is the classic fingerprint of disseminated Mycobacterium avium complex rather than cryptococcosis. Stool parasite examinations address chronic diarrhea from cryptosporidiosis and related protozoa but cannot explain the marrow suppression or the biochemical picture. A bone scan chases the wrong isoenzyme, since the alkaline phosphatase of disseminated mycobacterial disease reflects hepatic infiltration by granulomas, not skeletal pathology.",
    "id": 247
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "A 50 year old woman with HIV suppressed for a decade, CD4 count 620, asks which vaccinations she should avoid. Which vaccine would be contraindicated if her CD4 count were 150 instead?",
    "options": {
      "A": "Recombinant zoster vaccine given as the standard two dose series",
      "B": "Live attenuated measles mumps rubella vaccine for documented nonimmunity",
      "C": "High antigen hepatitis B vaccination using the approved accelerated schedule",
      "D": "Pneumococcal conjugate vaccination followed by the recommended polysaccharide interval"
    },
    "answer": "B",
    "explanation": "The recombinant zoster vaccine contains no live virus, is specifically valuable in HIV given elevated zoster risk, and is safe at any count. Hepatitis B vaccination is inactivated antigen, recommended for all nonimmune patients with HIV, with higher antigen doses actually preferred to overcome blunted responses. Pneumococcal vaccination is likewise nonliving and indicated at every CD4 stratum because invasive pneumococcal disease risk is elevated across the board; only replication-competent live vaccines such as measles mumps rubella and varicella are contraindicated below 200 cells.",
    "id": 248
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "A 31 year old man with a CD4 count of 40 develops progressive left arm weakness and visual field loss over six weeks without fever or headache. Magnetic resonance imaging shows multifocal nonenhancing white matter lesions without mass effect. Cerebrospinal fluid JC virus PCR is positive. What is the most effective available intervention?",
    "options": {
      "A": "High dose intravenous ganciclovir induction followed by indefinite oral maintenance therapy",
      "B": "Pyrimethamine and sulfadiazine with leucovorin rescue for at least six weeks",
      "C": "Effective antiretroviral therapy to restore JC virus specific immune surveillance",
      "D": "Plasma exchange to remove circulating JC virus before it enters the brain"
    },
    "answer": "C",
    "explanation": "Ganciclovir targets herpesviruses such as cytomegalovirus and has no meaningful activity against JC polyomavirus, and no antiviral has proven efficacy in this disease. Pyrimethamine with sulfadiazine treats toxoplasmic encephalitis, which enhances on imaging, produces mass effect, and evolves faster with fever, none of which fits here. Plasma exchange removes antibodies and is used for natalizumab-associated disease to clear the drug, not the virus; in HIV the only intervention that changes the course is immune restoration through suppression of HIV itself.",
    "id": 249
  },
  {
    "domain": "hiv",
    "chapter": 25,
    "question": "A hospitalized man with a new HIV diagnosis and a CD4 count of 70 is asymptomatic neurologically. Which screening test should be sent before discharge specifically because his count is below 100?",
    "options": {
      "A": "Serum Epstein-Barr virus polymerase chain reaction to screen for developing lymphoma",
      "B": "Serum cryptococcal antigen, with lumbar puncture and preemptive fluconazole if positive",
      "C": "Urine Legionella antigen given his elevated risk of atypical bacterial pneumonia",
      "D": "Serum beta-D-glucan to screen for asymptomatic early Pneumocystis colonization"
    },
    "answer": "B",
    "explanation": "Epstein-Barr virus PCR in serum has no validated role in lymphoma screening; its diagnostic niche in HIV is cerebrospinal fluid testing when primary central nervous system lymphoma is suspected. Urine Legionella antigen is a test for compatible pneumonia, not an asymptomatic screen tied to any CD4 threshold. Beta-D-glucan supports the diagnosis of symptomatic Pneumocystis pneumonia but has no screening indication in asymptomatic patients, whereas cryptococcal antigen screening below 100 cells detects preclinical antigenemia that preemptive fluconazole can stop short of meningitis.",
    "id": 250
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "A 61 year old woman presents with three days of fever, confusion, and word-finding difficulty. Cerebrospinal fluid shows 85 lymphocytes and 40 red cells per microliter with mildly elevated protein. Magnetic resonance imaging shows left temporal hyperintensity. What is the most appropriate immediate action?",
    "options": {
      "A": "Await herpes simplex polymerase chain reaction results before committing to antiviral therapy",
      "B": "Begin intravenous acyclovir at ten milligrams per kilogram every eight hours now",
      "C": "Begin high dose intravenous corticosteroids for presumed autoimmune limbic encephalitis",
      "D": "Begin oral valacyclovir given its excellent bioavailability and easier outpatient transition"
    },
    "answer": "B",
    "explanation": "Waiting for the PCR result before treating abandons the single most time-sensitive rule in this disease, since untreated mortality exceeds 70 percent and outcomes track directly with time to acyclovir; the drug is started on suspicion and stopped if an adequately timed PCR is negative. Corticosteroids for autoimmune limbic encephalitis are premature when the infectious mimic has not been excluded, and steroids without antiviral cover could accelerate viral replication. Oral valacyclovir, whatever its bioavailability, does not achieve the cerebrospinal fluid exposure that necrotizing encephalitis demands and is never an initial substitute for intravenous therapy.",
    "id": 251
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "A 74 year old man had ophthalmic zoster eight weeks ago. He now presents with acute right hemiparesis. Cerebrospinal fluid shows lymphocytic pleocytosis with positive varicella-zoster antibody. What is the most likely mechanism of his stroke?",
    "options": {
      "A": "Cardioembolism from zoster-associated atrial fibrillation triggered by systemic viral inflammation",
      "B": "Bacterial superinfection of the original zoster rash seeding cerebral emboli",
      "C": "Cholesterol plaque rupture unrelated in mechanism to his recent zoster episode",
      "D": "Viral invasion of cerebral arteries producing an inflammatory infectious vasculopathy"
    },
    "answer": "D",
    "explanation": "Cardioembolism from arrhythmia would not explain an inflammatory spinal fluid with intrathecal varicella antibody production, which localizes the process to the nervous system itself. Bacterial superinfection of a healed rash producing cerebral emboli would present as endocarditis or abscess with a neutrophilic picture rather than a lymphocytic pleocytosis with viral antibody. Coincidental atherosclerotic stroke cannot be excluded on age alone, but the trigeminal zoster followed by delayed contralateral deficit with confirmatory spinal fluid findings is the classic varicella vasculopathy sequence, and calling it unrelated ignores the diagnostic result in hand.",
    "id": 252
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "A seronegative kidney recipient of a seropositive donor organ completes six months of valganciclovir prophylaxis. Six weeks later he develops fever, diarrhea, and a falling white cell count with plasma cytomegalovirus PCR of 45,000 international units per milliliter. Colon biopsy shows owl-eye inclusions. Which feature of his history most increased his risk of this late event?",
    "options": {
      "A": "Donor seropositive with recipient seronegative status, leaving him without preexisting immunity",
      "B": "The choice of a kidney rather than a liver as the transplanted organ",
      "C": "Completion of prophylaxis, which directly stimulates viral replication upon withdrawal",
      "D": "His blood group compatibility profile with the deceased organ donor"
    },
    "answer": "A",
    "explanation": "Organ type modulates cytomegalovirus risk modestly, with lung and intestine higher than kidney, but it is not the dominant variable in this vignette. Prophylaxis withdrawal unmasks risk by ending suppression in a patient who never developed his own immunity, yet the drug does not stimulate replication; blaming the medication inverts the mechanism, which is that the donor-positive recipient-negative mismatch delayed his first immunologic encounter with the virus until after prophylaxis ended. Blood group compatibility governs hyperacute rejection risk and has nothing to do with herpesvirus reactivation biology.",
    "id": 253
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "A 19 year old college student has fever, exudative pharyngitis, posterior cervical adenopathy, and 20 percent atypical lymphocytes. A heterophile antibody test is negative. Amoxicillin given earlier produced a diffuse maculopapular rash. What is the best interpretation?",
    "options": {
      "A": "The rash proves penicillin allergy and mononucleosis is excluded by heterophile negativity",
      "B": "Acute cytomegalovirus infection is confirmed because heterophile testing excludes Epstein-Barr virus",
      "C": "Early Epstein-Barr mononucleosis remains likely; send viral capsid antigen IgM serology",
      "D": "The presentation indicates acute streptococcal pharyngitis complicated by a viral exanthem"
    },
    "answer": "C",
    "explanation": "The amoxicillin rash of mononucleosis is a disease-associated phenomenon, not evidence of true penicillin allergy, and heterophile testing misses a meaningful fraction of cases, particularly in the first week, so negativity excludes nothing. Cytomegalovirus does cause heterophile-negative mononucleosis, but it typically lacks this degree of pharyngitis and adenopathy, and one negative heterophile test cannot confirm any alternative agent without specific serology. Streptococcal pharyngitis does not produce atypical lymphocytosis or posterior cervical adenopathy, and the rash after aminopenicillins in this setting points toward Epstein-Barr virus rather than a coincidental viral exanthem.",
    "id": 254
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "A 34 year old woman with sickle cell disease presents with fatigue and a hemoglobin of 4.8 grams per deciliter. Her reticulocyte count is 0.1 percent. Her daughter recently had bright red cheeks and a lacy arm rash. What is the mechanism of the patient's anemia?",
    "options": {
      "A": "Parvovirus B19 infection of erythroid progenitors halting red cell production temporarily",
      "B": "Splenic sequestration of sickled cells triggered by an intercurrent viral illness",
      "C": "Antibody mediated hemolysis provoked by molecular mimicry with viral capsid proteins",
      "D": "Aplastic anemia from viral suppression of all three hematopoietic cell lines"
    },
    "answer": "A",
    "explanation": "Splenic sequestration causes acute anemia with a rising reticulocyte count and an enlarging spleen, mostly in young children who retain splenic tissue, whereas this reticulocyte count near zero identifies a production arrest. Immune hemolysis would show reticulocytosis, spherocytes or sickle-related findings with elevated bilirubin and lactate dehydrogenase, and a positive direct antiglobulin test, none of which fits an absent marrow response. Pancytopenia from global marrow failure is not described here; parvovirus selectively infects erythroid precursors via the P antigen, so white cells and platelets are typically preserved in transient aplastic crisis.",
    "id": 255
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "A 58 year old man starting rituximab for lymphoma has the following serologies: HBsAg negative, anti-HBs positive, anti-HBc positive, hepatitis C antibody negative. What is the most appropriate management regarding hepatitis B?",
    "options": {
      "A": "No action is needed because surface antibody positivity guarantees protection during chemotherapy",
      "B": "Vaccinate against hepatitis B before the first rituximab infusion is administered",
      "C": "Begin antiviral prophylaxis with entecavir or tenofovir during and after therapy",
      "D": "Check quantitative hepatitis B DNA monthly and treat only if symptoms develop"
    },
    "answer": "C",
    "explanation": "Trusting surface antibody misunderstands B cell depletion, which removes exactly the antibody-producing compartment; resolved infection leaves covalently closed circular DNA in hepatocytes that can reactivate when humoral control collapses, and anti-CD20 agents are the highest-risk drug class for reactivation from this serologic state. Vaccination is pointless in someone with natural core antibody and imminent B cell depletion that would abort any response. Monitoring alone with treatment triggered by symptoms arrives too late, since reactivation flares can be fulminant, and guidelines favor prophylaxis over deferred rescue for B cell depleting therapy.",
    "id": 256
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "A 41 year old traveler returns from Southeast Asia with three days of fever, retro-orbital pain, and myalgias. Platelets are 68,000 per microliter. On day five his fever breaks, but he develops abdominal pain, persistent vomiting, and a hematocrit rising from 42 to 51 percent. What does the day five change signify?",
    "options": {
      "A": "Clinical recovery, since defervescence in dengue reliably marks the end of illness",
      "B": "Onset of the critical plasma leak phase requiring admission and careful crystalloid titration",
      "C": "Secondary bacterial sepsis, warranting immediate broad spectrum antibiotics and aggressive resuscitation",
      "D": "Progression to typhoid fever acquired simultaneously from the same food exposure"
    },
    "answer": "B",
    "explanation": "Reading defervescence as recovery is the deadliest misunderstanding in dengue, because capillary leak begins exactly when fever falls, and this patient shows three formal warning signs: abdominal pain, persistent vomiting, and hemoconcentration with thrombocytopenia. Bacterial sepsis producing a rising hematocrit would be unusual, since sepsis dilutes and vasodilates rather than hemoconcentrates, and reflexive broad antibiotics with aggressive fluids ignores the titrated approach leak physiology demands. Typhoid presents with a more gradual fever staircase, relative bradycardia, and constipation or diarrhea over a longer course, not an abrupt hemoconcentration at defervescence.",
    "id": 257
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "A hematopoietic stem cell transplant recipient on letermovir prophylaxis develops rising cytomegalovirus DNAemia. Genotyping shows a UL97 kinase mutation. Which statement correctly links resistance testing to therapy?",
    "options": {
      "A": "The UL97 mutation confers ganciclovir resistance while foscarnet activity is preserved",
      "B": "The UL97 mutation confers combined resistance to ganciclovir, foscarnet, and cidofovir simultaneously",
      "C": "UL97 mutations indicate letermovir resistance because letermovir targets the viral kinase",
      "D": "Genotyping is uninterpretable during prophylaxis and therapy must proceed entirely empirically"
    },
    "answer": "A",
    "explanation": "Extending resistance to foscarnet and cidofovir requires mutations in UL54, the DNA polymerase both those drugs target, whereas UL97 encodes the kinase performing ganciclovir's initial phosphorylation and its mutations spare polymerase-directed agents. Attributing letermovir resistance to UL97 confuses targets, since letermovir inhibits the terminase complex encoded by UL56, where its own resistance mutations arise. Declaring genotyping uninterpretable is simply wrong; resistance genotyping in the setting of rising DNAemia on or after prophylaxis is exactly how salvage therapy is rationally selected.",
    "id": 258
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "A 29 year old pregnant woman in her third trimester develops acute hepatitis while visiting family in South Asia. Which virus carries the highest maternal mortality in this specific setting?",
    "options": {
      "A": "Hepatitis A virus acquired from contaminated water sources during travel",
      "B": "Hepatitis C virus acquired through a remote transfusion in childhood",
      "C": "Chronic hepatitis B virus entering an immune-active phase during gestation",
      "D": "Hepatitis E virus, genotype 1, acquired through fecally contaminated water"
    },
    "answer": "D",
    "explanation": "Hepatitis A shares the fecal-oral route and the travel setting but causes fulminant failure rarely and shows no dramatic pregnancy-specific mortality amplification. Hepatitis C essentially never presents as acute fulminant hepatitis in pregnancy and a remote childhood infection would be chronic and typically indolent. Hepatitis B flares can occur around pregnancy and postpartum, yet the notorious obstetric killer among hepatitis viruses is genotype 1 hepatitis E, with third trimester mortality reported at 20 to 25 percent in endemic regions, a fact that drives its priority in this vignette.",
    "id": 259
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 26,
    "question": "During an outbreak investigation, a 32 year old man presents with fever, inguinal adenopathy, severe rectal pain, and firm umbilicated pustules on the genitals and one palm, all lesions at a similar stage. He has advanced untreated HIV. Which therapy directly targets the causative virus?",
    "options": {
      "A": "High dose intravenous acyclovir continued for a full twenty one days",
      "B": "Tecovirimat, which inhibits the orthopoxvirus VP37 envelope wrapping protein",
      "C": "Oral valganciclovir induction dosing followed by prolonged secondary maintenance therapy",
      "D": "Pegylated interferon injections weekly until every skin lesion fully crusts"
    },
    "answer": "B",
    "explanation": "Acyclovir depends on herpesvirus thymidine kinase for activation and has no activity against poxviruses, and the deep umbilicated synchronous pustules with proctitis describe mpox rather than herpes simplex, whose lesions are superficial grouped vesicles. Valganciclovir is a cytomegalovirus drug; nothing in this presentation suggests cytomegalovirus disease even at his level of immunosuppression. Interferon has no established role in mpox and would add toxicity without efficacy, whereas tecovirimat is the orthopoxvirus-specific agent used in severe disease and in exactly this high-risk advanced HIV population.",
    "id": 260
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "A 63 year old man in the intensive care unit after bowel perforation surgery develops fever and hypotension; blood cultures grow yeast, later identified as Candida glabrata. Which initial therapy is most appropriate?",
    "options": {
      "A": "High dose oral fluconazole while awaiting confirmatory susceptibility testing results",
      "B": "Liposomal amphotericin B reserved as first choice for all intensive care candidemia",
      "C": "An echinocandin such as micafungin, with catheter removal as soon as feasible",
      "D": "Voriconazole with therapeutic drug monitoring targeting standard trough concentrations"
    },
    "answer": "C",
    "explanation": "Fluconazole is a poor opening move against Candida glabrata, whose susceptibility to it is at best dose-dependent and often absent, and empiric azole therapy in a septic patient gambles on exactly the species where the gamble fails. Liposomal amphotericin is effective but carries nephrotoxicity that an equally effective, better tolerated class makes unnecessary as routine first-line therapy. Voriconazole adds no reliability against glabrata beyond fluconazole's limitations, brings interaction and monitoring burdens, and is not a guideline-preferred initial agent for candidemia.",
    "id": 261
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "A 34 year old woman on day 18 of neutropenia after leukemia induction develops pleuritic chest pain. Computed tomography shows a nodule surrounded by a rim of ground-glass attenuation. Serum galactomannan is elevated. Which drug is first-line?",
    "options": {
      "A": "Voriconazole, with trough monitoring targeting roughly one to five and a half micrograms per milliliter",
      "B": "Caspofungin monotherapy, given its fungicidal activity against molds in neutropenia",
      "C": "Fluconazole at eight hundred milligrams daily until neutrophil recovery occurs",
      "D": "Oral terbinafine, exploiting its selective activity against filamentous fungal pathogens"
    },
    "answer": "A",
    "explanation": "Caspofungin is only fungistatic against Aspergillus, and echinocandin monotherapy underperformed as primary therapy, relegating the class to salvage or combination roles in this disease. Fluconazole has no mold activity whatsoever, so at any dose it leaves invasive aspergillosis untreated. Terbinafine's clinical niche is dermatophyte infections of skin and nails; despite in vitro filamentous activity it has no role in life-threatening invasive aspergillosis, where the halo sign plus galactomannan in a neutropenic host points squarely at voriconazole, monitored because of nonlinear kinetics.",
    "id": 262
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "A 47 year old man with diabetes presents with ketoacidosis, left facial pain, periorbital swelling, and a black eschar on the hard palate. Frozen section of debrided tissue shows broad, ribbon-like, sparsely septate hyphae with right-angle branching. Beyond antifungal therapy, which intervention most directly improves survival?",
    "options": {
      "A": "Placement of a lumbar drain to control rising intracranial pressure early",
      "B": "Serial serum galactomannan measurements to track the response to therapy",
      "C": "Hyperbaric oxygen therapy administered daily until the eschar fully separates",
      "D": "Urgent, repeated surgical debridement of all necrotic tissue alongside ketoacidosis reversal"
    },
    "answer": "D",
    "explanation": "Lumbar drainage addresses the intracranial hypertension of cryptococcal meningitis and has no role in an angioinvasive sinus mold infection, where the intracranial threat is direct invasion rather than fluid dynamics. Galactomannan is characteristically negative in mucormycosis because the Mucorales wall lacks the antigen, so tracking it monitors nothing. Hyperbaric oxygen is at most an unproven adjunct with no survival evidence, whereas source control through aggressive repeated debridement, paired with insulin, volume, and high-dose liposomal amphotericin, is the intervention consistently associated with living through this disease.",
    "id": 263
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "A kidney transplant recipient on tacrolimus is started on voriconazole for invasive aspergillosis. Three days later he is tremulous with a serum creatinine rising and a tacrolimus trough three times his baseline. What happened?",
    "options": {
      "A": "Voriconazole displaced tacrolimus from plasma protein binding sites transiently",
      "B": "Azole inhibition of CYP3A4 sharply reduced tacrolimus clearance, causing toxicity",
      "C": "Aspergillus-derived toxins impaired hepatic metabolism of both drugs simultaneously",
      "D": "Tacrolimus induced voriconazole accumulation through competitive renal tubular secretion"
    },
    "answer": "B",
    "explanation": "Protein binding displacement produces transient free-fraction changes that redistribute quickly and rarely triple a measured trough over days. Fungal toxins impairing hepatic metabolism is not a recognized mechanism of calcineurin inhibitor toxicity and would not selectively spare other drugs. Tacrolimus does not meaningfully alter voriconazole disposition, and voriconazole is hepatically cleared rather than dependent on renal tubular secretion; the real event is the class effect every azole shares, potent CYP3A4 inhibition, which is why transplant protocols slash tacrolimus doses preemptively when azoles start.",
    "id": 264
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "A 52 year old man from Arizona presents with two months of headache. Cerebrospinal fluid shows lymphocytic pleocytosis with 14 percent eosinophils, low glucose, and positive Coccidioides complement fixation antibody. Which statement about his treatment is correct?",
    "options": {
      "A": "Liposomal amphotericin induction for two weeks reliably permits discontinuing all therapy afterward",
      "B": "Itraconazole is preferred over fluconazole because of superior cerebrospinal fluid penetration",
      "C": "A twelve month course of fluconazole is curative when imaging normalizes completely",
      "D": "Fluconazole is first-line and must continue lifelong because relapse follows discontinuation"
    },
    "answer": "D",
    "explanation": "Amphotericin induction does not permit stopping therapy in coccidioidal meningitis, and intrathecal amphotericin is a salvage strategy for azole failure rather than a route to cure. Itraconazole penetrates cerebrospinal fluid poorly and is the wrong azole here precisely on pharmacokinetic grounds, since fluconazole's excellent central nervous system penetration is why it owns this indication. A finite twelve month course invites the relapse that defines this disease, because azoles suppress rather than eradicate Coccidioides in the meninges, and guidelines therefore commit patients to lifelong suppression with monitoring for hydrocephalus.",
    "id": 265
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "A 58 year old woman with rheumatoid arthritis on adalimumab develops three weeks of fever, weight loss, pancytopenia, and hepatosplenomegaly after cleaning an old chicken coop in Kentucky. Which test offers the fastest route to her likely diagnosis?",
    "options": {
      "A": "Fungal blood cultures held for four weeks with periodic blind subcultures",
      "B": "Serum and cerebrospinal fluid cryptococcal antigen testing with reflex titers",
      "C": "Urine Histoplasma antigen testing, most sensitive in disseminated infection",
      "D": "Serum immunodiffusion antibody testing for Blastomyces and Coccidioides species"
    },
    "answer": "C",
    "explanation": "Fungal blood cultures do grow Histoplasma in disseminated disease but require days to weeks, an unacceptable tempo in a deteriorating patient when a same-day antigen test exists. Cryptococcal antigen testing answers a different question; nothing here, from the exposure to the marrow-infiltrative picture, suggests Cryptococcus, and tumor necrosis factor blockade classically reactivates the granulomatous dimorphics. Antibody testing by immunodiffusion is both aimed at the wrong organisms geographically and epidemiologically, and antibody responses are precisely what an immunosuppressed host may fail to mount, whereas antigen detection measures the pathogen itself.",
    "id": 266
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "A 44 year old man with acute leukemia and ten days of neutropenia on posaconazole prophylaxis develops fever, sinus pain, and a pulmonary nodule with a reverse halo sign. Serum galactomannan and beta-D-glucan are both negative. What is the most likely explanation?",
    "options": {
      "A": "Breakthrough mucormycosis, which posaconazole exposure may be inadequate to prevent and biomarkers miss",
      "B": "Invasive aspergillosis producing falsely negative biomarkers because of prophylaxis effects alone",
      "C": "Pneumocystis pneumonia, since prophylaxis regimens for it were omitted during induction",
      "D": "Candidemia seeding the lungs hematogenously despite adequate mold-active azole prophylaxis"
    },
    "answer": "A",
    "explanation": "Aspergillosis with negative biomarkers is conceivable since mold-active prophylaxis lowers galactomannan sensitivity, but posaconazole covers Aspergillus reasonably well, and the reverse halo sign with sinus disease tilts strongly toward the Mucorales, which the beta-D-glucan silence supports because their cell wall largely lacks the antigen. Pneumocystis produces diffuse ground-glass pneumonia with a strongly positive beta-D-glucan, the opposite of this focal nodular picture with a negative assay. Candida rarely causes nodular pneumonia in this fashion, would usually declare itself in blood cultures, and beta-D-glucan is typically positive in invasive candidiasis.",
    "id": 267
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "A 29 year old landscaper presents with a painless nodule on the index finger that ulcerated, followed over three weeks by a chain of tender nodules ascending the forearm along lymphatic channels. Culture of a biopsy grows a dimorphic fungus. What is the preferred treatment?",
    "options": {
      "A": "Observation alone, since lymphocutaneous disease reliably resolves without any therapy",
      "B": "Itraconazole continued until two to four weeks after all lesions resolve",
      "C": "Liposomal amphotericin B for six weeks followed by lifelong fluconazole suppression",
      "D": "Saturated solution of potassium iodide as first-line therapy in all settings"
    },
    "answer": "B",
    "explanation": "Observation risks months of progressive ulceration because lymphocutaneous sporotrichosis does not reliably self-resolve, and untreated disease smolders indefinitely. Amphotericin with lifelong suppression is the posture for disseminated, pulmonary, or central nervous system sporotrichosis and for severe endemic mycoses, wildly disproportionate to uncomplicated lymphocutaneous disease in a healthy host. Potassium iodide is a historical and resource-limited alternative with gastrointestinal and thyroid toxicity, displaced as first-line by itraconazole, which cures the great majority when continued a few weeks past clinical resolution.",
    "id": 268
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "A 66 year old man with chronic lymphocytic leukemia treated with rituximab and high dose corticosteroids develops five days of rapidly worsening dyspnea. Imaging shows diffuse bilateral ground-glass opacities. Beta-D-glucan is markedly elevated; galactomannan is negative. Bronchoalveolar lavage PCR confirms the diagnosis. Compared with the same infection in HIV, his disease is characterized by which pattern?",
    "options": {
      "A": "Higher organism burden with an indolent course and lower overall mortality",
      "B": "Identical presentation and outcomes regardless of the mechanism of immunosuppression",
      "C": "Predominantly extrapulmonary involvement sparing the lungs in most affected patients",
      "D": "Fewer organisms but more inflammation, a faster course, and higher mortality"
    },
    "answer": "D",
    "explanation": "The high-burden indolent low-mortality profile describes Pneumocystis in HIV, where weeks of smoldering symptoms and massive organism loads are typical, the inverse of this fulminant five-day course. Claiming identical behavior across hosts erases the central teaching point that the inflammatory response, not the organism count, drives lung injury, and that response differs radically by immunosuppression type. Extrapulmonary pneumocystosis is a rarity historically tied to aerosolized pentamidine prophylaxis in AIDS, never the dominant pattern in non-HIV disease, which remains overwhelmingly a pneumonia.",
    "id": 269
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 27,
    "question": "An infection control team investigates three cases of azole and amphotericin resistant candidemia in a long-term acute care hospital. Isolates were initially misidentified by a biochemical system, and axillary screening swabs of contacts show skin colonization. Which organism best fits this scenario?",
    "options": {
      "A": "Candida auris, an emerging multidrug resistant species causing healthcare-associated outbreaks",
      "B": "Candida albicans, the most common bloodstream Candida species in hospitals",
      "C": "Cryptococcus neoformans spreading between patients through contaminated respiratory equipment",
      "D": "Candida krusei, defined by its intrinsic resistance to fluconazole alone"
    },
    "answer": "A",
    "explanation": "Candida albicans remains broadly susceptible to azoles and echinocandins in most settings and does not produce multidrug resistant outbreaks with environmental persistence and misidentification as its signature. Cryptococcus is acquired from the environment rather than transmitted person to person in hospitals, and skin colonization screening plays no role in its epidemiology. Candida krusei is intrinsically fluconazole resistant but generally remains susceptible to echinocandins and amphotericin, lacks the outbreak-forming skin colonization biology, and is correctly identified by standard systems, whereas every listed feature is the fingerprint of Candida auris.",
    "id": 270
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "A 34 year old man returns from Nigeria without having taken prophylaxis and presents with fever and confusion. Thin smear shows Plasmodium falciparum at 8 percent parasitemia with a glucose of 52 milligrams per deciliter. What is the best treatment?",
    "options": {
      "A": "Oral artemether-lumefantrine with antiemetics and observation in the emergency department",
      "B": "Intravenous artesunate with intensive monitoring, including delayed hemolysis screening afterward",
      "C": "Intravenous quinidine with continuous cardiac monitoring as the preferred agent",
      "D": "Oral chloroquine, since West African falciparum retains chloroquine susceptibility widely"
    },
    "answer": "B",
    "explanation": "Oral therapy has no place in severe malaria, and this patient has three severity criteria, cerebral involvement, hyperparasitemia, and hypoglycemia, any one of which mandates parenteral treatment and admission. Quinidine was the historical American answer but was withdrawn and displaced by artesunate, which reduced mortality in large randomized trials against the quinine family and lacks the arrhythmia and hypoglycemia liabilities. Chloroquine is useless here twice over: resistance is essentially universal in African falciparum, and no oral drug is acceptable for severe disease regardless of susceptibility.",
    "id": 271
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "A 41 year old woman from El Salvador, asymptomatic, is found to have a right bundle branch block on a preoperative electrocardiogram. Her sister was recently diagnosed with Chagas cardiomyopathy. What is the appropriate diagnostic approach?",
    "options": {
      "A": "A single rapid Trypanosoma cruzi antigen test performed on whole blood",
      "B": "Blood smear microscopy for circulating trypomastigotes during febrile episodes",
      "C": "Endomyocardial biopsy to demonstrate amastigotes within cardiac myocytes directly",
      "D": "Two different Trypanosoma cruzi serologic assays, with a third to adjudicate discordance"
    },
    "answer": "D",
    "explanation": "No single test carries sufficient accuracy for chronic Chagas disease, which is why guidelines require concordant results on two serologic assays using different antigens or formats before the diagnosis stands. Blood smears detect the parasitemia of acute infection, but decades into chronic infection circulating trypomastigotes are too scarce for microscopy, and she has no febrile acute illness. Endomyocardial biopsy is invasive, insensitive because cardiac amastigote nests are focal, and unnecessary when serology answers the question without risk.",
    "id": 272
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "A 62 year old man from rural Vietnam, in the United States for 30 years, is scheduled to start high dose prednisone for a new diagnosis of minimal change disease. His absolute eosinophil count is 700 cells per microliter. Which step prevents the most dangerous complication?",
    "options": {
      "A": "Strongyloides serology now, with ivermectin treatment or empiric ivermectin before steroids",
      "B": "Stool ova and parasite examinations weekly during the first month of prednisone",
      "C": "Prophylactic albendazole daily throughout the entire duration of corticosteroid therapy",
      "D": "Trimethoprim-sulfamethoxazole prophylaxis, which also covers intestinal helminths adequately"
    },
    "answer": "A",
    "explanation": "Waiting to survey stools during steroid therapy hands the parasite its window, since single stool examinations miss more than half of chronic infections and hyperinfection can be established before serial studies turn positive. Albendazole is distinctly inferior to ivermectin for Strongyloides and daily use throughout steroids substitutes a weak drug for a definitive pre-treatment strategy. Trimethoprim-sulfamethoxazole is the right prophylaxis for Pneumocystis in prolonged high-dose steroids but has no antihelminthic activity at all, so it leaves the one lethal steroid-triggered parasite completely unaddressed.",
    "id": 273
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "Three college students develop fever, urticaria, dry cough, and eosinophil counts above 4,000 per microliter six weeks after swimming in Lake Malawi. Stool and urine microscopy are negative; schistosome serology is positive in one. What best explains the negative egg studies?",
    "options": {
      "A": "The exposure was too brief for any cercariae to have penetrated skin",
      "B": "Eggs are only detectable in tissue biopsies, never in stool or urine",
      "C": "Worms have not yet matured to egg production during this acute syndrome",
      "D": "Prior praziquantel in the drinking water suppressed egg release temporarily"
    },
    "answer": "C",
    "explanation": "Cercarial penetration takes minutes, and the syndrome itself, Katayama fever, proves infection occurred, so a too-brief exposure contradicts the presentation. Chronic schistosomiasis is routinely diagnosed by finding eggs in stool or urine, so restricting eggs to tissue diagnosis is simply false. Praziquantel in drinking water is not a real exposure, and the actual lesson is temporal: acute schistosomiasis is a hypersensitivity response to maturing worms four to eight weeks after infection, before oviposition begins, which is why serology and repeat egg studies weeks later, not initial microscopy, secure the diagnosis.",
    "id": 274
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "A 28 year old woman with well controlled epilepsy emigrated from rural Guatemala. Imaging for worsening seizures shows three parenchymal brain cysts, each with an eccentric scolex, and one enhancing degenerating lesion. Alongside antiepileptics, what is the best treatment plan?",
    "options": {
      "A": "Praziquantel alone at high dose, avoiding albendazole because of hepatotoxicity concerns",
      "B": "Albendazole with corticosteroids started before antiparasitic therapy, screening first for latent tuberculosis and Strongyloides",
      "C": "Immediate neurosurgical excision of all visible cysts before any drug therapy",
      "D": "Antiepileptic drugs alone, since antiparasitic treatment never changes seizure outcomes"
    },
    "answer": "B",
    "explanation": "Praziquantel monotherapy is inferior to albendazole for parenchymal neurocysticercosis, and the stated hepatotoxicity rationale is backwards since albendazole is the preferred agent with monitoring. Surgery is reserved for intraventricular, subarachnoid, or hydrocephalus-producing disease, not uncomplicated parenchymal cysts that drugs treat well. Withholding antiparasitics entirely misreads the evidence, because randomized data show albendazole hastens cyst resolution and reduces seizure recurrence in viable parenchymal disease; the steroids are given first because dying cysts provoke the very inflammation that causes deterioration, and screening prevents steroid-triggered tuberculosis and Strongyloides catastrophes.",
    "id": 275
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "A 45 year old aid worker will spend two years in a Central African region endemic for onchocerciasis and Loa loa. Before community ivermectin treatment, programs in this region quantify Loa loa microfilaremia. Why?",
    "options": {
      "A": "Loa loa infection renders ivermectin pharmacologically inactive through enzymatic degradation",
      "B": "High Loa loa microfilarial loads increase the risk of ivermectin-associated fatal encephalopathy",
      "C": "Ivermectin cures loiasis so rapidly that Calabar swellings become permanently disfiguring",
      "D": "Loa loa coinfection converts onchocerciasis into a corticosteroid-refractory ocular disease"
    },
    "answer": "B",
    "explanation": "No enzymatic inactivation of ivermectin by Loa is described; the drug remains fully active, which is precisely the problem, since massive simultaneous microfilarial killing in heavily infected patients precipitates an encephalopathy with coma and death. The claim about rapid cure causing disfigurement inverts pharmacology, as ivermectin does not cure loiasis quickly and Calabar swellings are transient migratory angioedema rather than permanent lesions. The corticosteroid-refractory ocular disease claim is invented; the documented and program-defining hazard is neurologic, which is why mapping and load quantification precede mass drug administration in co-endemic zones.",
    "id": 276
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "A 23 year old man presents with two weeks of greasy, foul-smelling stools, bloating, and sulfurous belching after a backpacking trip with stream water consumption. Stool PCR confirms the diagnosis and he is cured with tinidazole, but milk products still trigger bloating a month later. What explains the persistent symptoms?",
    "options": {
      "A": "Secondary lactase deficiency from duodenal mucosal injury that outlasts parasite eradication",
      "B": "Treatment failure, since tinidazole resistance now exceeds half of isolates",
      "C": "Coinfection with Entamoeba histolytica missed by the initial molecular testing",
      "D": "Post-infectious celiac disease permanently unmasked by the parasitic infection"
    },
    "answer": "A",
    "explanation": "Tinidazole failure occurs but not at anything approaching half of cases, and true refractory giardiasis presents with continued diarrhea and positive repeat testing rather than isolated dairy intolerance after documented cure. Entamoeba causes colitis with bloody stools and would neither explain lactose-specific symptoms nor evade a multiplex molecular panel that includes it. Celiac disease is a genetically driven gluten enteropathy, not a dairy problem, and while infections are discussed as potential triggers, the common, transient, and lactose-specific phenomenon after giardiasis is brush border lactase loss that regenerates over weeks to months.",
    "id": 277
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "A 36 year old previously healthy man develops fever, severe headache, and vomiting three days after wakeboarding on a warm Texas lake in August. Within a day he is comatose. Cerebrospinal fluid is purulent with 2,400 neutrophils, glucose of 18, and no bacteria on Gram stain; a wet mount shows motile trophozoites. What is the diagnosis?",
    "options": {
      "A": "Acanthamoeba granulomatous encephalitis progressing over its usual subacute course",
      "B": "Eosinophilic meningitis from Angiostrongylus acquired through contaminated lake water",
      "C": "Primary amebic meningoencephalitis caused by Naegleria fowleri entering through the cribriform plate",
      "D": "Fulminant leptospiral meningitis contracted through mucosal contact with lake water"
    },
    "answer": "C",
    "explanation": "Acanthamoeba causes granulomatous encephalitis over weeks to months in immunocompromised hosts, nothing like this hyperacute purulent course in a healthy young man with recreational warm freshwater up the nose. Angiostrongylus produces an eosinophilic, not neutrophilic, pleocytosis and is acquired by eating infected snails or contaminated produce, not by swimming. Leptospirosis from freshwater is a genuine consideration, but it causes aseptic meningitis with systemic features such as conjunctival suffusion and transaminitis, and no spirochete would appear as motile trophozoites on a warm wet mount, which is the signature bedside finding of Naegleria.",
    "id": 278
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "A 31 year old woman plans a three week trip to rural South Asia. She is healthy and G6PD normal. Which pre-travel package is most appropriate?",
    "options": {
      "A": "Hepatitis A and typhoid vaccination, malaria chemoprophylaxis matched to itinerary, azithromycin for standby diarrhea treatment",
      "B": "Yellow fever vaccination, mefloquine regardless of itinerary, and ciprofloxacin for standby diarrhea treatment",
      "C": "Rabies immunoglobulin preexposure, cholera vaccination, and weekly chloroquine chemoprophylaxis throughout travel",
      "D": "No vaccinations, since a three week trip carries negligible infection risk overall"
    },
    "answer": "A",
    "explanation": "Yellow fever does not exist in Asia, so vaccinating for it adds live-vaccine risk without benefit, mefloquine chosen without itinerary review ignores both resistance mapping and its neuropsychiatric screening, and ciprofloxacin is a poor standby choice for South Asia given widespread fluoroquinolone-resistant Campylobacter and Salmonella. Preexposure rabies protection uses vaccine, never immunoglobulin, cholera vaccination is a niche recommendation, and chloroquine is ineffective in South Asian malaria. Declining all preparation misjudges South Asia's typhoid and hepatitis A risk, which concentrate exactly in such itineraries and are efficiently vaccine-preventable.",
    "id": 279
  },
  {
    "domain": "viral_fungal_parasitic",
    "chapter": 28,
    "question": "A 47 year old man who emigrated from Mexico presents with two weeks of fever and right upper quadrant pain three months after his last visit home. Imaging shows a single 7 centimeter right hepatic lobe abscess. Entamoeba histolytica serology is strongly positive. He improves on metronidazole. What must follow to complete his treatment?",
    "options": {
      "A": "Percutaneous drainage of the abscess cavity regardless of his clinical response",
      "B": "A prolonged course of ceftriaxone to sterilize presumed bacterial coinfection",
      "C": "Repeat serologic testing monthly until the antibody titer becomes fully undetectable",
      "D": "A luminal agent such as paromomycin to eradicate persistent intestinal cyst carriage"
    },
    "answer": "D",
    "explanation": "Drainage of an amebic liver abscess is reserved for threatened rupture, left lobe lesions endangering the pericardium, failure to respond, or diagnostic doubt, and a patient improving on metronidazole needs no needle. Routine antibacterial therapy treats pyogenic abscesses, whereas amebic abscess contents are typically sterile and his serology and response already identify the ameba. Serial serology is uninformative for cure because antibodies persist for years after treated infection; the genuine gap after tissue-active therapy is the intestinal lumen, where metronidazole fails to eliminate cysts, and without paromomycin the patient can relapse or transmit.",
    "id": 280
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "A 34-year-old woman with MSSA tricuspid endocarditis and septic pulmonary emboli has anaphylaxis to penicillin documented by prior testing. Blood cultures remain positive on vancomycin. Which change is most appropriate?",
    "options": {
      "A": "Begin daptomycin at 8 mg/kg daily, since embolic lung lesions are not surfactant-exposed alveolar disease",
      "B": "Begin high-dose ceftriaxone, because third-generation cephalosporins never cross-react with penicillins",
      "C": "Continue vancomycin while targeting higher trough concentrations and add gentamicin for durable bactericidal synergy against the staphylococcus",
      "D": "Switch therapy to oral linezolid to bypass the intravenous allergy risk entirely"
    },
    "answer": "A",
    "explanation": "Ceftriaxone is a reasonable class to consider after allergy evaluation, but the claim that cross-reactivity never occurs is false; risk tracks shared side chains and is low, not zero, and ceftriaxone is also inferior to antistaphylococcal therapy for MSSA endocarditis. Pushing vancomycin exposure higher with added gentamicin reflects an abandoned practice: aminoglycoside synergy for staphylococcal native-valve disease adds nephrotoxicity without survival benefit, and vancomycin is already underperforming. Oral linezolid is bacteriostatic against staphylococci, has no endocarditis indication, and its myelosuppression makes a 6-week course hazardous. Daptomycin is rapidly bactericidal, approved for right-sided S. aureus endocarditis, and remains active in embolic vascular lung lesions because surfactant inactivation applies to alveolar pneumonia, not hematogenous emboli.",
    "id": 281
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "A 71-year-old man on lisinopril and spironolactone receives high-dose trimethoprim-sulfamethoxazole for Stenotrophomonas pneumonia. On day 4 his potassium is 6.3 mEq/L and creatinine has risen from 1.0 to 1.3 mg/dL. What best explains the potassium?",
    "options": {
      "A": "Sulfamethoxazole-induced acute interstitial nephritis reducing glomerular filtration and potassium excretion together",
      "B": "Rhabdomyolysis from a sulfonamide myotoxicity releasing intracellular potassium into plasma",
      "C": "Tumor lysis physiology from rapid killing of a high bacterial burden",
      "D": "Trimethoprim blocking the distal nephron epithelial sodium channel, an amiloride-like effect"
    },
    "answer": "D",
    "explanation": "Interstitial nephritis is a real sulfonamide complication but typically appears later with pyuria and a true GFR fall, whereas this small creatinine bump matches trimethoprim's benign inhibition of tubular creatinine secretion. Muscle breakdown is not a recognized mechanism of this drug and would show CPK elevation and pigmenturia. Bacterial lysis does not release clinically meaningful potassium loads even in dense pneumonia. Trimethoprim is structurally an amiloride-like cation that blocks ENaC, impairing potassium secretion, and the effect is amplified by ACE inhibitors and mineralocorticoid antagonists exactly as in this patient.",
    "id": 282
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "A hospital converts vancomycin monitoring from trough targets of 15 to 20 mg/L to Bayesian AUC-guided dosing for serious MRSA infections. Which outcome does the supporting evidence most strongly predict?",
    "options": {
      "A": "Less nephrotoxicity at equivalent efficacy, because many patients reach AUC 400 to 600 with troughs below 15",
      "B": "Higher cure rates driven by substantially higher average vancomycin exposure across all treated patients",
      "C": "Elimination of the need for any serum level measurement during therapy",
      "D": "Reliable coverage of MRSA isolates with vancomycin MIC values of 4 mg/L or greater"
    },
    "answer": "A",
    "explanation": "The premise of higher cure through uniformly higher exposure is backwards; AUC guidance mostly lowers exposure in patients whom trough targeting overdosed, holding efficacy steady. Abandoning levels misreads the method, since Bayesian dosing still requires one or two measured concentrations to individualize the model. Treating isolates at MIC 4 mg/L is unattainable because the required AUC would be frankly nephrotoxic; such isolates are vancomycin-intermediate and demand alternative agents. The genuine payoff, shown in pre-post and cohort studies, is that AUC targets of 400 to 600 are often satisfied at troughs of 10 to 15, trimming toxic exposure without sacrificing outcome.",
    "id": 283
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "A 58-year-old woman develops Enterobacter cloacae bacteremia from a urinary source. The isolate tests susceptible to ceftriaxone. Five days into ceftriaxone therapy she deteriorates and repeat cultures grow the same organism, now ceftriaxone-resistant. What happened?",
    "options": {
      "A": "Plasmid acquisition of a KPC carbapenemase during therapy transformed the isolate's resistance profile",
      "B": "Porin loss developed under treatment, excluding all beta-lactams from the periplasmic space",
      "C": "Selection of mutants with stably derepressed chromosomal AmpC beta-lactamase during third-generation cephalosporin exposure",
      "D": "Inducible erm methylase activation, the mechanism the double-disk D-test is designed to reveal"
    },
    "answer": "C",
    "explanation": "Acquiring a carbapenemase plasmid mid-course is possible in principle but rare on this timescale and would confer carbapenem resistance, which is not described. Porin loss alone rarely defeats every beta-lactam and is not the classic Enterobacter story. The D-test and erm methylases belong to staphylococcal and streptococcal macrolide-lincosamide biology, not gram-negative cephalosporin failure. Enterobacter cloacae complex carries an inducible chromosomal AmpC; third-generation cephalosporins select preexisting derepressed mutants in roughly one in five serious infections treated this way, which is why cefepime or a carbapenem is preferred despite initial susceptibility.",
    "id": 284
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "A 45-year-old man begins outpatient daptomycin for VRE osteomyelitis. He takes atorvastatin and sertraline. Which monitoring and counseling plan is correct?",
    "options": {
      "A": "Weekly transaminase monitoring, and stop sertraline immediately today because of the serotonin syndrome risk posed by daptomycin therapy",
      "B": "Weekly creatine phosphokinase, hold or pause the statin if feasible, and report new muscle pain promptly",
      "C": "Weekly platelet counts and visual symptom review, the established oxazolidinone surveillance package",
      "D": "Twice-weekly vancomycin-style serum levels to keep the daptomycin AUC inside its target range"
    },
    "answer": "B",
    "explanation": "Transaminase surveillance and serotonergic concern belong to other drugs; serotonin syndrome is linezolid's MAO-inhibition liability, not daptomycin's, so sertraline may continue. Platelet counts and optic neuropathy screening are likewise the linezolid package, mentioned here to test whether the two anti-VRE agents are kept distinct. Routine daptomycin serum levels are not standard practice; dosing is weight-based without a monitoring assay in ordinary use. The real toxicity is skeletal muscle injury, so baseline and weekly CPK, statin interruption when practical, and symptom-triggered evaluation are the standard of care.",
    "id": 285
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "A 29-year-old pregnant woman at 30 weeks has acute pyelonephritis with E. coli bacteremia. Which drug choice best combines efficacy and fetal safety?",
    "options": {
      "A": "Intravenous ceftriaxone now, completing therapy with an oral beta-lactam guided by susceptibilities",
      "B": "Oral ciprofloxacin for the full course, chosen for its superior urinary penetration and complete oral bioavailability",
      "C": "Once-daily gentamicin monotherapy continued for a complete fourteen-day treatment course",
      "D": "Doxycycline orally, exploiting its reliable activity against community urinary isolates"
    },
    "answer": "A",
    "explanation": "Fluoroquinolones are avoided in pregnancy because of cartilage toxicity signals in developing animals and the availability of safer choices, whatever their urinary levels. A full two-week aminoglycoside course imposes avoidable fetal ototoxicity risk; aminoglycosides are reserved, brief, and level-monitored in pregnancy rather than used as prolonged monotherapy. Tetracyclines deposit in fetal teeth and bone and are contraindicated in the second and third trimesters, and doxycycline is unreliable for pyelonephritis anyway. Beta-lactams have decades of pregnancy safety, ceftriaxone covers typical uropathogens well, and intravenous-to-oral completion is standard for pyelonephritis with bacteremia.",
    "id": 286
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "An ICU patient with septic shock from Pseudomonas pneumonia (piperacillin-tazobactam MIC at the susceptibility breakpoint) has measured creatinine clearance of 160 mL/min. Which adjustment best addresses the pharmacologic problem?",
    "options": {
      "A": "Change to once-daily ertapenem to simplify dosing while broadening gram-negative coverage",
      "B": "Add inhaled tobramycin so that alveolar drug delivery compensates for any serum shortfall",
      "C": "Reduce the piperacillin-tazobactam dose, since hyperfiltration signals early kidney injury requiring caution",
      "D": "Give piperacillin-tazobactam as an extended 4-hour infusion at full dose to raise time above MIC"
    },
    "answer": "D",
    "explanation": "Ertapenem has no Pseudomonas activity, so simplifying the schedule with it abandons the pathogen entirely. Inhaled aminoglycosides are adjuncts with unproven mortality benefit and do not fix systemic underexposure in bacteremia-prone shock. Reducing the dose misreads augmented renal clearance, which is enhanced elimination in hyperdynamic sepsis, not injury, and would deepen the underexposure. With a borderline MIC and rapid clearance, the failing index is fT>MIC, and prolonging the infusion at full dose is the direct, evidence-supported correction.",
    "id": 287
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "A 62-year-old woman on citalopram and amiodarone needs treatment for Legionella pneumonia. Which regimen decision is best?",
    "options": {
      "A": "Azithromycin at standard dose, since its tissue concentration makes cardiac effects irrelevant",
      "B": "High-dose clarithromycin instead, preferred because it entirely avoids the cardiac QT liability that azithromycin carries",
      "C": "Levofloxacin with baseline and follow-up ECG, accepting a managed QT risk with monitoring",
      "D": "Doxycycline plus rifampin, the guideline-preferred first-line combination for legionellosis"
    },
    "answer": "C",
    "explanation": "Azithromycin's tissue accumulation does not neutralize its QT effect, and layering it on amiodarone plus an SSRI in this patient stacks three prolonging influences. Clarithromycin prolongs QT at least as much and adds potent CYP3A4 inhibition against amiodarone metabolism, making it the worse macrolide here. Doxycycline-rifampin is not a preferred Legionella regimen; tetracyclines are second-line and rifampin adds interactions without proven benefit. A respiratory fluoroquinolone treats Legionella excellently, and while quinolones also prolong QT, levofloxacin's effect is modest and manageable with ECG surveillance, making it the best of the imperfect options.",
    "id": 288
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "A 55-year-old man with ESBL Klebsiella pneumoniae osteomyelitis is planned for outpatient therapy. He lives 90 minutes from the infusion center. Which regimen best fits OPAT logistics and the organism?",
    "options": {
      "A": "Meropenem every 8 hours at home via a programmable continuous-infusion ambulatory pump",
      "B": "Once-daily ertapenem, with weekly labs, exploiting high protein binding for its long interval",
      "C": "Oral fosfomycin sachets three times weekly, given its excellent bone penetration profile",
      "D": "Once-daily ceftriaxone at the infusion center, since ESBL production spares ceftriaxone activity"
    },
    "answer": "B",
    "explanation": "Home meropenem by ambulatory pump is feasible but adds complexity, cost, and unnecessary antipseudomonal breadth when a narrower carbapenem suffices. Fosfomycin's clinical role is single-dose therapy of uncomplicated cystitis; serum and bone exposure from oral sachets is inadequate for osteomyelitis. Ceftriaxone is precisely what ESBL enzymes hydrolyze, so susceptibility cannot be assumed and the choice contradicts the resistance mechanism. Ertapenem is the textbook OPAT answer for ESBL organisms: stable to the enzyme, inactive against nothing this patient needs, and dosed once daily because protein binding stretches its half-life.",
    "id": 289
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 29,
    "question": "A previously healthy 24-year-old woman develops profound bilateral hearing loss after two doses of gentamicin for pyelonephritis. Her mother lost hearing after surgical prophylaxis years earlier. Which mechanism explains this family's vulnerability?",
    "options": {
      "A": "An autosomal dominant mutation in a renal drug transporter causing sustained toxic serum aminoglycoside levels across generations",
      "B": "Class effect of concentration-dependent killing, since high peaks injure everyone's cochlea equally",
      "C": "Undiagnosed Alport syndrome making the cochlea structurally fragile to any insult",
      "D": "Maternally inherited m.1555A>G variant making mitochondrial 12S rRNA bind aminoglycosides like a bacterial ribosome"
    },
    "answer": "D",
    "explanation": "A transporter defect raising serum levels would produce nephrotoxicity alongside deafness and would not follow a strictly maternal line. Normal peak concentrations do not injure everyone's cochlea after two doses; ordinary ototoxicity requires cumulative exposure, so a universal class effect cannot explain this severity or timing. Alport syndrome causes sensorineural loss through collagen IV defects with hematuria and renal disease, none of which is described, and it does not confer single-dose drug sensitivity. Maternal transmission plus catastrophic loss after minimal exposure is the signature of the mitochondrial MT-RNR1 m.1555A>G variant, which makes human 12S rRNA resemble the bacterial 16S target.",
    "id": 290
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "A 66-year-old man in the ICU develops Klebsiella pneumoniae bacteremia. The isolate is meropenem-resistant, and a lateral-flow assay detects NDM. Which regimen is most appropriate?",
    "options": {
      "A": "Meropenem-vaborbactam at high dose, since vaborbactam restores carbapenem activity against carbapenemases",
      "B": "Ceftazidime-avibactam as a single agent, the standard for carbapenem-resistant Enterobacterales",
      "C": "Ceftazidime-avibactam combined with aztreonam, or cefiderocol as an alternative single agent",
      "D": "Extended-infusion piperacillin-tazobactam with amikacin for double gram-negative coverage"
    },
    "answer": "C",
    "explanation": "Vaborbactam is a boronate inhibitor of serine enzymes like KPC and has no activity against zinc-dependent metallo-enzymes, so restoring meropenem is impossible here. Ceftazidime-avibactam alone fails for the same reason; avibactam does not inhibit NDM, and ceftazidime is hydrolyzed. Piperacillin-tazobactam with an aminoglycoside ignores the carbapenemase entirely and was inferior even for ESBL bacteremia in randomized comparison. NDM spares aztreonam, but co-carried serine enzymes usually destroy it; adding avibactam to neutralize those enzymes frees aztreonam to work, and cefiderocol enters via iron transporters and survives metallo-hydrolysis, making those the two mechanism-correct options.",
    "id": 291
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "A stewardship program must choose its first major intervention. The committee wants preserved prescriber autonomy, case-based education, and evidence for reduced inappropriate use. Which intervention fits best?",
    "options": {
      "A": "Prospective audit and feedback on active prescriptions at 48 to 72 hours",
      "B": "Preauthorization requirements covering every intravenous antibiotic in the formulary",
      "C": "Annual mandatory online modules covering the hospital's empiric therapy guidelines",
      "D": "Automatic 72-hour stop orders applied to all antimicrobials without exception"
    },
    "answer": "A",
    "explanation": "Preauthorization of every intravenous agent is operationally unworkable, delays first doses in sepsis, and concentrates its evidence on restricted high-value agents rather than blanket use. Education alone changes prescribing weakly and briefly and is explicitly insufficient as a standalone strategy in the CDC framework. Universal automatic stops without clinician review interrupt appropriate therapy and have caused missed doses in practice, so they are a safety hazard rather than a core strategy. Audit with feedback, performed once cultures have matured, is one of the two foundational evidence-based interventions and uniquely combines autonomy preservation with continuous case-based teaching.",
    "id": 292
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "A 74-year-old woman completes day 4 of ceftriaxone for E. coli bacteremia from pyelonephritis. She defervesced on day 2, source imaging is clean, and she eats normally. Which plan reflects current evidence?",
    "options": {
      "A": "Continue intravenous therapy for 14 total days, the traditional standard for bloodstream infection",
      "B": "Repeat blood cultures daily and treat until 7 days after the last negative set",
      "C": "Place a PICC line for home ceftriaxone to complete a 10-day intravenous course",
      "D": "Switch to an appropriate oral agent by susceptibilities and stop at 7 total days"
    },
    "answer": "D",
    "explanation": "Fourteen intravenous days reflects tradition rather than trial data; randomized studies of uncomplicated gram-negative bacteremia showed 7 days matched 14 for mortality and relapse. Serial daily blood cultures are not indicated in gram-negative bacteremia with prompt clinical response, unlike S. aureus, so anchoring duration to them manufactures both cost and days. A PICC for 10 intravenous days ignores oral bioavailability evidence and adds line risk for no benefit. Oral step-down in a stable, source-controlled patient with a susceptible organism, stopping at 7 days, is the regimen the trials actually tested.",
    "id": 293
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "Blood cultures from a septic leukemia patient flag positive with gram-positive cocci in clusters. A rapid molecular panel detects Staphylococcus aureus without mecA. The patient is on vancomycin and cefepime. What is the best immediate action?",
    "options": {
      "A": "Continue both agents unchanged until final susceptibilities return in 48 hours",
      "B": "Stop vancomycin and begin cefazolin or an antistaphylococcal penicillin now",
      "C": "Add daptomycin, since molecular tests cannot exclude heteroresistant staphylococcal subpopulations",
      "D": "Narrow cefepime to ceftriaxone while continuing vancomycin for the staphylococcus"
    },
    "answer": "B",
    "explanation": "Waiting 2 days for phenotypic confirmation forfeits the entire outcome benefit of rapid diagnostics, which accrues only when results change therapy in real time. Adding daptomycin treats a phenomenon, heteroresistance, that mecA-negative results do not meaningfully predict, and doubles gram-positive coverage without indication. Swapping cefepime for ceftriaxone addresses the wrong drug and keeps vancomycin, which is inferior to beta-lactams for methicillin-susceptible S. aureus bacteremia. The mecA-negative result predicts methicillin susceptibility with high accuracy, and immediate transition to cefazolin or nafcillin is precisely the acted-upon-diagnostics practice that improved outcomes in implementation studies.",
    "id": 294
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "An infection preventionist reviews a cluster of carbapenem-resistant Klebsiella cases. Isolates carry identical blaKPC plasmids, yet the strains differ by sequence typing across three species, including E. coli and Enterobacter. What does this pattern indicate?",
    "options": {
      "A": "Independent chromosomal mutations arising under shared carbapenem selective pressure",
      "B": "Laboratory contamination producing false clustering across unrelated patient specimens",
      "C": "A common environmental source repeatedly introducing one clonal outbreak strain",
      "D": "Horizontal plasmid transfer spreading one resistance element across multiple species"
    },
    "answer": "D",
    "explanation": "Independent chromosomal mutation cannot explain an identical mobile element appearing across genera, since convergent evolution does not reproduce a plasmid's full sequence. Contamination would replicate a single organism across specimens, not distinct species sharing one plasmid. A clonal outbreak from an environmental reservoir predicts one strain in many patients, but here strain types differ while the plasmid is conserved, the opposite signature. Identical blaKPC plasmids riding through different species and sequence types is the classic fingerprint of conjugative horizontal transfer, the mechanism that makes carbapenemase epidemiology a story about genes, not just organisms.",
    "id": 295
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "A 58-year-old woman reports a penicillin allergy: a rash at age 6, details unknown. She needs surgical prophylaxis and has had multiple fluoroquinolone and clindamycin courses with a prior C. difficile episode. Which approach is best?",
    "options": {
      "A": "Structured allergy assessment now, with direct oral amoxicillin challenge if the history is low risk",
      "B": "Lifelong beta-lactam avoidance, documenting vancomycin as her standing surgical prophylaxis agent",
      "C": "Empiric graded penicillin desensitization admission before any future beta-lactam exposure",
      "D": "Clindamycin prophylaxis, since it avoids both beta-lactams and her quinolone exposure history"
    },
    "answer": "A",
    "explanation": "Permanent avoidance with vancomycin prophylaxis institutionalizes a label that is false in over 9 of 10 such patients and measurably raises surgical infection risk. Desensitization is reserved for confirmed IgE-mediated allergy when the drug is indispensable; it induces temporary tolerance and is not an evaluation strategy for a vague childhood rash. Clindamycin re-exposes a patient with prior C. difficile to one of the highest-risk agents for recurrence, compounding harm. A structured history followed by direct oral challenge for low-risk patients is the validated delabeling pathway, restores cefazolin (the superior prophylaxis agent), and is itself a recognized stewardship intervention.",
    "id": 296
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "A hospital compares its antimicrobial consumption to national data. Its pediatric and dialysis populations are large. Which metric choice is most appropriate and why?",
    "options": {
      "A": "Defined daily doses per 1,000 patient-days, because WHO methodology enables the fairest benchmarking",
      "B": "Total grams dispensed per year, the least manipulable raw measure of consumption",
      "C": "Days of therapy per 1,000 days present, because DOT is unaffected by dose reductions",
      "D": "Antibiotic spending per admission, since cost integrates both usage volume and agent selection"
    },
    "answer": "C",
    "explanation": "DDD methodology divides dispensed grams by standard adult doses, so children and dose-reduced dialysis patients register as fractions of a treatment day, systematically distorting exactly this hospital's populations. Raw grams have the same flaw magnified, treating a gram of gentamicin and a gram of ceftriaxone as equivalent while ignoring patient volume. Spending tracks purchasing contracts and drug price shocks more than prescribing behavior, so it cannot benchmark stewardship. Days of therapy counts each agent-day regardless of dose, remains valid across ages and renal function, and feeds the NHSN risk-adjusted SAAR, making it the appropriate national comparison metric.",
    "id": 297
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "A 45-year-old man with septic arthritis grows methicillin-susceptible S. aureus that tests erythromycin-resistant and clindamycin-susceptible. The lab reports a positive D-test. If clindamycin were used for oral step-down, what failure mechanism threatens?",
    "options": {
      "A": "Efflux pump upregulation expelling clindamycin from the staphylococcal cytoplasm during therapy",
      "B": "Induction of erm-mediated ribosomal methylation producing clindamycin resistance on treatment",
      "C": "Beta-lactamase hyperproduction inactivating clindamycin alongside penicillins in the joint space",
      "D": "Biofilm tolerance in synovium rendering all protein synthesis inhibitors ineffective"
    },
    "answer": "B",
    "explanation": "An efflux mechanism (msrA) does cause erythromycin resistance with true clindamycin susceptibility, but that phenotype produces a negative D-test, which is exactly what the test exists to distinguish. Beta-lactamases hydrolyze beta-lactam rings and have no chemistry against a lincosamide. Biofilm tolerance is a consideration for retained hardware, not native joint infection after washout, and it does not selectively doom protein synthesis inhibitors. The flattened zone of the D-test reveals an inducible erm methylase; erythromycin exposure demonstrates in vitro what clindamycin monotherapy would select in vivo, constitutive methylation of the shared 50S target and clinical relapse.",
    "id": 298
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "Which statement about Candida auris infection control is correct?",
    "options": {
      "A": "Standard precautions suffice because Candida species do not persist on dry hospital surfaces",
      "B": "Routine biochemical identification systems reliably distinguish C. auris from other Candida species",
      "C": "Echinocandin resistance is nearly universal, so azoles are the empiric drugs of choice",
      "D": "Patients require contact precautions, and rooms need disinfectants with proven efficacy against it"
    },
    "answer": "D",
    "explanation": "The claim that Candida cannot persist on dry surfaces is exactly backwards for this species, which survives on environmental surfaces for weeks and has caused durable unit-level outbreaks. Older biochemical platforms notoriously misidentify C. auris as Candida haemulonii and related species, so relying on them delays recognition; MALDI-TOF or molecular methods are needed. The resistance pattern is also inverted: azole resistance approaches 90 percent while echinocandins remain first-line empiric therapy. What is true is the MDRO-style control package, contact precautions, colonization screening of contacts, and cleaning with agents on the EPA list proven active against C. auris, since standard quaternary ammonium products underperform.",
    "id": 299
  },
  {
    "domain": "antimicrobial_therapy",
    "chapter": 30,
    "question": "A 24-year-old man is treated for urethral gonorrhea. Which regimen reflects current United States recommendations?",
    "options": {
      "A": "Ceftriaxone 500 mg intramuscularly once, with doxycycline added only if chlamydia is not excluded",
      "B": "Ceftriaxone 250 mg intramuscularly plus single-dose azithromycin for dual-mechanism coverage",
      "C": "Oral ciprofloxacin for seven days, adequate for isolates confirmed susceptible by culture",
      "D": "Single-dose oral cefixime as first-line therapy equivalent to intramuscular ceftriaxone"
    },
    "answer": "A",
    "explanation": "The 250 mg dose with azithromycin describes the pre-2020 regimen; the CDC raised ceftriaxone to 500 mg and dropped azithromycin because macrolide resistance exceeded 4 percent while the theoretical resistance-prevention benefit never materialized. Ciprofloxacin lost first-line status in 2007, and even susceptibility-guided quinolone therapy is an alternative pathway rather than a recommended default for empiric treatment. Cefixime achieves lower, less sustained levels than intramuscular ceftriaxone and is a documented stepping-stone to cephalosporin resistance, so it is reserved for when ceftriaxone is unavailable. Current guidance is ceftriaxone 500 mg once (1 g at 150 kg or more), adding doxycycline solely for chlamydial coverage when coinfection is untested or present.",
    "id": 300
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "A 34-year-old nurse sustains a hollow-bore needlestick from a patient with untreated HIV and a viral load of 85,000 copies/mL. Which statement about her management is correct?",
    "options": {
      "A": "Post-exposure prophylaxis can be deferred until source genotype resistance testing returns",
      "B": "Her transmission risk without prophylaxis is roughly 3 percent, warranting two-drug therapy",
      "C": "Zidovudine monotherapy for 4 weeks remains the validated standard regimen",
      "D": "Begin a three-drug regimen within hours and continue it for 28 days"
    },
    "answer": "D",
    "explanation": "Waiting for resistance data sacrifices the intervention's entire mechanism, since prophylaxis works by suppressing replication before infection establishes, and regimens active against most transmitted virus can start immediately. The 3 percent figure inflates the true percutaneous risk tenfold; it is approximately 0.3 percent, and current guidance uses three drugs regardless of risk tier. Zidovudine alone is historical; it was the regimen in the case-control study showing an 81 percent risk reduction, but modern integrase-inhibitor-based three-drug therapy is better tolerated and standard. Prompt initiation, ideally within hours and no later than 72, with a 28-day three-drug course, is the correct package.",
    "id": 301
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "A hospital's terminal cleaning audit shows that prior room occupancy by a VRE-colonized patient doubles the next occupant's VRE acquisition risk. Which intervention most directly addresses this specific finding?",
    "options": {
      "A": "Reinforce hand hygiene compliance among clinical staff on the affected units",
      "B": "Add objective cleaning verification with fluorescent markers plus a no-touch disinfection adjunct",
      "C": "Expand VRE contact precautions to include all roommates of colonized patients",
      "D": "Begin universal daily chlorhexidine bathing on every inpatient unit"
    },
    "answer": "B",
    "explanation": "Hand hygiene is always worth reinforcing but cannot neutralize a contaminated environment that recontaminates hands after every cleaning-to-admission interval, which is the mechanism this audit isolated. Broadening precautions to roommates addresses person-to-person spread, not the empty-room reservoir that persists after the colonized patient leaves. Universal chlorhexidine bathing reduces patients' skin bioburden and bloodstream infections but leaves bed rails, mattresses, and surfaces untouched. Prior-occupant risk is the fingerprint of failed terminal cleaning, so verifying cleaning performance objectively and adding ultraviolet-C or hydrogen peroxide vapor disinfection attacks the identified link in the chain.",
    "id": 302
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "A 68-year-old woman is admitted with laxative-associated loose stool. Her nurse sends stool for C. difficile PCR, which returns positive; toxin immunoassay is negative. She has two soft stools daily, no fever, and a normal white count. What is the best interpretation?",
    "options": {
      "A": "Probable colonization detected by a sensitive nucleic acid test, warranting no antibiotic treatment",
      "B": "Early pseudomembranous colitis requiring prompt oral vancomycin therapy today, before clinical deterioration and fulminant colitis can develop",
      "C": "A false-positive PCR, since colonization with toxigenic strains is rare in inpatients",
      "D": "Toxin-negative disease that should be confirmed with colonoscopy before therapy"
    },
    "answer": "A",
    "explanation": "Treating this as early colitis ignores the pretest problem: the stool was sent against testing criteria, in a patient on laxatives without clinically significant diarrhea, so the positive detects the organism, not disease. The false-positive framing misstates biology, because the PCR is analytically correct; toxigenic colonization is common, affecting 5 to 15 percent of hospitalized adults, so a true detection of a colonizer is expected, not rare. Colonoscopy is not a screening arbiter for toxin-negative results and is reserved for atypical diagnostic dilemmas. A positive nucleic acid test with a negative toxin assay in a minimally symptomatic patient on laxatives is the textbook signature of colonization; stop the laxative, do not treat, and reinforce testing stewardship.",
    "id": 303
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "A 71-year-old diabetic man is scheduled for elective total knee arthroplasty. Nasal screening grows methicillin-susceptible S. aureus. Beyond standard cefazolin prophylaxis, which additional evidence-supported measure most reduces his deep surgical infection risk?",
    "options": {
      "A": "Substituting vancomycin for cefazolin, since screening proves staphylococcal carriage",
      "B": "A 3-day postoperative course of oral cephalexin after wound closure",
      "C": "Preoperative nasal mupirocin with chlorhexidine bathing to decolonize before surgery",
      "D": "Razor shaving of the operative site the evening before incision"
    },
    "answer": "C",
    "explanation": "Swapping to vancomycin abandons the superior anti-MSSA drug for a slower, less effective one; vancomycin substitution is for serious beta-lactam allergy or MRSA carriage, and even MRSA carriers usually receive vancomycin added to, not instead of, cefazolin. Extending antibiotics past 24 hours after closure adds resistance and C. difficile risk with no infection benefit in trials. Razor shaving the night before is affirmatively harmful, creating microabrasions that incubate overnight; clippers immediately before surgery are the standard. Carrier decolonization with mupirocin and chlorhexidine before implant surgery reduced deep S. aureus surgical infections in randomized trials and is guideline-endorsed for arthroplasty and cardiac surgery.",
    "id": 304
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "During a ward cluster of carbapenem-resistant Klebsiella, whole-genome sequencing shows patient isolates within a few single-nucleotide variants of each other and of an isolate from a sink drain in the medication room. What is the most appropriate conclusion and action?",
    "options": {
      "A": "The sink environment is a plausible reservoir; remediate plumbing and separate sinks from patient care items",
      "B": "Sequencing proximity this close is expected by chance; continue routine surveillance only",
      "C": "The cluster represents repeated independent importation from the community requiring admission screening",
      "D": "Staff carriage is proven as the transmission mechanism, requiring personnel rectal screening"
    },
    "answer": "A",
    "explanation": "Near-identical genomes across patients and an environmental site are precisely what chance does not produce; unrelated isolates of this species differ by far more variation, so dismissing the link inverts the genomics. Independent community importation would generate genetically diverse isolates, the opposite of a tight clonal cluster anchored to one drain. Staff carriage remains conceivable but is not what was demonstrated, and screening personnel rectally is a major escalation unsupported by the evidence in hand. Hospital sink drains are documented reservoirs for carbapenemase producers, splashing organisms onto adjacent surfaces; plumbing remediation, splash guards, and removing preparation activities from sink zones is the matched intervention.",
    "id": 305
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "A resident asks why the ICU stopped routine chlorhexidine mouth care for ventilated patients while keeping daily chlorhexidine bathing. Which explanation is most accurate?",
    "options": {
      "A": "Chlorhexidine resistance among skin flora made oral use redundant with bathing",
      "B": "Oral chlorhexidine was replaced because subglottic secretion suction tubes accomplish the identical oropharyngeal decontamination through purely mechanical means",
      "C": "Meta-analyses raised concern for increased mortality with oral chlorhexidine, while bathing retains bloodstream infection benefit",
      "D": "Bathing evidence was withdrawn, so resources were consolidated into oral care programs"
    },
    "answer": "C",
    "explanation": "Resistance concerns exist but were not the driver, and bathing does not decontaminate the oropharynx, so redundancy is not the logic. Subglottic drainage removes pooled secretions above the cuff mechanically and complements rather than duplicates chemical oral decontamination; the two address different steps. The bathing claim reverses the evidence, since universal chlorhexidine bathing retains randomized support for reducing bloodstream infections and MDRO acquisition. What changed for oral chlorhexidine was safety: pooled analyses suggested a possible mortality increase, possibly from aspiration of the agent, prompting guidelines to withdraw or soften the recommendation while bathing continues.",
    "id": 306
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "A patient with disseminated herpes zoster is admitted to a general ward bed. Which isolation order is correct?",
    "options": {
      "A": "Contact precautions alone until all lesions crust over completely",
      "B": "Airborne plus contact precautions in a negative-pressure room, with nonimmune staff excluded",
      "C": "Droplet precautions for the first 24 hours of antiviral therapy only",
      "D": "Standard precautions with lesion coverage, as for localized dermatomal zoster"
    },
    "answer": "B",
    "explanation": "Contact precautions alone address lesion contact but miss the airborne dissemination that distinguishes disseminated from localized disease. The 24-hour droplet rule belongs to meningococcus and has no relevance to varicella-zoster virus, which travels as a true airborne pathogen. Standard precautions with covered lesions is the correct order for localized zoster in an immunocompetent host, the very distinction this vignette tests in reverse. Disseminated zoster is managed like varicella: airborne infection isolation in a negative-pressure room plus contact precautions, and staff without documented varicella immunity should not enter the room.",
    "id": 307
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "A quality officer proposes reducing CAUTI by adding reflex urine cultures to all catheterized patients weekly. Which response reflects best practice?",
    "options": {
      "A": "Endorse it, since early organism identification enables preemptive targeted therapy before invasive infection becomes clinically established",
      "B": "Oppose it, because screening cultures in asymptomatic patients drive unnecessary treatment and inflate reported infections",
      "C": "Modify it to monthly cultures, balancing surveillance value against laboratory workload",
      "D": "Accept it only for patients already receiving broad-spectrum antibiotics"
    },
    "answer": "B",
    "explanation": "The preemptive-therapy rationale fails because catheter bacteriuria is near-universal with time, does not predict which patients develop invasive infection, and treating it neither prevents CAUTI nor improves outcomes while breeding resistance. Reducing frequency to monthly shrinks the harm without creating any benefit, since the practice is wrong in kind, not in dose. Restricting screening to patients on antibiotics compounds the error by culturing exactly those whose growth is most likely to be selected flora. Asymptomatic bacteriuria in catheterized patients is not treated, screening is not performed, and CAUTI prevention runs through fewer catheter-days via nurse-driven removal protocols.",
    "id": 308
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "After duodenoscope-associated CRE transmissions at several hospitals, investigations found reprocessing had followed manufacturer instructions correctly. What is the most important lesson from these outbreaks?",
    "options": {
      "A": "Reprocessing personnel require annual retraining because human error caused the transmissions",
      "B": "High-level disinfection chemicals had degraded and required stronger replacement agents",
      "C": "Ethylene oxide sterilization should be abandoned for all flexible endoscopes",
      "D": "Device design can defeat compliant reprocessing, requiring engineering fixes like disposable components"
    },
    "answer": "D",
    "explanation": "Retraining assumes human failure, but the defining feature of these events was transmission despite documented full compliance, so more training addresses a cause that was not operating. Chemical degradation was not the finding, and stronger disinfectants cannot reach debris sequestered mechanically inside the elevator channel. Abandoning ethylene oxide inverts the actual response, since some hospitals added ethylene oxide sterilization as an interim strengthening measure. The durable lesson is that the elevator mechanism's crevices made the device itself the defect, driving the engineering solutions, disposable elevator caps and fully single-use duodenoscopes, that design out the reliance on perfect manual reprocessing.",
    "id": 309
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 31,
    "question": "An unvaccinated phlebotomist sustains a needlestick from a patient who is HBsAg-positive and HBeAg-positive. Which post-exposure management is correct?",
    "options": {
      "A": "Reassurance and serial liver enzymes, since transmission risk is under 1 percent",
      "B": "A 28-day course of tenofovir-based antiviral prophylaxis with monthly serologies",
      "C": "Hepatitis B immune globulin plus initiation of the hepatitis B vaccine series now",
      "D": "Vaccine series alone, because immune globulin adds nothing once exposure has occurred"
    },
    "answer": "C",
    "explanation": "Reassurance misstates the stakes by two orders of magnitude, since an HBeAg-positive source transmits clinical hepatitis to 22 to 31 percent of unvaccinated percutaneous exposures, the highest risk of any bloodborne pathogen. A 28-day antiviral course describes HIV prophylaxis; antivirals are not the standard occupational hepatitis B strategy. Vaccine alone forfeits the immediate passive protection that matters precisely because active immunity takes weeks to develop after the first dose. The correct package for an unvaccinated exposed worker is hepatitis B immune globulin as soon as possible plus the first vaccine dose concurrently at a separate site, completing the series and confirming anti-HBs response afterward.",
    "id": 310
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "A 4-month-old received all scheduled conjugate vaccines. His 19-year-old uncle, unvaccinated, developed Hib epiglottitis. Why does the infant respond to the conjugate when plain polysaccharide vaccine would fail at his age?",
    "options": {
      "A": "Carrier protein peptides recruit T cell help, converting the response to a T-dependent, memory-forming one",
      "B": "Conjugation multiplies the polysaccharide dose delivered per injection, overcoming infant immaturity through sheer antigen quantity alone",
      "C": "The carrier protein directly stimulates neonatal marginal zone B cells to mature early",
      "D": "Conjugate vaccines contain adjuvants that replace the need for T cell help entirely"
    },
    "answer": "A",
    "explanation": "Dose escalation does not fix the infant defect, because the failure of plain polysaccharide in infancy is architectural, an immature marginal zone compartment and absent T help, not a quantity problem, and repeated polysaccharide dosing can even induce hyporesponsiveness. The carrier protein does not mature marginal zone B cells; that compartment develops on its own timetable regardless of vaccination. Adjuvants amplify innate signals but cannot substitute for cognate T-B collaboration, which requires peptide on MHC class II. Conjugation works because polysaccharide-specific B cells internalize the coupled complex and present carrier peptides to helper T cells, generating germinal centers, class-switched IgG, affinity maturation, and boostable memory in early infancy.",
    "id": 311
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "A 58-year-old woman starting rituximab for vasculitis in 3 weeks asks about vaccines. She needs RZV, influenza, and PCV20. What is the best plan?",
    "options": {
      "A": "Delay all vaccination until 6 months after rituximab, when responses recover reliably",
      "B": "Give only influenza vaccine now, since the others are unsafe during any immunosuppression",
      "C": "Give all three now, completing what is possible before B cell depletion abolishes antibody responses",
      "D": "Give RZV now but defer the inactivated vaccines until therapy is established"
    },
    "answer": "C",
    "explanation": "Waiting 6 months guarantees she faces her highest-risk period unprotected, and rituximab redosing typically keeps B cells depleted far longer than one interval, so the promised recovery window may never arrive. Safety is not the issue for any of these products; RZV is recombinant, not live, and all three are appropriate during immunosuppression, merely less immunogenic. Prioritizing RZV while deferring influenza and pneumococcal protection inverts no principle and simply forfeits two responses she can still make. The governing rule is timing: inactivated and recombinant vaccines given at least 2 weeks before B cell depletion allow responses to form, so all three belong in the pre-rituximab window.",
    "id": 312
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "A measles outbreak grows in a county where MMR coverage has fallen to 84 percent. A journalist asks why measles returned when most children are still vaccinated. Which explanation is correct?",
    "options": {
      "A": "Vaccine-strain virus reverting to virulence is seeding community transmission",
      "B": "Measles requires roughly 92 to 95 percent immunity for herd protection, so 84 percent permits sustained spread",
      "C": "Waning of measles vaccine immunity roughly 10 years after childhood vaccination explains outbreaks driven primarily by adults",
      "D": "The circulating genotype has drifted beyond the vaccine's protective match"
    },
    "answer": "B",
    "explanation": "Reversion is a property of certain live vaccines like oral polio, not the measles vaccine strain, which does not transmit or revert. Two-dose measles immunity is among the most durable in vaccinology, and waning is a minor contributor compared with the never-vaccinated; outbreaks concentrate in unvaccinated clusters. Measles is serologically monotypic, so antigenic drift escaping vaccine protection is not the mechanism, unlike influenza. The arithmetic is the answer: with a basic reproduction number of 12 to 18, herd protection requires roughly 92 to 95 percent immunity, the highest threshold of any vaccine-preventable disease, and 84 percent coverage leaves transmission chains unbroken.",
    "id": 313
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "A 29-year-old woman at 33 weeks of gestation in November asks how best to protect her newborn from RSV. Which counseling is accurate?",
    "options": {
      "A": "Monthly palivizumab injections through the entire season remain the standard preventive strategy for all healthy term newborn infants",
      "B": "RSV vaccination should wait until after delivery to avoid any fetal antibody exposure",
      "C": "Nothing is indicated, since term newborns handle RSV as a mild cold",
      "D": "Maternal RSV vaccination now, or nirsevimab for the infant after birth, are the two protective pathways"
    },
    "answer": "D",
    "explanation": "Palivizumab was never for healthy term infants; it required monthly dosing and was restricted to high-risk prematurity and cardiopulmonary disease, and nirsevimab has superseded it broadly. Postponing maternal vaccination to the postpartum period defeats its entire mechanism, which is third-trimester transplacental IgG transfer, and fetal antibody exposure is the goal rather than a hazard. Dismissing RSV in term infants ignores that RSV is the leading cause of infant hospitalization in the United States, most of it in previously healthy term babies. The correct frame is the paired strategy: maternal vaccine at 32 through 36 weeks in season, or a single dose of the long-acting monoclonal nirsevimab for the infant, with one pathway generally sufficing.",
    "id": 314
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "A patient declines MMR for her child, citing the autism study she read about. Which combination of facts about that study is accurate?",
    "options": {
      "A": "It was a randomized trial later found to have statistical errors that reversed its conclusion",
      "B": "It remains published with an expression of concern while replication attempts continue",
      "C": "It was a 12-child case series involving falsified data, fully retracted, with its author's license revoked",
      "D": "It was retracted only because larger studies disagreed, without evidence of misconduct"
    },
    "answer": "C",
    "explanation": "The paper was never a randomized trial; it was an uncontrolled case series of 12 children, so no statistical correction was at issue. It does not remain published under an expression of concern; The Lancet issued a full retraction in February 2010. Framing the retraction as mere disagreement with later studies understates the record, since journalistic and regulatory investigation documented undisclosed litigation funding, unethical procedures, and falsified case histories, and the UK General Medical Council revoked Wakefield's license for serious professional misconduct. The accurate summary pairs the misconduct findings with the science: repeated large controlled studies, including a Danish cohort exceeding 650,000 children, found no MMR-autism association.",
    "id": 315
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "A 66-year-old man on eculizumab for paroxysmal nocturnal hemoglobinuria presents for care review. Which vaccination priority is most specific to his therapy?",
    "options": {
      "A": "Meningococcal ACWY and B vaccination, often with antibiotic prophylaxis, because complement blockade permits meningococcemia despite vaccination",
      "B": "Annual high-dose influenza vaccination, because complement inhibitor therapy substantially impairs the generation of protective influenza-specific antibody responses",
      "C": "Rabies pre-exposure vaccination, given the heightened severity of viral infections on eculizumab",
      "D": "Live zoster vaccination, since complement blockade does not affect varicella-zoster control"
    },
    "answer": "A",
    "explanation": "Complement inhibitors do not meaningfully impair influenza antibody generation, so while annual influenza vaccination is good routine care, it is not the therapy-specific issue. Rabies risk is exposure-driven and unchanged by eculizumab, making pre-exposure vaccination irrelevant to this decision. Live zoster vaccine was withdrawn from the United States market and the recombinant product replaced it, so that recommendation is doubly wrong. Terminal complement blockade disables the membrane attack complex, the specific defense against Neisseria, raising meningococcal disease risk a thousand-fold or more; ACWY and serogroup B vaccination is mandatory, and because vaccinated breakthrough occurs on therapy, many programs add penicillin prophylaxis for the treatment duration.",
    "id": 316
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "A hospital employee health service reviews influenza vaccine declinations. One nurse cites her egg allergy with hives, another cites Guillain-Barre syndrome 3 weeks after last year's influenza vaccine, and a third cites a current cold with low-grade fever. Who has a genuine reason to defer or avoid vaccination?",
    "options": {
      "A": "All three nurses, since each history represents a formally recognized vaccination contraindication or precaution requiring documented deferral",
      "B": "The nurse with egg allergy and the nurse with the febrile cold",
      "C": "Only the nurse with the febrile cold, until her temperature normalizes",
      "D": "Only the nurse with Guillain-Barre syndrome within 6 weeks of prior influenza vaccination"
    },
    "answer": "D",
    "explanation": "Treating all three as valid ignores that two of the classic barriers have been formally dismantled. Egg allergy of any severity, including anaphylaxis, no longer requires any special product or observation for influenza vaccination under current recommendations. Mild acute illness with or without low-grade fever is an explicit non-contraindication, so deferring the third nurse manufactures a missed opportunity; moderate or severe illness is the actual precaution. Guillain-Barre syndrome within 6 weeks of a previous influenza vaccine is a recognized precaution, warranting individualized assessment of risk and benefit, and is the only one of the three histories that legitimately supports deferral.",
    "id": 317
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "A 34-year-old kidney transplant recipient 2 years post-transplant, on tacrolimus and mycophenolate, is planning international travel and requests vaccines. Her toddler is due for MMR and varicella. Which statement is correct?",
    "options": {
      "A": "Her child's live vaccines should be postponed until the household no longer includes a transplant recipient",
      "B": "She receives inactivated vaccines, her child receives MMR and varicella on schedule, and she herself avoids live vaccines",
      "C": "Both mother and child may receive live vaccines, since 2 years post-transplant restores immune competence",
      "D": "She should receive yellow fever vaccine before endemic-country travel, since transplant status changes only the schedule"
    },
    "answer": "B",
    "explanation": "Postponing the toddler's vaccines protects no one and endangers everyone, because MMR and varicella vaccine viruses essentially do not transmit within households, while wild measles brought home by an unvaccinated child is a genuine threat to her. Time does not restore live-vaccine eligibility after solid organ transplantation; maintenance immunosuppression continues indefinitely, and live vaccines remain contraindicated regardless of the anniversary. Yellow fever vaccine is live and contraindicated on her regimen; the correct travel medicine response is itinerary modification and a medical waiver letter, not a schedule adjustment. The correct package is the standard one: inactivated and recombinant vaccines for her, on-time live vaccines for her household, and live vaccines withheld from her alone.",
    "id": 318
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "A vaccine skeptic argues that thousands of VAERS reports prove COVID-19 vaccines caused thousands of deaths. What is the most accurate characterization of VAERS for this conversation?",
    "options": {
      "A": "VAERS reports are physician-verified, so the counts represent confirmed vaccine injuries",
      "B": "VAERS undercounts events so severely that true injury totals are far higher than reported",
      "C": "VAERS is an open passive system generating hypotheses, later tested with denominators in the Vaccine Safety Datalink",
      "D": "VAERS was retired during the pandemic and replaced by systems with no public access"
    },
    "answer": "C",
    "explanation": "VAERS reports are not verified claims of causation; anyone may submit anything that occurred after vaccination, and reports mix coincidence, background events, and true reactions by design. The undercounting argument, while passive systems do miss events, cannot rescue the causal claim, because raw counts without comparison rates carry no causal information in either direction. VAERS was never retired and remains publicly searchable; the pandemic added systems like v-safe alongside it. The honest description is a two-stage architecture: VAERS detects signals fast precisely because it is unfiltered, and those signals are then evaluated with denominators and comparison groups in the Vaccine Safety Datalink and related active surveillance, which is how myocarditis was confirmed and quantified while false signals were excluded.",
    "id": 319
  },
  {
    "domain": "prevention_vaccination",
    "chapter": 32,
    "question": "After a needlestick, a healthcare worker's anti-HBs measures 4 mIU/mL despite a documented complete hepatitis B vaccine series years ago and a positive post-series titer. The source is HBsAg-negative. What does the current titer indicate about her protection?",
    "options": {
      "A": "Documented prior response means she remains protected, because immune memory outlives measurable antibody",
      "B": "She has lost protection and requires urgent hepatitis B immune globulin today",
      "C": "She was a vaccine non-responder all along, and the earlier titer was erroneous",
      "D": "She has become a chronic hepatitis B carrier whose circulating surface antigen suppresses her measured antibody titer"
    },
    "answer": "A",
    "explanation": "Immune globulin is post-exposure treatment for a susceptible person exposed to an HBsAg-positive source, and here the source is negative and the worker is not susceptible, so it has no role. Reclassifying her as a non-responder contradicts the documented post-series titer of 10 mIU/mL or higher, which is the definition of response and needs no revision because antibody later waned. Chronic carriage is excluded conceptually and serologically; infection is marked by HBsAg and anti-HBc, not by a low anti-HBs, and vaccine responders who later lose titer remain protected. The established principle is that memory B cells persist after antibody wanes, mounting an anamnestic response on exposure, so documented responders need neither boosters nor immune globulin, and clinical hepatitis B in this group is essentially unreported.",
    "id": 320
  }
];
