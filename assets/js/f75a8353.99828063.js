"use strict";(self.webpackChunkcuemeet_documentation=self.webpackChunkcuemeet_documentation||[]).push([[179],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>s});var t=i(96540);const o={},l=t.createContext(o);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(l.Provider,{value:n},e.children)}},53829:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"zoom-bot","title":"Zoom Meeting Bot","description":"Prerequisites","source":"@site/docs/zoom-bot.md","sourceDirName":".","slug":"/zoom-bot","permalink":"/cuemeet-documentation/docs/zoom-bot","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/zoom-bot.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"displayed_sidebar":"pageSidebar"},"sidebar":"pageSidebar","previous":{"title":"Google Bot","permalink":"/cuemeet-documentation/docs/google-bot"},"next":{"title":"Microsoft Teams Bot","permalink":"/cuemeet-documentation/docs/microsoft-teams-bot"}}');var o=i(74848),l=i(28453);const r={sidebar_position:4,displayed_sidebar:"pageSidebar"},s="Zoom Meeting Bot",a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation Steps",id:"installation-steps",level:2},{value:"1. Clone the Repository",id:"1-clone-the-repository",level:3},{value:"2. Configure Environment Variables",id:"2-configure-environment-variables",level:3},{value:"3. Configuration Options",id:"3-configuration-options",level:3},{value:"Running with Docker",id:"running-with-docker",level:2},{value:"Build the Docker Image",id:"build-the-docker-image",level:3},{value:"View Help Manual",id:"view-help-manual",level:3},{value:"Run the Bot Locally (Docker)",id:"run-the-bot-locally-docker",level:3},{value:"Local Development with Poetry",id:"local-development-with-poetry",level:2},{value:"Setup Instructions",id:"setup-instructions",level:3},{value:"Activating the Poetry Shell",id:"activating-the-poetry-shell",level:3},{value:"Running the Bot Locally",id:"running-the-bot-locally",level:3},{value:"Typical Local Workflow",id:"typical-local-workflow",level:3},{value:"Output Artifacts",id:"output-artifacts",level:3},{value:"Uploading Process",id:"uploading-process",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"zoom-meeting-bot",children:"Zoom Meeting Bot"})}),"\n",(0,o.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,o.jsx)(n.p,{children:"Before you begin, ensure the following tools are installed on your system:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"Git"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://docs.docker.com/get-started/get-docker/",children:"Docker and Docker Compose"})}),"\n",(0,o.jsx)(n.li,{children:"Python 3.10 or higher (only required for local development without Docker)"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"installation-steps",children:"Installation Steps"}),"\n",(0,o.jsx)(n.h3,{id:"1-clone-the-repository",children:"1. Clone the Repository"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/CueMeet/cuemeet-zoom-bot.git\ncd cuemeet-zoom-bot\n"})}),"\n",(0,o.jsx)(n.h3,{id:"2-configure-environment-variables",children:"2. Configure Environment Variables"}),"\n",(0,o.jsxs)(n.p,{children:["Create a ",(0,o.jsx)(n.code,{children:".env"})," file and include the following configuration values:"]}),"\n",(0,o.jsxs)(i,{children:[(0,o.jsx)("summary",{children:"Click to view example .env configuration"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-env",children:'DEBUG="True"\nHIGHLIGHT_PROJECT_ID="126875"\nENVIRONMENT_NAME="DEV"\n'})})]}),"\n",(0,o.jsx)(n.h3,{id:"3-configuration-options",children:"3. Configuration Options"}),"\n",(0,o.jsx)(n.p,{children:"The bot can be customized using command-line arguments:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"usage: app.py [-h] [--start-time START_TIME] [--end-time END_TIME] [--min-record-time MIN_RECORD_TIME] [--bot-name BOT_NAME] [--presigned-url-combined PRESIGNED_URL_COMBINED]\n              [--presigned-url-audio PRESIGNED_URL_AUDIO] [--max-waiting-time MAX_WAITING_TIME]\n              meetlink\n\nJoin a Zoom Meeting to record audio.\n\npositional arguments:\n  meetlink              The Zoom Meet link to join\n\noptions:\n  -h, --help            show this help message and exit\n  --start-time START_TIME\n                        Meeting start time (JavaScript timestamp in milliseconds)\n  --end-time END_TIME   Meeting end time (JavaScript timestamp in milliseconds)\n  --min-record-time MIN_RECORD_TIME\n                        Minimum recording time in seconds (Default: 2 hours)\n  --bot-name BOT_NAME   Name of the bot in the meeting (Default: 'CueMeet Assistant')\n  --presigned-url-combined PRESIGNED_URL_COMBINED\n                        Tar file presigned URL to upload the recording file and transcription file\n  --presigned-url-audio PRESIGNED_URL_AUDIO\n                        Audio file presigned URL to upload the recording file\n  --max-waiting-time MAX_WAITING_TIME\n                        Maximum waiting time in seconds (Default: 30 minutes)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"running-with-docker",children:"Running with Docker"}),"\n",(0,o.jsx)(n.h3,{id:"build-the-docker-image",children:"Build the Docker Image"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker build -t zoom-bot .\n"})}),"\n",(0,o.jsx)(n.h3,{id:"view-help-manual",children:"View Help Manual"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'docker run zoom-bot /bin/bash -c "python app.py --help"\n'})}),"\n",(0,o.jsx)(n.h3,{id:"run-the-bot-locally-docker",children:"Run the Bot Locally (Docker)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker run zoom-bot /bin/bash -c \"pulseaudio --start && python app.py '<meetlink>' --presigned-url-combined '<url>'\"\n"})}),"\n",(0,o.jsx)(n.h2,{id:"local-development-with-poetry",children:"Local Development with Poetry"}),"\n",(0,o.jsxs)(n.p,{children:["For development without Docker, ",(0,o.jsx)(n.a,{href:"https://python-poetry.org/",children:"Poetry"})," is used to manage dependencies and environments."]}),"\n",(0,o.jsx)(n.h3,{id:"setup-instructions",children:"Setup Instructions"}),"\n",(0,o.jsx)(n.p,{children:"To set up the project locally using Poetry:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make install\n"})}),"\n",(0,o.jsx)(n.p,{children:"This command will:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Install Poetry (if not already present)"}),"\n",(0,o.jsx)(n.li,{children:"Configure the virtual environment to reside in the project directory"}),"\n",(0,o.jsxs)(n.li,{children:["Install project dependencies as defined in ",(0,o.jsx)(n.code,{children:"pyproject.toml"})]}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"activating-the-poetry-shell",children:"Activating the Poetry Shell"}),"\n",(0,o.jsx)(n.p,{children:"To enter the virtual environment:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"make poetry-shell\n"})}),"\n",(0,o.jsx)(n.h3,{id:"running-the-bot-locally",children:"Running the Bot Locally"}),"\n",(0,o.jsx)(n.p,{children:"Once inside the Poetry shell, you can run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python app.py --help\n"})}),"\n",(0,o.jsx)(n.p,{children:"Or test a full run with:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"python app.py '<meetlink>' --presigned-url-combined '<url>'\n"})}),"\n",(0,o.jsx)(n.h3,{id:"typical-local-workflow",children:"Typical Local Workflow"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"# Install dependencies and set up the environment\nmake install\n\n# Enter the Poetry-managed virtual environment\nmake poetry-shell\n\n# Execute the bot\npython app.py --help\n"})}),"\n",(0,o.jsx)(n.h3,{id:"output-artifacts",children:"Output Artifacts"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Audio File"}),": Captured in ",(0,o.jsx)(n.code,{children:".opus"})," format."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Transcription"}),": Saved as a ",(0,o.jsx)(n.code,{children:".json"})," file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Combined Archive"}),": Both files are compressed into a ",(0,o.jsx)(n.code,{children:".tar"})," archive and uploaded to S3 using the provided ",(0,o.jsx)(n.code,{children:"--presigned-url-combined"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Note: Output of each of these is stored in the ",(0,o.jsx)(n.code,{children:"/out"})," folder of the parent directory."]}),"\n",(0,o.jsx)(n.h3,{id:"uploading-process",children:"Uploading Process"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The audio file is uploaded separately using the ",(0,o.jsx)(n.code,{children:"--presigned-url-audio"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["A tar archive (",(0,o.jsx)(n.code,{children:".tar"}),") containing the audio and transcription is uploaded using the ",(0,o.jsx)(n.code,{children:"--presigned-url-combined"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);