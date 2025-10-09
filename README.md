# 100-Day Junior Pentester Roadmap
*From Zero to Triage-Ready Bug Hunter*

---

## Core Philosophy
- **Learn by breaking things**, not just reading
- **Document everything** (your future report templates)
- **1 vulnerability found & exploited daily** > 10 tutorials watched
- **Public disclosure mindset**: Every finding = potential writeup

---

## Weekly Tool Mastery Schedule

**Week 1-2: Reconnaissance & Enumeration**
- `nmap`, `masscan`, `rustscan`
- `gobuster`, `ffuf`, `feroxbuster`
- `subfinder`, `assetfinder`, `amass` (passive mode)
- `httpx`, `waybackurls`, `gau`

**Week 3-4: Web Exploitation Foundations**
- Burp Suite Community (master Repeater, Intruder basics, Decoder)
- `sqlmap`, `ffuf` (fuzzing parameters)
- Browser DevTools (Network, Console, Debugger)
- `curl`, `wget` with custom headers

**Week 5-6: Vulnerability-Specific Tools**
- `nuclei` (template-based scanning)
- `dalfox` (XSS hunting)
- `arjun` (parameter discovery)
- `jwt_tool`, `jq` (API testing)

**Week 7-8: Exploitation & Post-Exploitation**
- Metasploit Framework basics
- `searchsploit`, ExploitDB
- `linpeas.sh`, `pspy`
- `chisel`, basic pivoting

**Week 9-10: Advanced Web & Automation**
- Python requests library (custom scripts)
- Selenium/Playwright (automated recon)
- Custom Burp extensions (write 1 simple extension)

**Week 11-12: Mobile & API**
- `adb`, `Objection`, `Frida` basics
- `Postman`/`Insomnia` for API testing
- `mitmproxy` for mobile traffic

**Week 13-14: Polish & Portfolio**
- `ObsidianMD` or `Markdown` for writeups
- GitHub Pages for public reports
- Resume/LinkedIn optimization

---

## Daily Structure Template

```
┌─ DAILY PENTESTING LOG ─────────────────────────┐
│ Date: __________  Day: ___/100  Week: ___/14   │
│ Time Budget: [Weekday: 2.5h | Weekend: 5h]     │
├─────────────────────────────────────────────────┤
│ PHASE 1: Target Selection (10 min)             │
│ □ Target: _____________________________________│
│ □ Scope: ______________________________________│
│                                                 │
│ PHASE 2: Reconnaissance (30-45 min)            │
│ □ Subdomain enum / Directory brute             │
│ □ Tech stack identified: ______________________│
│ □ Entry points mapped: ________________________│
│                                                 │
│ PHASE 3: Vulnerability Hunting (60-90 min)     │
│ □ Injection points tested: ____________________│
│ □ Auth mechanisms probed: _____________________│
│ □ Findings: ___________________________________│
│                                                 │
│ PHASE 4: Exploitation (30-60 min)              │
│ □ PoC created: ________________________________│
│ □ Impact assessed: ____________________________│
│                                                 │
│ PHASE 5: Documentation (20-30 min)             │
│ □ Screenshots saved                             │
│ □ Report draft completed                        │
│                                                 │
│ PHASE 6: Review & Next Target (10 min)         │
│ □ What worked: ________________________________│
│ □ What failed: ________________________________│
│ □ Tomorrow's target: __________________________│
└─────────────────────────────────────────────────┘
```

---

## 100-Day Breakdown

### **WEEK 1: Web Fundamentals + PortSwigger SQL Injection**
**Goal**: Complete all SQL injection labs, understand HTTP deeply

| Day | Target | Focus | Time | Fallback if Stuck |
|-----|--------|-------|------|-------------------|
| 1 | PortSwigger: SQL Injection in WHERE | Basic SQLi | 2.5h | OWASP Juice Shop: Login bypass |
| 2 | PortSwigger: Blind SQLi (boolean) | Boolean-based | 2.5h | Manually test with `AND 1=1` vs `AND 1=2` |
| 3 | PortSwigger: Blind SQLi (time) | Time-based | 2.5h | Use `SLEEP(5)` payloads on Juice Shop |
| 4 | PortSwigger: UNION attacks | Data exfil | 2.5h | Practice `ORDER BY` technique on DVWA |
| 5 | PortSwigger: Examining database | SQLi recon | 2.5h | Read MySQL/PostgreSQL docs |
| 6 (Sat) | OWASP Juice Shop: 5 SQLi challenges | Practical hunting | 5h | Try different injection contexts (headers, JSON) |
| 7 (Sun) | VulnHub: Basic Pentesting 1 | Full machine | 5h | Focus only on web SQLi if stuck on SSH |

