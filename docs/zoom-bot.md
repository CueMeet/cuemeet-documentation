---
sidebar_position: 4
displayed_sidebar: pageSidebar
---

# Zoom Meeting Bot

## Prerequisites

Before you begin, ensure the following tools are installed on your system:

- [Git](https://git-scm.com/downloads)
- [Docker and Docker Compose](https://docs.docker.com/get-started/get-docker/)
- Python 3.10 or higher (only required for local development without Docker)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/CueMeet/cuemeet-zoom-bot.git
cd cuemeet-zoom-bot
```

### 2. Configure Environment Variables

Create a `.env` file and include the following configuration values:

<details>
<summary>Click to view example .env configuration</summary>

```env
DEBUG="True"
HIGHLIGHT_PROJECT_ID="126875"
ENVIRONMENT_NAME="DEV"
```

</details>

### 3. Configuration Options

The bot can be customized using command-line arguments:

```bash
usage: app.py [-h] [--start-time START_TIME] [--end-time END_TIME] [--min-record-time MIN_RECORD_TIME] [--bot-name BOT_NAME] [--presigned-url-combined PRESIGNED_URL_COMBINED]
              [--presigned-url-audio PRESIGNED_URL_AUDIO] [--max-waiting-time MAX_WAITING_TIME]
              meetlink

Join a Zoom Meeting to record audio.

positional arguments:
  meetlink              The Zoom Meet link to join

options:
  -h, --help            show this help message and exit
  --start-time START_TIME
                        Meeting start time (JavaScript timestamp in milliseconds)
  --end-time END_TIME   Meeting end time (JavaScript timestamp in milliseconds)
  --min-record-time MIN_RECORD_TIME
                        Minimum recording time in seconds (Default: 2 hours)
  --bot-name BOT_NAME   Name of the bot in the meeting (Default: 'CueMeet Assistant')
  --presigned-url-combined PRESIGNED_URL_COMBINED
                        Tar file presigned URL to upload the recording file and transcription file
  --presigned-url-audio PRESIGNED_URL_AUDIO
                        Audio file presigned URL to upload the recording file
  --max-waiting-time MAX_WAITING_TIME
                        Maximum waiting time in seconds (Default: 30 minutes)
```

## Running with Docker

### Build the Docker Image

```bash
docker build -t zoom-bot .
```

### View Help Manual

```bash
docker run zoom-bot /bin/bash -c "python app.py --help"
```

### Run the Bot Locally (Docker)

```bash
docker run zoom-bot /bin/bash -c "pulseaudio --start && python app.py '<meetlink>' --presigned-url-combined '<url>'"
```

## Local Development with Poetry

For development without Docker, [Poetry](https://python-poetry.org/) is used to manage dependencies and environments.

### Setup Instructions

To set up the project locally using Poetry:

```bash
make install
```

This command will:

- Install Poetry (if not already present)
- Configure the virtual environment to reside in the project directory
- Install project dependencies as defined in `pyproject.toml`

### Activating the Poetry Shell

To enter the virtual environment:

```bash
make poetry-shell
```

### Running the Bot Locally

Once inside the Poetry shell, you can run:

```bash
python app.py --help
```

Or test a full run with:

```bash
python app.py '<meetlink>' --presigned-url-combined '<url>'
```

### Typical Local Workflow

```bash
# Install dependencies and set up the environment
make install

# Enter the Poetry-managed virtual environment
make poetry-shell

# Execute the bot
python app.py --help
```

### Output Artifacts

- **Audio File**: Captured in `.opus` format.
- **Transcription**: Saved as a `.json` file.
- **Combined Archive**: Both files are compressed into a `.tar` archive and uploaded to S3 using the provided `--presigned-url-combined`.

Note: Output of each of these is stored in the `/out` folder of the parent directory.

### Uploading Process

- The audio file is uploaded separately using the `--presigned-url-audio`.
- A tar archive (`.tar`) containing the audio and transcription is uploaded using the `--presigned-url-combined`.
