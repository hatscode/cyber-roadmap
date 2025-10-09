# 100-DAY JUNIOR PENTESTER TRAINING PROGRAM
**Professional Red-Team Skills Roadmap (Day 1-100)**

---

## WEEK 1 (Days 1-7): Foundation & Environment Setup

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 1 | CSC473, CSC410, CSC411, CSC471 | Environment setup, Linux hardening review, OWASP Top 10 overview | Kali Linux, VirtualBox/VMware, Nmap, Wireshark | Local lab network setup, DVWA installation |
| 2 | CSC470, CSC412, CSC413, CSC473 | SQL Injection basics, manual injection techniques | Burp Suite Community, sqlmap, curl | PortSwigger — SQL Injection (Introduction), DVWA — SQL Injection (Low) |
| 3 | CSC410, CSC411, CSC471, CSC470 | Cross-Site Scripting (XSS) fundamentals | Burp Suite, Browser DevTools, XSS Hunter (self-hosted) | PortSwigger — Reflected XSS labs, OWASP Juice Shop — XSS Tier 1 |
| 4 | CSC412, CSC413, CSC473, CSC410 | HTTP fundamentals, proxy interception, parameter tampering | Burp Suite, OWASP ZAP, curl, Postman | DVWA — All modules (Low security), manual parameter fuzzing |
| 5 | CSC411, CSC471, CSC470, Review | CSRF, session management basics | Burp Suite Repeater, Cookie Editor | PortSwigger — CSRF labs, WebGoat — CSRF module |
| 6 | Weekend | Web fundamentals consolidation, information gathering | Nmap, Nikto, dirb, gobuster, whatweb | TryHackMe — Web Fundamentals, OWASP WebGoat — General module |
| 7 | Weekend | Basic Linux enumeration, first full VM | Nmap, netcat, enum4linux, smbclient | VulnHub — Basic Pentesting 1 (full walkthrough + writeup) |

**Week 1 Cumulative KPIs:** Labs completed: 7 | Reports written: 2 | Tools mastered: 8

---

## WEEK 2 (Days 8-14): Reconnaissance & Network Enumeration

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 8 | CSC473, CSC410, CSC411, CSC471 | Advanced Nmap scanning, NSE scripts | Nmap, masscan, NSE scripts, AutoRecon | TryHackMe — Nmap room, custom NSE script practice |
| 9 | CSC470, CSC412, CSC413, CSC473 | Passive reconnaissance, OSINT basics | theHarvester, Shodan CLI, recon-ng, Sublist3r, Amass | TryHackMe — OSINT room, Google Dorking exercises |
| 10 | CSC410, CSC411, CSC471, CSC470 | Directory brute-forcing, content discovery | gobuster, ffuf, dirsearch, feroxbuster | PortSwigger — Directory traversal labs, DVWA — File Inclusion |
| 11 | CSC412, CSC413, CSC473, CSC410 | Service enumeration (SMB, FTP, SSH) | enum4linux, smbclient, smbmap, hydra | VulnHub — Kioptrix Level 1, TryHackMe — Network Services |
| 12 | CSC411, CSC471, CSC470, Review | Authentication attacks, brute-forcing | hydra, medusa, John the Ripper, hashcat | PortSwigger — Authentication labs, TryHackMe — Authentication Bypass |
| 13 | Weekend | Full reconnaissance methodology | All recon tools, CherryTree/Obsidian for notes | HackTheBox — Starting Point (Tier 0 — Meow, Fawn) |
| 14 | Weekend | Vulnerability scanning, report writing | Nessus Essentials, OpenVAS, Nikto | VulnHub — Kioptrix Level 1 (complete + sanitized report) |

**Week 2 Cumulative KPIs:** Labs completed: 14 | Reports written: 4 | Tools mastered: 18

---

