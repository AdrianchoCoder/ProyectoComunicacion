/* Sections */
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces de la lista de evidencias
    const evidenciaLinks = document.querySelectorAll('.dropdown-menu a');
    
    // Selecciona todas las secciones de evidencia
    const evidenciaSections = document.querySelectorAll('#adrian, #echeverri, #garcia, #quiros');

    // Oculta todas las secciones de evidencia al cargar la página
    evidenciaSections.forEach(section => {
        section.style.display = 'none';
    });

    // Agrega un "escuchador de eventos" (listener) a cada enlace de evidencia
    evidenciaLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que la página se recargue

            // Oculta todas las secciones de evidencia
            evidenciaSections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Obtiene el ID de la sección a mostrar del atributo 'data-seccion'
            const sectionId = this.getAttribute('data-seccion');

            // Muestra la sección correspondiente
            const sectionToShow = document.getElementById(sectionId);
            if (sectionToShow) {
                sectionToShow.style.display = 'block';
                // Añade esta línea para desplazar la vista hasta la sección
                sectionToShow.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
  const btnConocenos = document.getElementById('nosotros');
  const btnReflexiones = document.getElementById('reflexion');
  const btnLecciones = document.getElementById('lecciones-link');

  const sectionConocenos = document.getElementById('conocenos');
  const sectionReflexiones = document.getElementById('reflexiones');
  const sectionLecciones = document.getElementById('lecciones');

  function hideAllSections() {
    sectionConocenos.classList.add('hidden');
    sectionReflexiones.classList.add('hidden');
    sectionLecciones.classList.add('hidden');
  }

  btnConocenos.addEventListener('click', (e) => {
    e.preventDefault();
    hideAllSections();
    sectionConocenos.classList.remove('hidden');
    sectionConocenos.scrollIntoView({ behavior: 'smooth' });
  });

  btnReflexiones.addEventListener('click', (e) => {
    e.preventDefault();
    hideAllSections();
    sectionReflexiones.classList.remove('hidden');
    sectionReflexiones.scrollIntoView({ behavior: 'smooth' });
  });

  btnLecciones.addEventListener('click', (e) => {
    e.preventDefault();
    hideAllSections();
    sectionLecciones.classList.remove('hidden');
    sectionLecciones.scrollIntoView({ behavior: 'smooth' });
  });

  // Opcional: mostrar "Conócenos" al inicio
  hideAllSections();
  sectionConocenos.classList.remove('hidden');
});
