# 🎯 Red Team Operations Roadmap
## *From Script Kiddie to Elite Operator*

---

```
                                    🏆 ELITE RED TEAMER
                                           |
                    ┌──────────────────────┴──────────────────────┐
                    |                                              |
            ⚔️ ADVANCED OPS                              🎭 SOCIAL ENGINEERING
                    |                                              |
        ┌───────────┴───────────┐                      ┌──────────┴──────────┐
        |                       |                      |                     |
    🔴 EXPLOITATION    🔐 POST-EXPLOITATION    📱 VISHING/PHISHING   🎪 PHYSICAL
        |                       |                      |                     |
    ┌───┴───┐              ┌───┴───┐             ┌────┴────┐          ┌────┴────┐
    |       |              |       |             |         |          |         |
  WEB    NETWORK        PRIV-ESC  PIVOT      EMAIL     SMS      TAILGATING  BADGES
    |       |              |       |             |         |          |         |
    └───┬───┘              └───┬───┘             └────┬────┘          └────┬────┘
        |                      |                      |                    |
        └──────────────────────┴──────────────────────┴────────────────────┘
                                    |
                            🎓 INTERMEDIATE LEVEL
                                    |
                    ┌───────────────┴───────────────┐
                    |                               |
            📡 RECONNAISSANCE            🛡️ VULNERABILITY ASSESSMENT
                    |                               |
        ┌───────────┴───────────┐       ┌──────────┴──────────┐
        |                       |       |                     |
    🌐 PASSIVE              🔍 ACTIVE   🐛 SCANNING        🎯 ANALYSIS
        |                       |       |                     |
        └───────────────────────┴───────┴─────────────────────┘
                                    |
                            📚 FOUNDATION LEVEL
                                    |
        ┌───────────────────────────┼───────────────────────────┐
        |                           |                           |
    💻 NETWORKING              🐧 LINUX/UNIX            🔧 SCRIPTING
        |                           |                           |
    OSI Model                   Commands              Python/Bash/PS
    TCP/IP                      Permissions           Automation
    Subnetting                  File Systems          APIs
```

---

## 🗺️ **PHASE 1: FOUNDATION** (0-3 Months)

### 💻 Networking Fundamentals
**Skills to Master:**
- TCP/IP Stack & OSI Model
- Subnetting & CIDR notation
- Common protocols (HTTP, DNS, SMB, SSH, RDP)
- Packet analysis fundamentals

**Tools:**
- `Wireshark` - Packet capture & analysis
- `tcpdump` - Command-line packet analyzer
- `nmap` - Network discovery
- `netcat` - Swiss army knife of networking

**Practice:**
- Set up home lab with VMs
- Capture and analyze traffic
- Build network diagrams

---

### 🐧 Linux/Unix Mastery
**Skills to Master:**
- Command-line navigation
- File permissions & ownership
- Process management
- Shell scripting basics

**Tools:**
- `bash`/`zsh` - Shell environments
- `vim`/`nano` - Text editors
- `ssh` - Remote access
- `tmux`/`screen` - Terminal multiplexers

**Practice:**
- Daily Linux use (ditch Windows for personal use)
- Build bash automation scripts
- Complete OverTheWire Bandit wargames

---

### 🔧 Scripting & Automation
**Skills to Master:**
- Python fundamentals
- Bash scripting
- PowerShell basics
- Regular expressions

**Tools:**
- `Python 3` - Primary scripting language
- `pip`/`poetry` - Package management
- `requests` - HTTP library
- `scapy` - Packet manipulation

**Practice:**
- Automate daily tasks
- Build network scanners
- Parse logs and data

---

## 🗺️ **PHASE 2: INTERMEDIATE** (3-8 Months)

### 📡 Reconnaissance

#### 🌐 Passive Reconnaissance
**Skills:**
- OSINT gathering
- Subdomain enumeration
- Email harvesting
- Social media intelligence

**Tools:**
- `theHarvester` - Email & subdomain gathering
- `Shodan` - Internet-connected device search
- `Maltego` - Data visualization & OSINT
- `recon-ng` - Reconnaissance framework
- `SpiderFoot` - Automated OSINT
- `Google Dorks` - Advanced search operators
- `WHOIS` - Domain registration data
- `DNSdumpster` - DNS reconnaissance

**Practice:**
- Map target organizations
- Build employee lists
- Identify infrastructure

---

#### 🔍 Active Reconnaissance
**Skills:**
- Port scanning strategies
- Service enumeration
- Network mapping
- Banner grabbing

**Tools:**
- `nmap` - Network mapper
- `masscan` - Ultra-fast port scanner
- `Nikto` - Web server scanner
- `gobuster`/`ffuf` - Directory brute-forcing
- `dnsenum` - DNS enumeration
- `enum4linux` - SMB enumeration

