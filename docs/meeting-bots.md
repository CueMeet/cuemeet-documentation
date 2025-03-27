---
sidebar_position: 4
displayed_sidebar: pageSidebar
---

# Meeting Bots Overview

Our Meeting Bots framework provides a unified, extensible system for automating and recording meetings across multiple video conferencing platforms, including **Google Meet**, **Zoom**, and **Microsoft Teams**.

Each bot is designed with consistency and simplicity in mind, using the same core architecture and tooling to ensure minimal overhead and maximum reliability across different platforms.

## Core Capabilities

- **Automated Meeting Participation**: All bots use [Selenium](https://www.selenium.dev/) to programmatically launch a Chromium instance and join meetings without user intervention.
- **Audio Recording**: Using [FFmpeg](https://ffmpeg.org/), the bots capture high-quality audio directly from the meeting session.
- **Live Caption Extraction**: Captions and real-time transcripts are extracted through a custom Chrome extension located in the `transcript_extension` directory. This allows post-meeting transcription and indexing of discussion content.
- **Command-Line Interface**: A lightweight Python CLI app powers each bot, making it easy to configure, run, and scale bots via arguments and environment variables—whether in Docker containers or via local development tools like [Poetry](https://python-poetry.org/).
- **Error Monitoring and Alerting**: Integration with [Highlight.io](https://www.highlight.io/) ensures that any runtime exceptions or operational issues are recorded. Additionally, Slack alerts are configured to notify the team of any bot failures in real time.
- **Data Packaging and Upload to S3**  
  Two types of outputs are uploaded to Amazon S3 using presigned URLs provided at runtime:
  - A **compressed `.tar` file** containing both the audio (`.opus`) and transcript (`.json`) files, uploaded via `--presigned-url-combined`
  - A **standalone audio file** (`.opus`), uploaded separately via `--presigned-url-audio`
  
  Note: Output of each of these is stored in the `/out` folder of the parent directory.

  This design enables flexible post-processing workflows while maintaining separation between raw audio and structured transcription.

## Monitoring and Observability

The bots integrate directly with `highlight_io`, enabling structured logging and exception tracking. When a failure occurs during execution, a detailed payload is assembled—including the meeting link, timestamps, and error messages—and automatically reported to Highlight.io, triggering Slack alerts as configured.

This observability pipeline ensures we are instantly aware of any anomalies in production and can take corrective actions proactively.

## Extensibility

Because all bots share the same base code, enhancements—such as improving transcript accuracy, adding new CLI options, or changing the deployment model—can be rolled out to all platforms with minimal duplication.

Whether you're working on the Google Meet, Zoom, or Teams integration, the foundational setup remains consistent, making onboarding and contribution straightforward.

---

> Continue with the specific guides below to dive into the bot configuration for your platform of interest:
> - [Google Bot](/cuemeet-documentation/docs/google-bot)
> - [Zoom Bot](/cuemeet-documentation/docs/zoom-bot)
> - [Microsoft Teams Bot](/cuemeet-documentation/docs/microsoft-teams-bot)