## WEEK 3 (Days 15-21): Web Application Exploitation (Advanced)

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 15 | CSC473, CSC410, CSC411, CSC471 | SQL Injection (Blind, Time-based) | sqlmap, Burp Suite Intruder, manual payloads | PortSwigger — Blind SQL Injection labs, DVWA — SQL Injection (Medium) |
| 16 | CSC470, CSC412, CSC413, CSC473 | Stored XSS, DOM-based XSS | Burp Suite, DOM Invader, browser console | PortSwigger — Stored XSS labs, OWASP Juice Shop — XSS Tier 2-3 |
| 17 | CSC410, CSC411, CSC471, CSC470 | XML External Entity (XXE) injection | Burp Suite, custom XXE payloads | PortSwigger — XXE labs, WebGoat — XXE module |
| 18 | CSC412, CSC413, CSC473, CSC410 | Server-Side Request Forgery (SSRF) | Burp Suite Collaborator, Webhook.site | PortSwigger — SSRF labs, custom SSRF practice |
| 19 | CSC411, CSC471, CSC470, Review | Insecure deserialization | ysoserial, Burp extensions | PortSwigger — Deserialization labs, Java deserialization practice |
| 20 | Weekend | File upload vulnerabilities, RCE via upload | Weevely, PHP reverse shells, exiftool | PortSwigger — File Upload labs, DVWA — File Upload (all levels) |
| 21 | Weekend | Command injection, OS command execution | Burp Suite, netcat, reverse shell payloads | PortSwigger — OS Command Injection labs, TryHackMe — Command Injection |

**Week 3 Cumulative KPIs:** Labs completed: 21 | Reports written: 6 | Tools mastered: 24

---

## WEEK 4 (Days 22-28): Privilege Escalation & Post-Exploitation Basics

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 22 | CSC473, CSC410, CSC411, CSC471 | Linux privilege escalation enumeration | LinPEAS, LinEnum, pspy, GTFOBins | TryHackMe — Linux PrivEsc room, VulnHub — FristiLeaks 1.3 |
| 23 | CSC470, CSC412, CSC413, CSC473 | SUID/SGID exploitation, cron jobs | find, pspy, crontab enumeration | TryHackMe — Linux PrivEsc (continued), manual exploit practice |
| 24 | CSC410, CSC411, CSC471, CSC470 | Windows privilege escalation enumeration | WinPEAS, PowerUp, Sherlock, accesschk | TryHackMe — Windows PrivEsc room, local Windows VM |
| 25 | CSC412, CSC413, CSC473, CSC410 | Windows service exploitation, token impersonation | Metasploit (lab only), accesschk, Sysinternals Suite | TryHackMe — Windows PrivEsc (continued), HackTheBox — Legacy |
| 26 | CSC411, CSC471, CSC470, Review | Metasploit Framework basics (lab only) | Metasploit Framework, msfvenom, meterpreter | Metasploitable 2, TryHackMe — Metasploit room |
| 27 | Weekend | Reverse shells, bind shells, stabilization | netcat, socat, rlwrap, Python pty | VulnHub — Mr-Robot 1, shell stabilization practice |
| 28 | Weekend | Post-exploitation: data exfiltration, persistence (lab only) | nc, scp, Python HTTP server, cron persistence | TryHackMe — Post-Exploitation Basics, practice labs |

**Week 4 Cumulative KPIs:** Labs completed: 28 | Reports written: 8 | Tools mastered: 35

---