**KPI**: 10 SQLi labs solved, 1 VulnHub machine, 1 writeup published

---

### **WEEK 2: Authentication + XSS**
**Goal**: Bypass logins, inject JavaScript

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 8 | PortSwigger: Auth vulnerabilities (password-based) | Broken auth | 2.5h | Juice Shop: Brute force admin |
| 9 | PortSwigger: Multi-factor bypass | 2FA flaws | 2.5h | Try TOTP replay attacks on test apps |
| 10 | PortSwigger: Reflected XSS | Basic XSS | 2.5h | `<script>alert(1)</script>` in all inputs |
| 11 | PortSwigger: Stored XSS | Persistent XSS | 2.5h | Test comment sections everywhere |
| 12 | PortSwigger: DOM XSS | Client-side | 2.5h | Practice with XSS Hunter payloads |
| 13 (Sat) | TryHackMe (Free): OWASP Top 10 room | Full coverage | 5h | Skip paid tasks, focus on free challenges |
| 14 (Sun) | Juice Shop: 10 XSS + Auth challenges | Speed run | 5h | Write a Python script to automate SQLi |

**KPI**: 15 labs solved, GitHub repo with 3 XSS payloads, 1 auth bypass writeup

---

### **WEEK 3: IDOR + Access Control**
**Goal**: Find and exploit broken authorization

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 15 | PortSwigger: Vertical privilege escalation | User → Admin | 2.5h | Change user IDs in every request |
| 16 | PortSwigger: Horizontal privilege escalation | User → Other user | 2.5h | Burp Intruder on ID parameters |
| 17 | PortSwigger: IDOR examples | Direct refs | 2.5h | Enumerate `/user/1` to `/user/1000` |
| 18 | Juice Shop: All access control challenges | Practice | 2.5h | Use Burp's "Match & Replace" for roles |
| 19 | TryHackMe (Free): IDOR room | Guided practice | 2.5h | Manual testing if tooling fails |
| 20 (Sat) | VulnHub: Basic Pentesting 2 | Full machine | 5h | Focus on web IDORs, skip privilege esc |
| 21 (Sun) | Create IDOR testing checklist + 5 PoCs | Methodology | 5h | Practice on old HackerOne disclosed reports |

**KPI**: 20 total labs, reusable IDOR checklist, 2 writeups

---

### **WEEK 4: SSRF + XXE**
**Goal**: Attack server-side logic

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 22 | PortSwigger: SSRF basics | Internal services | 2.5h | Test `http://localhost` in URL params |
| 23 | PortSwigger: Blind SSRF | Out-of-band | 2.5h | Use Burp Collaborator / interact.sh |
| 24 | PortSwigger: XXE basics | XML injection | 2.5h | Test `<!DOCTYPE>` payloads on upload forms |
| 25 | PortSwigger: Blind XXE | OOB exfil | 2.5h | Host XXE payloads on your server |
| 26 | TryHackMe (Free): SSRF room | Practice | 2.5h | Read AWS metadata SSRF techniques |
| 27 (Sat) | Juice Shop: API challenges (SSRF context) | Real-world | 5h | Proxy mobile app traffic |
| 28 (Sun) | Write Python SSRF scanner | Automation | 5h | Fork existing tool and customize |

**KPI**: 25 labs total, 1 custom tool on GitHub

---

### **WEEK 5: Command Injection + File Upload**
**Goal**: Get code execution

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 29 | PortSwigger: OS command injection | RCE basics | 2.5h | Test `; whoami` in every form |
| 30 | PortSwigger: File upload vulnerabilities | Shell upload | 2.5h | Bypass: double extensions, magic bytes |
| 31 | PortSwigger: Path traversal | LFI basics | 2.5h | `../../../../etc/passwd` everywhere |
| 32 | Juice Shop: RCE challenges | Practice | 2.5h | Upload reverse shell (test locally first) |
| 33 | TryHackMe (Free): Upload Vulnerabilities room | Guided | 2.5h | Manual PHP shell upload |
| 34 (Sat) | VulnHub: Mr. Robot | Full machine | 5h | Focus on web shell upload |
| 35 (Sun) | Build file upload bypass cheatsheet | Reference | 5h | Test 20 bypass techniques |