**Practice:**
- Scan HackTheBox/TryHackMe targets
- Document findings systematically

---

### 🛡️ Vulnerability Assessment

#### 🐛 Vulnerability Scanning
**Skills:**
- Automated scanning
- Manual verification
- False positive identification
- Risk prioritization

**Tools:**
- `Nessus` - Commercial vulnerability scanner
- `OpenVAS` - Open-source scanner
- `Nuclei` - Modern vulnerability scanner
- `Nikto` - Web vulnerability scanner
- `WPScan` - WordPress scanner
- `Burp Suite` - Web app security testing

**Practice:**
- Scan vulnerable VMs
- Create custom scan policies
- Correlate scan results

---

#### 🎯 Manual Analysis
**Skills:**
- Source code review
- Configuration analysis
- Logic flaw identification
- CVE research

**Tools:**
- `Burp Suite Pro` - Intercepting proxy
- `grep`/`ripgrep` - Text search
- `Ghidra` - Reverse engineering
- `cvedetails.com` - CVE database
- `ExploitDB` - Exploit repository

---

## 🗺️ **PHASE 3: ADVANCED** (8-15 Months)

### 🔴 Exploitation

#### 🌐 Web Application Exploitation
**Skills:**
- SQL injection (SQLi)
- Cross-Site Scripting (XSS)
- CSRF attacks
- Authentication bypasses
- Server-Side Request Forgery (SSRF)
- XXE injection
- Deserialization attacks

**Tools:**
- `Burp Suite` - Web proxy & scanner
- `sqlmap` - Automated SQLi tool
- `XSStrike` - XSS detection & exploitation
- `Commix` - Command injection exploiter
- `wfuzz` - Web fuzzer
- `OWASP ZAP` - Web app security scanner
- `Postman` - API testing

**Practice:**
- OWASP Top 10 labs
- PortSwigger Web Security Academy
- Bug bounty programs (HackerOne, Bugcrowd)

---

#### 🖥️ Network Exploitation
**Skills:**
- Buffer overflows
- Remote code execution
- Man-in-the-Middle attacks
- Password cracking
- Exploit development basics

**Tools:**
- `Metasploit Framework` - Exploitation framework
- `Exploit-DB` - Exploit database
- `searchsploit` - Local exploit search
- `msfvenom` - Payload generator
- `Cobalt Strike` - C2 framework (commercial)
- `Responder` - LLMNR/NBT-NS poisoner
- `Ettercap` - Network sniffing & MITM
- `hashcat` - Password recovery
- `John the Ripper` - Password cracker
- `Hydra` - Login brute-forcer

**Practice:**
- VulnHub & HackTheBox machines
- Exploit development courses

---

### 🔐 Post-Exploitation

#### 🔓 Privilege Escalation
**Skills:**
- Linux privilege escalation
- Windows privilege escalation
- Kernel exploits
- Misconfiguration abuse
- Token manipulation

**Tools:**
- `LinPEAS`/`WinPEAS` - Enumeration scripts
- `linux-exploit-suggester` - Kernel exploit finder
- `PowerUp.ps1` - Windows priv-esc checker
- `GTFOBins` - Unix binary exploitation
- `LOLBAS` - Living Off The Land binaries
- `mimikatz` - Windows credential dumper
- `BloodHound` - AD attack path finder

**Practice:**
- Privilege escalation challenges
- CTF competitions

---

#### 🔄 Lateral Movement & Pivoting
**Skills:**
- Pass-the-Hash
- Pass-the-Ticket
- Kerberoasting
- Golden/Silver tickets
- Tunneling & pivoting
- Credential harvesting

**Tools:**
- `CrackMapExec` - Swiss army knife for pentesting networks
- `Impacket` - Network protocol tools
- `Evil-WinRM` - Windows Remote Management shell
- `ProxyChains` - Proxy tunnel
- `Chisel` - Fast TCP/UDP tunnel
- `sshuttle` - VPN over SSH
- `Ligolo-ng` - Reverse tunneling
- `Empire`/`Covenant` - Post-exploitation frameworks

**Practice:**
- Multi-machine AD labs
- GOAD (Game of Active Directory)

---

### 🎭 Social Engineering

#### 📧 Phishing Operations
**Skills:**
- Email spoofing
- Credential harvesting
- Payload delivery
- Pretext development
- Campaign management

**Tools:**
- `GoPhish` - Phishing framework
- `Social-Engineer Toolkit (SET)` - Social engineering toolkit
- `King Phisher` - Phishing campaign toolkit
- `MailSniper` - Email reconnaissance
- `Evilginx2` - MITM phishing framework
- `Modlishka` - Reverse proxy phishing

**Practice:**
- Internal awareness campaigns
- Red team exercises