## WEEK 5 (Days 29-35): Active Directory Basics & Windows Attacks

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 29 | CSC473, CSC410, CSC411, CSC471 | Active Directory fundamentals, enumeration | PowerView, BloodHound, SharpHound, ldapsearch | TryHackMe — Active Directory Basics, local AD lab setup |
| 30 | CSC470, CSC412, CSC413, CSC473 | Kerberos attacks: Kerberoasting | Rubeus, GetUserSPNs.py (Impacket), hashcat | TryHackMe — Attacktive Directory, Kerberoasting practice |
| 31 | CSC410, CSC411, CSC471, CSC470 | AS-REP Roasting, password spraying | Rubeus, kerbrute, crackmapexec | TryHackMe — Attacktive Directory (continued), spray attacks |
| 32 | CSC412, CSC413, CSC473, CSC410 | Pass-the-Hash, Pass-the-Ticket (lab only) | Impacket suite (psexec.py, wmiexec.py), Mimikatz | TryHackMe — Lateral Movement room, lab practice |
| 33 | CSC411, CSC471, CSC470, Review | SMB relay attacks, NTLM relay (lab only) | Responder, ntlmrelayx.py, crackmapexec | TryHackMe — Breaching Active Directory, relay practice |
| 34 | Weekend | BloodHound analysis, attack path enumeration | BloodHound, Neo4j, SharpHound, custom Cypher queries | TryHackMe — Breaching AD (continued), BloodHound analysis |
| 35 | Weekend | Full AD enumeration to domain compromise | All AD tools, comprehensive documentation | TryHackMe — Throwback network (Day 1-2 only) |

**Week 5 Cumulative KPIs:** Labs completed: 35 | Reports written: 10 | Tools mastered: 45

---

## WEEK 6 (Days 36-42): Advanced Web Exploitation & API Testing

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 36 | CSC473, CSC410, CSC411, CSC471 | Advanced SQLi: Union, Out-of-band | sqlmap, Burp Suite, custom payloads | PortSwigger — Advanced SQL Injection labs |
| 37 | CSC470, CSC412, CSC413, CSC473 | NoSQL injection (MongoDB, CouchDB) | NoSQLMap, Burp Suite, manual payloads | PortSwigger — NoSQL Injection labs, TryHackMe — NoSQL Injection |
| 38 | CSC410, CSC411, CSC471, CSC470 | API testing: REST, GraphQL | Postman, curl, Arjun, GraphQL Voyager | TryHackMe — API Hacking room, PortSwigger — API testing labs |
| 39 | CSC412, CSC413, CSC473, CSC410 | JWT vulnerabilities, token manipulation | jwt_tool, Burp JWT extensions, Python jwt library | PortSwigger — JWT labs, TryHackMe — JWT room |
| 40 | CSC411, CSC471, CSC470, Review | OAuth/OIDC attacks, misconfiguration | Burp Suite, OAuth extensions | PortSwigger — OAuth labs, real-world OAuth flow analysis |
| 41 | Weekend | WebSockets security, real-time communication attacks | Burp Suite, wscat, custom scripts | PortSwigger — WebSockets labs, practice applications |
| 42 | Weekend | CORS misconfigurations, origin bypass | Burp Suite, custom HTML PoC | PortSwigger — CORS labs, OWASP Juice Shop — CORS challenges |

**Week 6 Cumulative KPIs:** Labs completed: 42 | Reports written: 12 | Tools mastered: 52

---

## WEEK 7 (Days 43-49): Scripting Automation & Custom Exploit Development

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 43 | CSC473, CSC410, CSC411, CSC471 | Python for pentesting: requests, BeautifulSoup | Python 3, requests library, custom scripts | Write custom port scanner, HTTP fuzzer |
| 44 | CSC470, CSC412, CSC413, CSC473 | Python exploit development: buffer overflow basics | Python struct, pwntools, gdb | VulnHub — Brainpan 1 (intro buffer overflow) |
| 45 | CSC410, CSC411, CSC471, CSC470 | Bash scripting for automation | bash, awk, sed, grep | Write enumeration automation script, wrapper scripts |
| 46 | CSC412, CSC413, CSC473, CSC410 | PowerShell for Windows attacks (lab only) | PowerShell, Empire framework basics | TryHackMe — PowerShell room, custom PowerShell scripts |
| 47 | CSC411, CSC471, CSC470, Review | Web scraping, custom recon tools | Scrapy, BeautifulSoup, Selenium | Build custom subdomain enumerator, screenshot tool |
| 48 | Weekend | Parse and analyze logs, SIEM basics | grep, awk, Python pandas, Splunk Free | TryHackMe — Splunk rooms, log analysis challenges |
| 49 | Weekend | Custom exploit chain: recon to RCE | All scripting tools | VulnHub — stapler 1 (full chain with custom scripts) |