**KPI**: 30 labs, 1 working web shell collection

---

### **WEEK 6: Business Logic + Race Conditions**
**Goal**: Think like an attacker, not just follow vuln classes

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 36 | PortSwigger: Business logic (all labs) | Logic flaws | 2.5h | Test negative values, replay requests |
| 37 | PortSwigger: Race conditions | Concurrency | 2.5h | Use Burp Turbo Intruder |
| 38 | Juice Shop: Weird behaviors | Exploration | 2.5h | Break checkout/cart logic |
| 39 | Read 10 HackerOne logic flaw reports | Learn patterns | 2.5h | Take notes on methodology |
| 40 | TryHackMe (Free): Business logic room | Practice | 2.5h | Focus on payment bypasses |
| 41 (Sat) | Build race condition testing script | Automation | 5h | Python `threading` or `asyncio` |
| 42 (Sun) | Test race conditions on 5 public apps | Real hunting | 5h | Look for gift card/coupon abuse |

**KPI**: 35 labs, race condition tool, 3 real submissions (even if duplicates)

---

### **WEEK 7: Deserialization + Template Injection**
**Goal**: Advanced exploitation

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 43 | PortSwigger: Insecure deserialization | Java/Python | 2.5h | Use ysoserial payloads |
| 44 | PortSwigger: SSTI basics | Template engines | 2.5h | Test `{{7*7}}` in every input |
| 45 | PortSwigger: Advanced SSTI | RCE via SSTI | 2.5h | Payload reference: PayloadsAllTheThings |
| 46 | TryHackMe (Free): Pickle room | Python deser | 2.5h | Write malicious pickle payload |
| 47 | Practice SSTI on intentionally vuln apps | Lab setup | 2.5h | Docker: vulnerables/web-dvwa |
| 48 (Sat) | VulnHub: Pickle Rick | Full machine | 5h | SSTI or deser path |
| 49 (Sun) | Create SSTI payload generator | Tool | 5h | Support Jinja2, Twig, FreeMarker |

**KPI**: 40 labs, 1 deserialization writeup

---

### **WEEK 8: API Security**
**Goal**: REST/GraphQL exploitation

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 50 | PortSwigger: API testing | REST basics | 2.5h | Change HTTP methods (GET→POST→PUT) |
| 51 | PortSwigger: GraphQL | Query injection | 2.5h | Introspection queries |
| 52 | TryHackMe (Free): API Hacking room | Practice | 2.5h | Mass assignment attacks |
| 53 | Juice Shop: API challenges | Real endpoints | 2.5h | Fuzz with Postman |
| 54 | Read OWASP API Security Top 10 | Theory | 2.5h | Map to real bugs you've found |
| 55 (Sat) | Test 5 public APIs for broken auth | Bug hunting | 5h | Look for missing rate limits |
| 56 (Sun) | Write API security checklist | Methodology | 5h | Template for future assessments |

**KPI**: 45 labs, API testing checklist, 2 API submissions

---

### **WEEK 9: Network Pentesting Basics**
**Goal**: Beyond web apps

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 57 | HTB Starting Point: Meow | Basic foothold | 2.5h | Telnet exploitation |
| 58 | HTB Starting Point: Fawn | FTP enumeration | 2.5h | Anonymous FTP access |
| 59 | HTB Starting Point: Dancing | SMB shares | 2.5h | `smbclient` usage |
| 60 | TryHackMe (Free): Network Services | Protocols | 2.5h | Port-by-port methodology |
| 61 | TryHackMe (Free): Nmap room | Scanning mastery | 2.5h | NSE scripts for vulns |
| 62 (Sat) | VulnHub: Kioptrix Level 1 | Classic machine | 5h | Full OSCP-style report |
| 63 (Sun) | Write network pentest report template | Documentation | 5h | Include CVE mapping section |

**KPI**: 5 HTB machines, 1 full network report

---