---

#### 🎪 Physical Security
**Skills:**
- Lock picking
- Badge cloning
- Tailgating techniques
- Camera evasion
- Dumpster diving

**Tools:**
- Lock picks & practice locks
- `Proxmark3` - RFID cloning
- `Flipper Zero` - Multi-tool device
- `USB Rubber Ducky` - Keystroke injection
- `Bash Bunny` - USB attack platform
- `WiFi Pineapple` - Wireless auditing

**Practice:**
- Physical penetration tests
- Lock sport communities

---

## 🗺️ **PHASE 4: ELITE** (15+ Months)

### 🏆 Advanced Red Team Operations

#### 🎯 Adversary Emulation
**Skills:**
- TTPs (Tactics, Techniques & Procedures)
- MITRE ATT&CK framework
- APT simulation
- Custom tooling development
- Threat intelligence integration

**Tools:**
- `Cobalt Strike` - Commercial C2
- `Havoc` - Open-source C2
- `Sliver` - C2 framework
- `Mythic` - Multi-platform C2
- `CALDERA` - Automated adversary emulation
- `Atomic Red Team` - Security testing

---

#### 🔬 Advanced Exploitation
**Skills:**
- 0-day research
- Exploit development
- Bypassing EDR/AV
- Memory forensics evasion
- Custom payload development

**Tools:**
- `IDA Pro`/`Ghidra` - Disassemblers
- `x64dbg`/`WinDbg` - Debuggers
- `Immunity Debugger` - Exploit development
- `Donut` - Shellcode generator
- `Nim`/`Rust` - Modern exploitation languages

---

#### 🕵️ Stealth & OPSEC
**Skills:**
- Log evasion
- Traffic obfuscation
- Anti-forensics
- Living off the land
- Operational security

**Tools:**
- `Invoke-Obfuscation` - PowerShell obfuscation
- `AMSI.fail` - AMSI bypass
- `ScareCrow` - Payload creation
- Custom encryption tools
- VPN chains & anonymous infrastructure

---

## 📚 **CONTINUOUS LEARNING RESOURCES**

### 🎓 Certifications
- **Entry:** Security+, CEH, eJPT
- **Intermediate:** OSCP, eCPPT, PNPT
- **Advanced:** OSEP, OSWE, OSED, CRTO
- **Elite:** OSCE³, GXPN, PACES

### 🏋️ Practice Platforms
- **HackTheBox** - Realistic machines & challenges
- **TryHackMe** - Guided learning paths
- **VulnHub** - Vulnerable VMs
- **PentesterLab** - Web application security
- **CTFtime** - Capture The Flag events
- **Root-Me** - Hacking challenges

### 📖 Must-Read Books
- *The Hacker Playbook 3* - Peter Kim
- *Red Team Field Manual* - Ben Clark
- *Operator Handbook* - Joshua Picolet
- *Black Hat Go* - Tom Steele
- *Attacking Network Protocols* - James Forshaw

### 🎥 Learning Platforms
- **Offensive Security** - Official OSCP/OSEP training
- **HackTheBox Academy** - Structured courses
- **TCM Security Academy** - Practical courses
- **Pentester Academy** - Advanced red teaming
- **INE/eLearnSecurity** - Comprehensive training

---

## ⚡ **DAILY PRACTICE ROUTINE**

### Morning (1-2 hours)
- [ ] Read security news (r/netsec, Twitter)
- [ ] Study new technique/tool
- [ ] Review CVEs & exploits

### Afternoon/Evening (2-3 hours)
- [ ] HTB/THM machine
- [ ] Script/tool development
- [ ] Blog post or notes

### Weekly Goals
- [ ] Complete 2-3 vulnerable machines
- [ ] Write one blog post
- [ ] Contribute to open-source tool
- [ ] Participate in CTF

---

## 🎯 **RED TEAM MINDSET**

> *"The best red teamers think like attackers, document like professionals, and act with integrity."*

### Core Principles:
1. **Always Legal** - Get written authorization
2. **Document Everything** - Notes, screenshots, commands
3. **Think Creatively** - "Can I?" vs "Should I?"
4. **Stay Ethical** - Responsible disclosure
5. **Never Stop Learning** - Technology evolves daily
6. **Know Your Limits** - Ask for help
7. **OPSEC Always** - Protect yourself & clients

---

## 🚀 **FINAL BOSS: REAL-WORLD OPERATIONS**

### The Ultimate Test
- Join a red team
- Conduct adversary simulations
- Build custom tooling
- Contribute to community
- Mentor others
- Present at conferences
- Publish research

---

*"We don't rise to the level of our expectations; we fall to the level of our training."* - **Archilochus**

**Good luck, future red teamer! 🔴⚔️**