**Week 7 Cumulative KPIs:** Labs completed: 49 | Reports written: 15 | Tools mastered: 60

---

## WEEK 8 (Days 50-56): Cloud Security & Container Basics

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 50 | CSC473, CSC410, CSC411, CSC471 | AWS basics, S3 bucket enumeration | AWS CLI, s3scanner, cloud_enum | TryHackMe — AWS room, flAWS.cloud challenge |
| 51 | CSC470, CSC412, CSC413, CSC473 | Azure enumeration, misconfigurations | Azure CLI, AADInternals, MicroBurst | TryHackMe — Azure room, public Azure testing labs |
| 52 | CSC410, CSC411, CSC471, CSC470 | GCP security basics | gcloud CLI, GCPBucketBrute, ScoutSuite | Free GCP tier enumeration practice |
| 53 | CSC412, CSC413, CSC473, CSC410 | Docker security, container escape (lab only) | Docker, docker-bench-security, container escape techniques | TryHackMe — Docker room, vulnerable container practice |
| 54 | CSC411, CSC471, CSC470, Review | Kubernetes basics, misconfigurations | kubectl, kube-hunter, kubeletctl | TryHackMe — Kubernetes room (if available), local k8s lab |
| 55 | Weekend | Cloud IAM exploitation, privilege escalation | Pacu (AWS), PowerZure, custom scripts | CloudGoat scenarios (free AWS labs) |
| 56 | Weekend | Serverless security, Lambda/Functions | AWS CLI, custom payloads | CloudGoat serverless scenarios |

**Week 8 Cumulative KPIs:** Labs completed: 56 | Reports written: 17 | Tools mastered: 70

---

## WEEK 9 (Days 57-63): Wireless, Mobile & IoT Basics

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 57 | CSC473, CSC410, CSC411, CSC471 | Wi-Fi security basics, WPA2 cracking | aircrack-ng suite, Wireshark, hcxtools | TryHackMe — WiFi Hacking 101, local practice (owned network only) |
| 58 | CSC470, CSC412, CSC413, CSC473 | Wireless packet analysis | Wireshark, tshark, Kismet | Analyze captured wireless traffic (legal samples) |
| 59 | CSC410, CSC411, CSC471, CSC470 | Mobile app testing basics (Android) | apktool, jadx, Frida, adb | TryHackMe — Mobile room, InsecureBankv2 APK |
| 60 | CSC412, CSC413, CSC473, CSC410 | Mobile API interception | Burp Suite, Genymotion/Android emulator, SSL pinning bypass | DVIA (Damn Vulnerable iOS App), Android proxy setup |
| 61 | CSC411, CSC471, CSC470, Review | IoT security, embedded device testing | Binwalk, firmware-mod-kit, UART/Serial basics | TryHackMe — IoT room, RouterSploit practice |
| 62 | Weekend | Bluetooth security basics | btscanner, bluez tools, Bettercap | Local Bluetooth enumeration (owned devices only) |
| 63 | Weekend | RFID/NFC basics, physical security awareness | Proxmark3 (theory), NFC Tools | Theory and documentation review |

**Week 9 Cumulative KPIs:** Labs completed: 63 | Reports written: 19 | Tools mastered: 82

---