### **WEEK 10: Active Directory Basics**
**Goal**: Understand Windows exploitation

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 64 | TryHackMe (Free): Active Directory Basics | Concepts | 2.5h | Read theory if no lab access |
| 65 | HTB Starting Point: Explosion | RDP foothold | 2.5h | Password spraying |
| 66 | Practice with BloodHound on local AD lab | Graphing | 2.5h | VirtualBox AD setup (free) |
| 67 | Read PayloadsAllTheThings AD section | Cheatsheet | 2.5h | Kerberoasting theory |
| 68 | TryHackMe (Free): Attacktive Directory | Full path | 2.5h | AS-REP roasting practice |
| 69 (Sat) | Setup personal AD lab with 2 VMs | Infrastructure | 5h | Server 2019 trial + Win10 |
| 70 (Sun) | Practice mimikatz, Rubeus locally | Tooling | 5h | Credential dumping |

**KPI**: 2 AD machines, local lab operational

---

### **WEEK 11: Linux Privilege Escalation**
**Goal**: Root every box

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 71 | TryHackMe (Free): Linux PrivEsc room | Guided | 2.5h | SUID binaries |
| 72 | Practice linpeas.sh on 5 boxes | Enumeration | 2.5h | GTFOBins for exploits |
| 73 | VulnHub: Lin.Security | Priv esc focused | 2.5h | Kernel exploits |
| 74 | HTB Starting Point: Mongod | Enumeration → root | 2.5h | Docker escape techniques |
| 75 | Read "Linux Privilege Escalation for Beginners" | Theory | 2.5h | Create personal checklist |
| 76 (Sat) | Root 3 VulnHub machines | Speed run | 5h | Different vectors each |
| 77 (Sun) | Write automated priv esc checker script | Tool | 5h | Extend linpeas with custom checks |

**KPI**: 10 rooted machines, priv esc checklist

---

### **WEEK 12: Windows Privilege Escalation**
**Goal**: SYSTEM on every Windows box

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 78 | TryHackMe (Free): Windows PrivEsc room | Guided | 2.5h | Service misconfigurations |
| 79 | Practice WinPEAS on personal VMs | Enumeration | 2.5h | Unquoted service paths |
| 80 | HTB Starting Point: Sequel | Windows foothold | 2.5h | SQL Server exploitation |
| 81 | VulnHub: Windows machine (any) | Full path | 2.5h | Token impersonation |
| 82 | Study Potatoes (Hot, Rotten, Juicy) | Exploit family | 2.5h | When to use each |
| 83 (Sat) | Root 2 Windows VulnHub machines | Practice | 5h | Different techniques |
| 84 (Sun) | Windows priv esc cheatsheet + scripts | Reference | 5h | PowerShell one-liners |

**KPI**: 5 SYSTEM shells, Windows methodology

---

### **WEEK 13: Mobile & Thick Client**
**Goal**: Expand beyond browsers

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 85 | Setup Android emulator + mitmproxy | Tooling | 2.5h | Genymotion or Android Studio |
| 86 | TryHackMe (Free): Mobile Hacking | Basics | 2.5h | APK reverse engineering |
| 87 | Decompile 3 APKs with JADX | Analysis | 2.5h | Look for hardcoded secrets |
| 88 | Install Frida, hook simple app | Dynamic analysis | 2.5h | SSL pinning bypass |
| 89 | Test 1 real mobile app (in scope) | Bug hunting | 2.5h | Focus on API endpoints |
| 90 (Sat) | Complete 1 mobile CTF challenge | Practice | 5h | OWASP UnCrackable |
| 91 (Sun) | Mobile testing checklist + template report | Methodology | 5h | OWASP MASVS alignment |

**KPI**: 3 analyzed APKs, 1 mobile finding, mobile checklist

---

### **WEEK 14: Portfolio & Real Hunting**
**Goal**: Get paid or recognized

