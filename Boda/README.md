# Invitación de Boda - Ramón & Artemis

Página web de invitación de boda con diseño minimalista en azul y blanco.

## Características

- ✨ **Diseño Minimalista**: Interfaz limpia y elegante en tonos azul y blanco
- 📱 **Responsive**: Optimizado para móviles y computadoras
- 🎉 **Animaciones**: Efectos de confeti y flores animadas
- 🎵 **Música de Fondo**: Reproducción opcional de música
- ⏱️ **Countdown Timer**: Contador regresivo hasta la fecha de la boda
- 📝 **Formulario de Confirmación**: Sistema para confirmar asistencia
- 📍 **Códigos QR**: Para ubicación y confirmación
- 🎨 **Animaciones al Cargar**: Efectos suaves al cargar la página

## Información de la Boda

- **Nombres**: Ramón Domínguez y Artemis González
- **Fecha**: 18 de Diciembre de 2026
- **Hora**: 6:00 PM
- **Lugar**: Yabanal, Santiago R.D
- **Código de Vestimenta**: Semi-formal (evitar azul y blanco)

## Requisitos

- .NET 9.0 SDK
- Navegador web moderno

## Configuración

1. Clona o descarga el proyecto
2. Abre una terminal en la carpeta del proyecto
3. Ejecuta:
   ```bash
   dotnet restore
   dotnet build
   dotnet run
   ```

4. Abre tu navegador en `https://localhost:5001` o `http://localhost:5000`

## Agregar Música

1. Coloca un archivo de audio en formato MP3 en la carpeta `wwwroot/audio/`
2. Nómbralo `wedding-music.mp3`
3. El botón de música aparecerá en la esquina inferior derecha

**Nota**: Asegúrate de tener los derechos de uso de la música.

## Personalización

### Cambiar Colores

Los colores principales están definidos en las variables CSS en `Home.razor`:

```css
:root {
    --primary-blue: #2563eb;
    --primary-blue-dark: #1e40af;
    --primary-blue-light: #3b82f6;
    --white: #ffffff;
    /* ... más colores ... */
}
```

### Modificar Información

Edita las constantes en el código `@code` de `Home.razor`:

```csharp
private readonly DateTime fechaBoda = new(2026, 12, 18, 18, 0, 0);
private readonly string locationUrl = "https://www.google.com/maps/search/...";
```

### Configurar Backend para Confirmaciones

Actualmente, el formulario de confirmación solo muestra un mensaje. Para guardar las confirmaciones:

1. Crea un servicio de API o base de datos
2. Modifica el método `EnviarConfirmacion()` en `Home.razor`
3. Agrega la lógica para enviar los datos al backend

## Estructura del Proyecto

```
Boda/
├── Components/
│   ├── Pages/
│   │   └── Home.razor          # Página principal de la invitación
│   └── App.razor               # Configuración de la aplicación
├── wwwroot/
│   ├── js/
│   │   └── wedding-animations.js  # Animaciones y efectos
│   └── audio/
│       └── wedding-music.mp3   # Música de fondo (agregar manualmente)
└── Program.cs                  # Configuración del servidor
```

## Tecnologías Utilizadas

- **Blazor Server**: Framework de .NET para aplicaciones web
- **C#**: Lenguaje de programación
- **CSS3**: Estilos y animaciones
- **JavaScript**: Animaciones y efectos interactivos
- **HTML5**: Estructura de la página

## Navegadores Soportados

- Chrome/Edge (recomendado)
- Firefox
- Safari
- Opera

## Licencia

Este proyecto es para uso personal. Asegúrate de tener los derechos de cualquier música o imágenes que uses.

## Soporte

Para preguntas o problemas, contacta a los desarrolladores del proyecto.

---

¡Feliz boda! 💙🤍