## WEEK 10 (Days 64-70): Red Team Operations & C2 Frameworks (Lab Only)

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 64 | CSC473, CSC410, CSC411, CSC471 | Command & Control basics, C2 setup (lab only) | Covenant, Sliver, Mythic | TryHackMe — C2 rooms, local lab C2 deployment |
| 65 | CSC470, CSC412, CSC413, CSC473 | Payload generation, obfuscation (lab only) | msfvenom, Veil, Invoke-Obfuscation | Generate and test obfuscated payloads in lab |
| 66 | CSC410, CSC411, CSC471, CSC470 | Living-off-the-land binaries (LOLBins) | LOLBAS project, GTFOBins, manual techniques | TryHackMe — Red Team Fundamentals, Windows lab |
| 67 | CSC412, CSC413, CSC473, CSC410 | Lateral movement techniques (lab only) | Impacket, CrackMapExec, WMI, PSExec | TryHackMe — Red Team Recon, lateral movement labs |
| 68 | CSC411, CSC471, CSC470, Review | Persistence mechanisms (lab only) | Registry keys, scheduled tasks, WMI subscriptions | Windows persistence lab practice |
| 69 | Weekend | Evasion techniques: AV/EDR bypass (lab only) | AMSITrigger, DefenderCheck, custom encoding | Local Windows Defender bypass testing (lab) |
| 70 | Weekend | Red Team engagement simulation | All C2/red team tools | TryHackMe — Red Team Capstone or similar network |

**Week 10 Cumulative KPIs:** Labs completed: 70 | Reports written: 21 | Tools mastered: 95

---

## WEEK 11 (Days 71-77): Reporting, Documentation & Portfolio Building

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 71 | CSC473, CSC410, CSC411, CSC471 | Professional report writing | Markdown, LaTeX, Ghostwriter | Review and rewrite 3 existing lab reports |
| 72 | CSC470, CSC412, CSC413, CSC473 | CVSS scoring, risk assessment | CVSS calculator, OWASP Risk Rating | Practice scoring 10 vulnerabilities from past labs |
| 73 | CSC410, CSC411, CSC471, CSC470 | Remediation recommendations | Research best practices | Add remediation sections to 5 reports |
| 74 | CSC412, CSC413, CSC473, CSC410 | GitHub portfolio organization | Git, GitHub, Markdown | Organize all writeups, create structured repo |
| 75 | CSC411, CSC471, CSC470, Review | Create video walkthroughs | OBS Studio, video editing basics | Record 2-3 lab walkthroughs for portfolio |
| 76 | Weekend | Build professional resume, LinkedIn | Resume templates, LinkedIn optimization | Create pentester-focused resume with metrics |
| 77 | Weekend | Blog setup, writeup publication | Hugo/Jekyll, GitHub Pages | Publish 3 sanitized writeups to personal blog |

**Week 11 Cumulative KPIs:** Labs completed: 77 | Reports written: 30 | Tools mastered: 100

---

## WEEK 12 (Days 78-84): Bug Bounty Preparation & Live Practice

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 78 | CSC473, CSC410, CSC411, CSC471 | Bug bounty platforms overview | HackerOne, Bugcrowd research | Review public disclosed reports, pattern analysis |
| 79 | CSC470, CSC412, CSC413, CSC473 | Scope analysis, target selection | Recon tools, manual analysis | Practice scope review on 5 HackerOne programs |
| 80 | CSC410, CSC411, CSC471, CSC470 | Reconnaissance for bug bounties | Amass, Subfinder, httpx, nuclei | Deep recon on 2 practice targets |
| 81 | CSC412, CSC413, CSC473, CSC410 | Low-hanging fruit hunting | All web tools, Burp Suite | Focus on info disclosure, misconfiguration on practice targets |
| 82 | CSC411, CSC471, CSC470, Review | Responsible disclosure process | Email templates, HackerOne/Bugcrowd platforms | Draft 3 sample disclosure reports |
| 83 | Weekend | Full bug bounty practice | All tools | HackerOne CTF, public bug bounty programs (test environments) |
| 84 | Weekend | Triaging practice, duplicate prevention | Recon pipelines, research | Analyze recent disclosed bugs, learn triage patterns |