| Day | Target | Focus | Time | Fallback |
|-----|--------|-------|------|----------|
| 92 | Pick 3 HackerOne public programs | Recon | 2.5h | Asset discovery only |
| 93 | Deep dive Program 1 | Bug hunting | 2.5h | Focus on one vuln class |
| 94 | Deep dive Program 2 | Bug hunting | 2.5h | Test different attack surface |
| 95 | Deep dive Program 3 | Bug hunting | 2.5h | API testing |
| 96 (Sat) | Write 5 GitHub writeups from past weeks | Content creation | 5h | Medium articles alternatively |
| 97 (Sat) | Optimize LinkedIn + resume | Marketing | 3h | Use "junior pentester" keywords |
| 98 (Sun) | Submit 3 reports (even if duplicate) | Real practice | 5h | Focus on quality, not bounty |
| 99 (Sun) | Create pentest portfolio site | Showcase | 3h | GitHub Pages with writeups |
| 100 | Plan next 100 days + celebrate | Reflection | 2h | You made it. Review everything. |

**KPI**: 3 real submissions, portfolio live, resume ready

---

## Templates & Checklists

### **Triage Checklist**
```
┌─ BUG TRIAGE DECISION TREE ───────────────────────┐
│                                                   │
│ 1. IMPACT                                         │
│    □ Critical: Auth bypass, RCE, PII leak        │
│    □ High: IDOR to sensitive data, stored XSS    │
│    □ Medium: Reflected XSS, open redirect        │
│    □ Low: Info disclosure, missing headers       │
│                                                   │
│ 2. REPRODUCIBILITY                                │
│    □ 100% reliable (submit immediately)          │
│    □ >80% (document conditions)                   │
│    □ <80% (investigate more or discard)           │
│                                                   │
│ 3. SCOPE VALIDATION                               │
│    □ Explicitly in scope                          │
│    □ Gray area (ask program)                      │
│    □ Out of scope (discard)                       │
│                                                   │
│ 4. DUPLICATION CHECK                              │
│    □ Search disclosed reports                     │
│    □ Check program's recent activity              │
│    □ Unique vector/endpoint                       │
│                                                   │
│ 5. QUALITY OF POC                                 │
│    □ Video/screenshots clear                      │
│    □ Steps reproducible by non-expert             │
│    □ Exploit code included (if needed)            │
│                                                   │
│ DECISION: [SUBMIT / INVESTIGATE / DISCARD]       │
└───────────────────────────────────────────────────┘
```

---

### **Minimal Bug Report Template**
```markdown
# [VULN_TYPE] in [COMPONENT/ENDPOINT]

## Summary
[One sentence: "The X endpoint is vulnerable to Y, allowing attackers to Z"]

## Severity
**[Critical/High/Medium/Low]** - [Justify with impact]

## Steps to Reproduce
1. Navigate to: [URL]
2. Intercept request with Burp Suite
3. Modify parameter `X` to: [PAYLOAD]
4. Observe: [IMPACT]

## Proof of Concept
```http
POST /api/endpoint HTTP/1.1
Host: target.com
Content-Type: application/json

{"user_id": "1337", "role": "admin"}
```

**Screenshot**: [Attach image showing impact]

## Impact
- Attacker can [concrete action]
- Leads to [business impact]: data breach / financial loss / reputation damage

## Affected Assets
- URL: https://target.com/vulnerable/path
- Parameter: `user_id`
- Version: [if applicable]

## Mitigation
- Implement proper authorization checks
- Validate `user_id` against session
- [Specific fix recommendation]

## References
- OWASP: [relevant link]
- CWE-XXX: [classification]
```

---

### **Progress Tracker CSV Header**
```csv
Date,Day,Week,Target,Vuln_Type,Success,Time_Spent,Tools_Used,Writeup_Link,Submitted_To,Status,Notes
2025-01-01,1,1,PortSwigger SQLi Lab 1,SQL Injection,Yes,2.5h,Burp Suite,https://github.com/...,N/A,Complete,"Easy boolean-based"
2025-01-02,2,1,PortSwigger Blind SQLi,Blind SQLi,Yes,3h,sqlmap,https://github.com/...,N/A,Complete,"Time-based SLEEP()"
```

**Track daily:**
- Date, Day #, Week #
- Target platform/machine name
- Vulnerability type attempted
- Success (Yes/No/Partial)
- Time spent (for reflection)
- Tools used (build your toolkit awareness)
- Writeup link (force documentation)
- Submitted to (N/A or program name)
- Status (Complete/Stuck/In Progress)
- Notes (key learnings)

---

## Critical Success Factors