**Week 12 Cumulative KPIs:** Labs completed: 84 | Reports written: 35 | Tools mastered: 105

---

## WEEK 13 (Days 85-91): Advanced Practice & Specialization

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 85 | CSC473, CSC410, CSC411, CSC471 | Choose specialization deep-dive (web/AD/cloud) | Specialized toolsets | Advanced PortSwigger labs or AD attack chains |
| 86 | CSC470, CSC412, CSC413, CSC473 | Advanced exploitation chains | Custom scripts, multiple tools | VulnHub — HarryPotter: Aragog or similar |
| 87 | CSC410, CSC411, CSC471, CSC470 | CTF practice, time-pressure scenarios | All tools, time management | PicoCTF or similar ongoing CTF |
| 88 | CSC412, CSC413, CSC473, CSC410 | Vulnerable by design apps | All web tools | Complete OWASP Juice Shop 100% or similar |
| 89 | CSC411, CSC471, CSC470, Review | Mock penetration test | Full toolkit, professional reporting | VulnHub — complete multi-host network |
| 90 | Weekend | HackTheBox machines | All tools, detailed notes | HackTheBox — 2 Medium-rated retired machines |
| 91 | Weekend | Advanced exploitation practice | Metasploit, manual exploits | Exploit-DB practice, manual exploit modification |

**Week 13 Cumulative KPIs:** Labs completed: 91 | Reports written: 40 | Tools mastered: 110

---

## WEEK 14 (Days 92-100): Final Push, Interview Prep & Job Applications

| Day | Course Units | Red-Team Focus | Tools | Lab/Target |
|-----|-------------|----------------|-------|------------|
| 92 | CSC473, CSC410, CSC411, CSC471 | Interview preparation: technical questions | Research, mock interviews | Prepare answers to 50 common pentesting interview questions |
| 93 | CSC470, CSC412, CSC413, CSC473 | Live demonstration prep | VirtualBox, presentation tools | Prepare 3 live exploit demonstrations for interviews |
| 94 | CSC410, CSC411, CSC471, CSC470 | Portfolio final polish | GitHub, blog, resume | Final review and polish all materials |
| 95 | CSC412, CSC413, CSC473, CSC410 | Job applications preparation | LinkedIn, job boards | Identify 20 target companies, customize applications |
| 96 | CSC411, CSC471, CSC470, Review | Mock penetration test final | All tools | Complete professional pentest on complex VulnHub network |
| 97 | Weekend | Bug bounty submission practice | All tools, platforms | Attempt to find and submit 2-3 valid bugs on permitted programs |
| 98 | Weekend | Final skills assessment | All tools | TryHackMe — Offensive Pentesting path completion |
| 99 | Weekend | Networking, community engagement | Twitter/X, LinkedIn, Discord | Connect with security community, share writeups |
| 100 | Final Day | Final review, celebration, Day 101 planning | Portfolio review | Complete final checklist, submit applications |

**Week 14 Cumulative KPIs:** Labs completed: 100+ | Reports written: 45+ | Tools mastered: 115+

---

## JOB-READINESS KPI FORMULA (Day 100 Target)

**Formula:** `Job_Ready = (Labs ≥ 100) AND (Reports ≥ 40) AND (Tools ≥ 110) AND (GitHub_Commits ≥ 50) AND (Bug_Submissions ≥ 3) AND (Video_Demos ≥ 3)`

**Arithmetic Verification:**
- Labs completed: 100 (7+7+7+7+7+7+7+7+7+7+7+7+7+16 = 100) ✓
- Reports written: 45 (accumulating 2-5 per week) ✓
- Tools mastered: 115+ ✓
- GitHub commits: 50+ (portfolio building from Week 11) ✓
- Bug submissions: 3-5 (attempted in Weeks 12-14) ✓
- Video demonstrations: 3+ (Week 11) ✓

---

## TOOL MASTERY DEMONSTRATION EXERCISES (Per Week)

**Week 1:** Submit complete DVWA SQL Injection (all levels) writeup with Burp Suite traffic screenshots  
**Week 2:** Produce full Nmap NSE scan report with custom script execution on VulnHub target  
**Week 3:** Create working XXE exploit with full payload explanation and impact documentation  
**Week 4:** Document complete Linux privilege escalation path using LinPEAS output analysis  
**Week 5:** Generate BloodHound graph showing attack path to Domain Admin with analysis  
**Week 6:** Develop custom Python tool for JWT token manipulation with test cases  
**Week 7:** Build automated reconnaissance script combining 5+ tools with JSON output  
**Week 8:** Complete AWS S3 bucket enumeration with findings report using cloud_enum  
**Week 9:** Analyze Android APK with Frida hooks showing API interception  
**Week 10:** Deploy C2 infrastructure in lab and demonstrate beacon callback with screenshots  
**Week 11:** Produce professional pentest report with executive summary, technical findings, CVSS scores  
**Week 12:** Submit responsible disclosure to practice program with complete documentation  
**Week 13:** Complete HackTheBox Medium machine with detailed root.txt writeup  
**Week 14:** Deliver 15-minute technical interview demonstration showing live exploitation  

---

## TEMPLATES (COPY/PASTE READY)

### PROGRESS TRACKER CSV HEADER
```
date,day,lab_name,platform,tool_used,hours,tasks_completed,blocked,blocker_note,labs_cumulative,reports_cumulative,confidence,notes,writeup_link
```

### MINIMAL BUG REPORT TEMPLATE
```
TITLE: [Vulnerability Type] in [Feature/Endpoint]

TARGET: [URL/Application/Version]

SEVERITY: [Critical/High/Medium/Low/Info] | CVSS: [Score]

STEPS TO REPRODUCE:
1. 
2. 
3. 

IMPACT:
[Business impact, security consequence]

PROOF OF CONCEPT (LAB ONLY):
[Screenshot/curl command/payload]

REMEDIATION:
[Specific fix recommendation]

ATTACHMENTS:
[Screenshots, logs, videos]
```

### TRIAGE CHECKLIST
```
□ Is this a real vulnerability or expected behavior?
□ Can I reliably reproduce it 3+ times?
□ Is it in scope for the program?
□ Have I checked for duplicates in disclosed reports?
□ Does my PoC demonstrate actual security impact?
□ Is my report clear, concise, and actionable?
□ Have I sanitized all sensitive data?
□ Did I include CVSS score and remediation advice?
```

---

## WHAT TO DO IF STUCK

1. **Lab won't work:** Check walkthrough hints, verify VM network settings, reset lab environment
2. **Exploit fails:** Review payload encoding, check target version, consult Exploit-DB comments
3. **Can't escalate privileges:** Re-run enumeration scripts, check for missed SUID binaries, review GTFOBins
4. **Time pressure:** Skip to fallback exercise, return later; don't waste >2 hours on single task
5. **Concept unclear:** Read OWASP WSTG section, watch IppSec video, consult tool documentation
6. **Burn out risk:** Take mandatory rest day, do lighter task (documentation, report writing)
7. **Tool errors:** Check version compatibility, review GitHub issues, use alternative tool
8. **Report rejected:** Study similar accepted reports, improve technical detail, clarify impact

---

## DAILY MANTRA (3 LINES)

**"Every exploit I learn today makes me more valuable tomorrow."**  
**"Legal labs only—build skills that get jobs, not trouble."**  
**"Demonstrate, document, deliver—hiring managers want proof, not promises."**

---

**END OF 100-DAY ROADMAP**  
**Day 101: Begin job applications with completed portfolio, professional resume, and demonstrable skills. You are ready.**