**Non-Negotiable Habits:**
1. **Document as you go** - Not after. Screenshots immediate.
2. **One writeup per week minimum** - Public or private, doesn't matter.
3. **No tutorial hell** - If you watch a video, replicate it immediately.
4. **Fail fast** - Stuck >1 hour on a single step? Use fallback or ask community.
5. **Community engagement** - Join PortSwigger Discord, HackerOne Hacktivity, /r/bugbounty.

**Weekly Review (Sunday):**
- Calculate: `(Bugs found / Days worked) * 100` = Your hunting rate %
- Update your "Best Bugs" list (top 3 vulnerabilities found)
- Plan next week's focus area based on weaknesses

**Red Flags to Avoid:**
- ❌ Spending >1 day on a single lab without progress
- ❌ Not testing on real targets by Week 6
- ❌ Zero documentation/writeups by Week 8
- ❌ Only doing "comfortable" vulnerability types after Week 10

---

## Resources (All Free)

**Primary Platforms:**
- PortSwigger Web Security Academy (unlimited free)
- OWASP Juice Shop (local deployment)
- TryHackMe Free Tier (filter "Free" rooms only)
- VulnHub (500+ machines)
- HTB Starting Point (free tier)
- HackerOne (public programs)

**Tools (All Open Source):**
- Burp Suite Community Edition
- OWASP ZAP
- Firefox + FoxyProxy
- Python 3 + requests/beautifulsoup
- Nmap, gobuster, ffuf, nikto
- Metasploit Framework (msfconsole)

**Documentation:**
- GitHub for writeups (create `pentesting-journey` repo)
- Obsidian or Notion for notes (offline-first)
- Draw.io for attack flow diagrams

**Learning Supplements:**
- OWASP Testing Guide (read 1 section per week)
- HackerOne Hacktivity (study disclosed reports daily)
- PayloadsAllTheThings GitHub (cheatsheet reference)

---

## Fallback Plan for Plateaus

**If you're stuck on a target >2 days:**
1. Switch to a different vulnerability class (SQLi → XSS)
2. Try a different platform (PortSwigger → Juice Shop)
3. Watch ONE walkthrough, then redo it without watching
4. Ask in TryHackMe Discord or /r/HowToHack

**If you find zero bugs in Week 6-8 (real hunting):**
- Drop to easier targets (older web apps)
- Focus on information disclosure (low-hanging fruit)
- Increase reconnaissance time (80% recon / 20% exploit)
- Study 10 disclosed reports in your target's tech stack

**If motivation drops:**
- Join a CTF team (CTFtime.org)
- Participate in a bug bounty event (look for "synack challenges")
- Read bug bounty success stories on Medium
- Calculate potential earnings (avg. $500/bug × your rate)

---

## Month 4 Transition (After Day 100)

You should be able to:
✅ Independently identify and exploit OWASP Top 10  
✅ Write a professional pentest report  
✅ Submit triage-able bugs to HackerOne/Bugcrowd  
✅ Root 10+ VulnHub/HTB machines  
✅ Have a public portfolio (5+ writeups)  

**Next steps:**
- Apply to junior pentest roles (even if "not ready")
- Contribute to security tools (GitHub issues)
- Mentor others (teach = solidify knowledge)
- Specialize (pick: web, mobile, cloud, AD)

---


## Closing Motivation

You are about to embark on a transformative journey. In 100 days, you won't just have new skills—you'll have a new way of seeing technology, understanding systems, and solving problems. 

The path will be challenging. You'll feel stuck. You'll feel stupid. You'll question whether you're cut out for this. **These feelings are not stop signs—they're mile markers on the road to mastery.**

Every expert pentester you admire started exactly where you are now: confused, overwhelmed, and uncertain. The only difference between them and you is **they kept showing up.** They documented their confusion. They practiced through frustration. They submitted reports despite fear of rejection.

This roadmap is your guide, not your prison. Adjust it as needed. Take breaks when necessary. Celebrate small wins. Help others when you can. Build in public. Share your journey.

**100 days from now, you won't be perfect. But you'll be formidable.**

Now close this document, open Day 1's tasks, and begin.

Your future self is counting on you to start today.

---

**🚀 Begin Day 1 now. Document everything. Trust the process. You've got this.**

---

*Remember: The best time to start was yesterday. The second best time is now. Stop reading. Start doing. Day 1 awaits.*