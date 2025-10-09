# 100-Day Red Team Training Roadmap
## From CS Student to Junior Pentester

**Author:** Senior Red Team Operator & Hiring Manager  
**Target Audience:** CS students with Linux basics, TCP/IP, and Python knowledge  
**Timeline:** 100 days (14 weeks)  
**Commitment:** Weekdays 4hrs classwork + 2.5hrs red-team | Weekends 5hrs red-team (optional but recommended)

---

## Table of Contents
1. [Daily Timetable Template](#1-daily-timetable-template)
2. [Complete 100-Day Roadmap](#2-complete-100-day-roadmap)
3. [Tool Mastery Mapping](#3-tool-mastery-mapping)
4. [Milestones & KPIs](#4-milestones--kpis)
5. [Templates](#5-templates)
6. [Troubleshooting Guide](#6-troubleshooting-guide)
7. [Daily Mantra](#7-daily-mantra)

---

## 1) DAILY TIMETABLE TEMPLATE

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     DAILY RED TEAM TRAINING SCHEDULE                    │
│  Date: __________   Week: ___   Day: ___   Type: Weekday / Weekend     │
├─────────────────────────────────────────────────────────────────────────┤
│ TOP 3 GOALS TODAY:                                                      │
│ 1. ________________________________________________________________     │
│ 2. ________________________________________________________________     │
│ 3. ________________________________________________________________     │
├──────────┬──────────────────────────────────────────────────────────────┤
│   TIME   │                      ACTIVITY / NOTES                        │
├──────────┼──────────────────────────────────────────────────────────────┤
│ 08:00    │ [CLASSWORK] ____________________________________________     │
│ 08:30    │                                                              │
│ 09:00    │                                                              │
│ 09:30    │                                                              │
│ 10:00    │ [BREAK 10min] ___________________________________________    │
│ 10:10    │ [CLASSWORK] ____________________________________________     │
│ 10:30    │                                                              │
│ 11:00    │                                                              │
│ 11:30    │                                                              │
│ 12:00    │ [LUNCH — 60 MIN] ________________________________________    │
│ 13:00    │ [RED TEAM PRACTICE] _____________________________________    │
│ 13:30    │ Lab/Target: _____________________________________________    │
│ 14:00    │ Tools: __________________________________________________    │
│ 14:30    │                                                              │
│ 15:00    │ [BREAK 10min] ___________________________________________    │
│ 15:10    │ [RED TEAM PRACTICE] _____________________________________    │
│ 15:30    │                                                              │
│ 16:00    │                                                              │
│ 16:30    │ [HOMEWORK/REVIEW] _______________________________________    │
│ 17:00    │ END — Daily retrospective (5 min):                          │
│          │ What worked: ____________________________________________    │
│          │ Blockers: _______________________________________________    │
│          │ Tomorrow prep: __________________________________________    │
├──────────┴──────────────────────────────────────────────────────────────┤
│ TASKS COMPLETED: [ ] [ ] [ ] [ ] [ ]    Labs Done: ___  Reports: ___   │
│ CUMULATIVE: Labs: ____  Reports: ____   Confidence (1-5): ____          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 2) COMPLETE 100-DAY ROADMAP

### WEEK 1: Foundation & Environment Setup

| Day | Type | Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 1** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-15:40 BREAK<br>15:40-17:00 Homework | Setup day | Kali Linux VM + OWASP Juice Shop | VirtualBox, Kali, Docker, Burp Suite | ☑ Install Kali VM<br>☑ Deploy Juice Shop container<br>☑ Configure Burp proxy<br>☑ Test browser→Burp connection<br>☑ Take environment snapshot | Labs: 0<br>Reports: 0 | Read OWASP Top 10 2021, watch Burp Suite setup videos |
| **Day 2** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-15:40 BREAK<br>15:40-17:00 Homework | Web basics | PortSwigger Web Security Academy: "SQL injection vulnerability in WHERE clause allowing retrieval of hidden data" | Burp Suite, Browser | ☑ Complete lab<br>☑ Capture HTTP in Burp<br>☑ Test payload: `' OR 1=1--`<br>☑ Screenshot PoC<br>☑ Write 1-page report | Labs: 1 = 0+1<br>Reports: 1 = 0+1 | OWASP Juice Shop: Try "Score Board" discovery |
| **Day 3** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | XSS intro | PortSwigger: "Reflected XSS into HTML context with nothing encoded" | Burp Suite, Browser DevTools | ☑ Complete lab<br>☑ Test payload: `<script>alert(1)</script>`<br>☑ Analyze response in DevTools<br>☑ Document sanitization bypass<br>☑ Screenshot PoC | Labs: 2 = 1+1<br>Reports: 2 = 1+1 | Try XSS polyglots from OWASP cheat sheet |
| **Day 4** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Juice Shop | OWASP Juice Shop: "Score Board" + "DOM XSS" challenges | Burp Suite, Browser DevTools | ☑ Find hidden Score Board<br>☑ Exploit DOM XSS in search<br>☑ Examine client-side JS code<br>☑ Document both findings<br>☑ Practice triage notes | Labs: 4 = 2+2<br>Reports: 3 = 2+1 | Try "Admin Section" challenge |
| **Day 5** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (Weekly review)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Weekly retrospective | DVWA setup | DVWA: Install + XSS (Reflected) Low & Medium | DVWA, XAMPP/Docker, Burp Suite | ☑ Deploy DVWA locally<br>☑ Complete XSS Reflected Low<br>☑ Complete XSS Reflected Medium<br>☑ Compare difficulty levels<br>☑ Document filters bypassed | Labs: 6 = 4+2<br>Reports: 4 = 3+1 | Try DVWA Brute Force (Low) |
| **Day 6** | Weekend | 09:00-14:00 RED TEAM (5hrs)<br>14:00-15:00 LUNCH<br>15:00-17:00 Writeups | TryHackMe intro | TryHackMe: "Web Fundamentals" room | TryHackMe platform, Browser | ☑ Complete all room tasks<br>☑ HTTP methods practice<br>☑ Session management study<br>☑ Cookie manipulation exercises<br>☑ Take detailed notes | Labs: 7 = 6+1<br>Reports: 5 = 4+1 | TryHackMe "HTTP in Detail" room |
| **Day 7** | Weekend | 09:00-12:00 RED TEAM (3hrs)<br>12:00-13:00 LUNCH<br>13:00-15:00 Week review | SQL UNION | PortSwigger: "SQL injection UNION attack, determining the number of columns returned by the query" + "SQL injection UNION attack, retrieving data from other database tables" | Burp Suite, SQLMap (observe) | ☑ Complete 2 UNION labs<br>☑ Document UNION syntax<br>☑ Practice column enumeration<br>☑ Extract data systematically<br>☑ Update progress tracker | Labs: 9 = 7+2<br>Reports: 6 = 5+1 | Read PortSwigger SQL injection cheat sheet |

**Week 1 Summary:** Labs completed = 9, Reports written = 6, Tools introduced = 6

---

### WEEK 2: Web Exploitation Deep-Dive

| Day | Type | Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 8** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Blind SQLi | PortSwigger: "Blind SQL injection with conditional responses" | Burp Suite Intruder, Python | ☑ Complete blind SQLi lab<br>☑ Use Intruder for enumeration<br>☑ Script password extraction<br>☑ Document timing analysis<br>☑ Write detailed report | Labs: 10 = 9+1<br>Reports: 7 = 6+1 | Try "Blind SQLi with time delays" |
| **Day 9** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | WebGoat SQLi | WebGoat: "SQL Injection (intro)" + "SQL Injection (advanced)" | WebGoat (local), Burp Suite | ☑ Deploy WebGoat locally<br>☑ Complete intro lessons<br>☑ Complete advanced lessons<br>☑ Practice all injection types<br>☑ Document mitigation strategies | Labs: 12 = 10+2<br>Reports: 8 = 7+1 | WebGoat "Path Traversal" lessons |
| **Day 10** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Juice Shop auth | OWASP Juice Shop: "Login Admin" + "Password Strength" + "Security Question" | Burp Suite, CeWL, Python | ☑ Admin login bypass (SQLi)<br>☑ Exploit weak password<br>☑ Security question bypass<br>☑ Enumerate users<br>☑ Write combined report | Labs: 15 = 12+3<br>Reports: 9 = 8+1 | Try "JWT Issues" challenge |
| **Day 11** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | XSS variants | PortSwigger: "Stored XSS into HTML context with nothing encoded" + "DOM XSS in document.write sink using source location.search" | Burp Suite, Browser DevTools | ☑ Complete stored XSS lab<br>☑ Complete DOM XSS lab<br>☑ Compare persistence mechanisms<br>☑ Document sink analysis<br>☑ Test XSS in multiple contexts | Labs: 17 = 15+2<br>Reports: 10 = 9+1 | Try "XSS into onclick event" |
| **Day 12** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (Review)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Weekly retrospective | CSRF + Command Injection | DVWA: CSRF (Low/Medium) + Command Injection (Low/Medium) | DVWA, Burp Suite, netcat | ☑ CSRF token analysis<br>☑ Bypass CSRF protections<br>☑ Command injection exploitation<br>☑ Chain command injection→reverse shell<br>☑ Document impact + remediation | Labs: 20 = 17+3<br>Reports: 11 = 10+1 | Try File Upload bypass |
| **Day 13** | Weekend | 09:00-14:00 RED TEAM (5hrs)<br>14:00-15:00 LUNCH<br>15:00-17:00 Writeups | OWASP Top 10 | TryHackMe: "OWASP Top 10" room | TryHackMe platform, Burp Suite | ☑ Complete all 10 vulnerability tasks<br>☑ Practice each vuln type hands-on<br>☑ Document real-world examples<br>☑ Map to CVEs<br>☑ Update knowledge base | Labs: 21 = 20+1<br>Reports: 12 = 11+1 | TryHackMe "OWASP Juice Shop" room |
| **Day 14** | Weekend | 09:00-12:00 RED TEAM (3hrs)<br>12:00-13:00 LUNCH<br>13:00-15:00 Week review | File path + Access Control | PortSwigger: "File path traversal, simple case" + "File path traversal, traversal sequences blocked with absolute path bypass" + "Unprotected admin functionality" | Burp Suite, curl | ☑ Complete 3 labs<br>☑ Path traversal practice<br>☑ Test filter bypasses<br>☑ IDOR exploitation<br>☑ Weekly progress update | Labs: 24 = 21+3<br>Reports: 13 = 12+1 | Try "Lab: URL-based access control" |

**Week 2 Summary:** Labs completed = 24 (cumulative), Reports written = 13 (cumulative), New tools = WebGoat, CeWL

---

### WEEK 3: Network Reconnaissance & Initial Access

| Day | Type | Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 15** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | First VulnHub | VulnHub: "Kioptrix: Level 1 (#1)" | Nmap, Nikto, Metasploit, Searchsploit | ☑ Download/deploy VM locally<br>☑ Network scan: `nmap -sV -sC`<br>☑ Service enumeration<br>☑ Exploit Samba/Apache vuln<br>☑ Document full methodology | Labs: 25 = 24+1<br>Reports: 14 = 13+1 | Research CVE-2002-0082 manually |
| **Day 16** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Nmap mastery | TryHackMe: "Nmap" room | Nmap, Wireshark | ☑ Complete all tasks<br>☑ Practice NSE scripts<br>☑ Service version detection<br>☑ OS fingerprinting<br>☑ Document all scan types | Labs: 26 = 25+1<br>Reports: 15 = 14+1 | Practice: `nmap --script vuln` |
| **Day 17** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Metasploit | TryHackMe: "Metasploit: Introduction" room | Metasploit Framework, msfvenom, msfconsole | ☑ MSF basics (workspaces, db)<br>☑ Exploit module usage<br>☑ Payload generation with msfvenom<br>☑ Post-exploitation intro<br>☑ Practice on lab targets | Labs: 27 = 26+1<br>Reports: 16 = 15+1 | Generate various payloads for practice |
| **Day 18** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Advanced VulnHub | VulnHub: "FristiLeaks: 1.3" | Nmap, Gobuster, Burp Suite, Python | ☑ Full recon + enumeration<br>☑ Web directory fuzzing<br>☑ File upload filter bypass<br>☑ Privilege escalation (sudoers)<br>☑ Full writeup with screenshots | Labs: 28 = 27+1<br>Reports: 17 = 16+1 | Research PHP file upload bypasses |
| **Day 19** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (Review)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Weekly retrospective | Web enumeration | TryHackMe: "Web Enumeration" room | Gobuster, ffuf, wfuzz, Burp Suite | ☑ Directory brute-forcing techniques<br>☑ Virtual host discovery<br>☑ Parameter fuzzing<br>☑ Compare tool performance<br>☑ Build custom wordlists | Labs: 29 = 28+1<br>Reports: 18 = 17+1 | Create personalized wordlist with CeWL |
| **Day 20** | Weekend | 09:00-14:00 RED TEAM (5hrs)<br>14:00-15:00 LUNCH<br>15:00-17:00 Writeups | HTB Starting Point | Hack The Box: Starting Point "Meow" + "Fawn" | Nmap, Telnet, FTP, Hydra | ☑ Setup HTB account (free)<br>☑ Complete "Meow" (telnet)<br>☑ Complete "Fawn" (FTP)<br>☑ Document methodology<br>☑ Practice professional reporting | Labs: 31 = 29+2<br>Reports: 19 = 18+1 | Try HTB "Dancing" machine |
| **Day 21** | Weekend | 09:00-12:00 RED TEAM (3hrs)<br>12:00-13:00 LUNCH<br>13:00-15:00 Week review | SMB enumeration | VulnHub: "Basic Pentesting: 1" | Nmap, enum4linux, smbclient, Hydra, John | ☑ Full reconnaissance<br>☑ SMB enumeration deep-dive<br>☑ Password cracking workflow<br>☑ SSH brute-force (Hydra)<br>☑ Complete professional writeup | Labs: 32 = 31+1<br>Reports: 20 = 19+1 | Practice enum4linux on HTB machines |

**Week 3 Summary:** Labs = 32, Reports = 20, New tools = Nmap, Metasploit, Gobuster, ffuf, enum4linux, Hydra, John

---

### WEEK 4: Privilege Escalation & Automation Foundations

| Day | Type | Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 22** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Linux PrivEsc | TryHackMe: "Linux PrivEsc" room | LinPEAS, LinEnum, GTFOBins, Python | ☑ Complete all room tasks<br>☑ SUID binary exploitation<br>☑ Sudo misconfiguration abuse<br>☑ Cron job manipulation<br>☑ Document all techniques | Labs: 33 = 32+1<br>Reports: 21 = 20+1 | Practice on "Basic Pentesting" VM |
| **Day 23** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Windows PrivEsc | TryHackMe: "Windows PrivEsc" room | PowerUp.ps1, WinPEAS, Metasploit | ☑ Complete all tasks<br>☑ Service exploitation<br>☑ Registry key abuse<br>☑ Token impersonation<br>☑ AlwaysInstallElevated | Labs: 34 = 33+1<br>Reports: 22 = 21+1 | Research Windows UAC bypasses |
| **Day 24** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Multi-vector VulnHub | VulnHub: "Stapler: 1" | Nmap, Gobuster, Metasploit, LinPEAS | ☑ Multi-service reconnaissance<br>☑ Identify all attack vectors<br>☑ Initial access (FTP/SMB/Web)<br>☑ Lateral movement<br>☑ Root privilege escalation | Labs: 35 = 34+1<br>Reports: 23 = 22+1 | Try alternate exploitation paths |
| **Day 25** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Python recon tool | Custom Python script: Port scanner + banner grabber | Python, socket, subprocess, csv | ☑ Build TCP port scanner<br>☑ Add banner grabbing<br>☑ HTTP header enumeration<br>☑ Output to CSV format<br>☑ GitHub repo + documentation | Labs: 36 = 35+1<br>Reports: 23 (tool doc) | Add threading for speed improvement |
| **Day 26** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (Review)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Weekly retrospective | Python SQLi tool | Custom Python script: SQLi vulnerability tester | Python, requests, BeautifulSoup | ☑ Build error-based SQLi detector<br>☑ Boolean-based blind detection<br>☑ Test on Juice Shop/DVWA<br>☑ False positive handling<br>☑ Document code + usage | Labs: 37 = 36+1<br>Reports: 24 = 23+1 | Add time-based blind SQLi detection |
| **Day 27** | Weekend | 09:00-14:00 RED TEAM (5hrs)<br>14:00-15:00 LUNCH<br>15:00-17:00 Writeups | HTB expansion | Hack The Box: Starting Point "Dancing" + "Redeemer" | Nmap, smbclient, redis-cli, smbmap | ☑ Complete "Dancing" (SMB shares)<br>☑ Complete "Redeemer" (Redis)<br>☑ SMB enumeration deep-dive<br>☑ Redis exploitation techniques<br>☑ Professional writeups for both | Labs: 39 = 37+2<br>Reports: 25 = 24+1 | HTB "Explosion" machine |
| **Day 28** | Weekend | 09:00-12:00 RED TEAM (3hrs)<br>12:00-13:00 LUNCH<br>13:00-15:00 Month review | WordPress + PrivEsc | VulnHub: "Mr-Robot: 1" | Nmap, WPScan, Hydra, John, Nmap | ☑ WordPress reconnaissance<br>☑ User enumeration (WPScan)<br>☑ Password cracking (Hydra+John)<br>☑ Full shell exploitation<br>☑ Privilege escalation to root | Labs: 40 = 39+1<br>Reports: 26 = 25+1 | Try "Lord of the Root" VulnHub VM |

**Week 4 Summary:** Labs = 40, Reports = 26, Tools added = LinPEAS, WinPEAS, WPScan, Custom Python tools

**Month 1 Complete - Cumulative KPIs:**
- Labs completed: 40
- Reports written: 26
- VulnHub VMs rooted: 6
- HTB machines: 4
- Custom tools built: 2
- Confidence target: 3/5

---

### WEEK 5: Active Directory Basics & Network Services

| Day | Type| Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 29** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | AD fundamentals | TryHackMe: "Active Directory Basics" room | AD concepts (no tools yet) | ☑ AD architecture study<br>☑ Domain controllers<br>☑ LDAP + Kerberos basics<br>☑ User/group/OU structure<br>☑ Document AD terminology | Labs: 41 = 40+1<br>Reports: 27 = 26+1 | Read Microsoft AD documentation |
| **Day 30** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | AD enumeration | TryHackMe: "Enumerating Active Directory" room | BloodHound, SharpHound, PowerView, ldapsearch | ☑ BloodHound setup + usage<br>☑ SharpHound collection<br>☑ LDAP enumeration<br>☑ Visualize attack paths<br>☑ Document trust relationships | Labs: 42 = 41+1<br>Reports: 28 = 27+1 | Practice BloodHound queries |
| **Day 31** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED| **Day 31** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | AD attacks | TryHackMe: "Attacking Kerberos" room | Kerbrute, Rubeus, Impacket | ☑ Kerberos authentication flow<br>☑ ASREPRoasting<br>☑ Kerberoasting<br>☑ Ticket manipulation<br>☑ Document attack vectors | Labs: 43 = 42+1<br>Reports: 29 = 28+1 | Research Golden/Silver tickets |
| **Day 32** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | SMB deep-dive | TryHackMe: "Network Services" room | smbclient, enum4linux, smbmap, rpcclient | ☑ SMB protocol analysis<br>☑ Null session exploitation<br>☑ Share enumeration<br>☑ RPC enumeration<br>☑ Document all techniques | Labs: 44 = 43+1<br>Reports: 30 = 29+1 | Practice on previous VulnHub VMs |
| **Day 33** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (Review)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Weekly retrospective | NFS + SMTP | TryHackMe: "Network Services 2" room | showmount, nfs-common, smtp-user-enum | ☑ NFS enumeration + mounting<br>☑ SMTP user enumeration<br>☑ MySQL remote access<br>☑ Service-specific exploits<br>☑ Write combined report | Labs: 45 = 44+1<br>Reports: 31 = 30+1 | Try manual SMTP commands with telnet |
| **Day 34** | Weekend | 09:00-14:00 RED TEAM (5hrs)<br>14:00-15:00 LUNCH<br>15:00-17:00 Writeups | AD lab machine | VulnHub: "Vulnerable AD Lab" or HTB "Active" (retired) | BloodHound, Impacket, Responder, Mimikatz | ☑ Full AD attack chain<br>☑ Credential harvesting<br>☑ Lateral movement<br>☑ Domain admin compromise<br>☑ Full professional report | Labs: 46 = 45+1<br>Reports: 32 = 31+1 | Research NTLM relay attacks |
| **Day 35** | Weekend | 09:00-12:00 RED TEAM (3hrs)<br>12:00-13:00 LUNCH<br>13:00-15:00 Week review | Buffer overflow intro | TryHackMe: "Buffer Overflow Prep" room (first 2 tasks) | Immunity Debugger, mona.py, msfvenom | ☑ Stack overflow theory<br>☑ EIP control<br>☑ Badchar identification<br>☑ Shellcode generation<br>☑ Document methodology | Labs: 47 = 46+1<br>Reports: 33 = 32+1 | Read "Smashing the Stack for Fun and Profit" |

**Week 5 Summary:** Labs = 47, Reports = 33, Tools added = BloodHound, Kerbrute, Impacket, Responder

---

### WEEK 6: Advanced Web & API Testing

| Day | Type | Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 36** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | XXE attacks | PortSwigger: "Exploiting XXE using external entities to retrieve files" + "Exploiting XXE to perform SSRF attacks" | Burp Suite, XML parsers | ☑ Complete both XXE labs<br>☑ File disclosure via XXE<br>☑ SSRF through XXE<br>☑ Out-of-band XXE<br>☑ Document mitigation | Labs: 49 = 47+2<br>Reports: 34 = 33+1 | Try blind XXE techniques |
| **Day 37** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | SSRF deep-dive | PortSwigger: "Basic SSRF against the local server" + "SSRF with blacklist-based input filter bypass" | Burp Suite, curl | ☑ Complete 2 SSRF labs<br>☑ Bypass URL filters<br>☑ Access internal services<br>☑ Cloud metadata exploitation<br>☑ Write detailed report | Labs: 51 = 49+2<br>Reports: 35 = 34+1 | Research SSRF in cloud environments |
| **Day 38** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Deserialization | PortSwigger: "Modifying serialized objects" + "Using application functionality to exploit insecure deserialization" | Burp Suite, ysoserial, Python pickle | ☑ Complete 2 deserialization labs<br>☑ Object injection<br>☑ PHP/Java serialization<br>☑ Chain exploitation<br>☑ Document attack surface | Labs: 53 = 51+2<br>Reports: 36 = 35+1 | Study language-specific serialization |
| **Day 39** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | API testing | OWASP Juice Shop API challenges + PortSwigger API testing labs | Burp Suite, Postman, curl, jwt.io | ☑ REST API enumeration<br>☑ JWT manipulation<br>☑ API authentication bypass<br>☑ Rate limit testing<br>☑ Document API vulns | Labs: 55 = 53+2<br>Reports: 37 = 36+1 | Try GraphQL injection attacks |
| **Day 40** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (Review)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Weekly retrospective | Authentication | PortSwigger: "Username enumeration via different responses" + "Password reset poisoning" + "2FA bypass" | Burp Suite Intruder, Python | ☑ Complete 3 auth labs<br>☑ Username enumeration<br>☑ Password reset flaws<br>☑ MFA bypass techniques<br>☑ OAuth vulnerabilities | Labs: 58 = 55+3<br>Reports: 38 = 37+1 | Research session management flaws |
| **Day 41** | Weekend | 09:00-14:00 RED TEAM (5hrs)<br>14:00-15:00 LUNCH<br>15:00-17:00 Writeups | API security | TryHackMe: "OWASP API Security Top 10" room | Burp Suite, Postman, OWASP ZAP | ☑ Complete all 10 API risks<br>☑ Broken object level authorization<br>☑ Mass assignment<br>☑ Excessive data exposure<br>☑ Professional API report | Labs: 59 = 58+1<br>Reports: 39 = 38+1 | Build custom API fuzzer in Python |
| **Day 42** | Weekend | 09:00-12:00 RED TEAM (3hrs)<br>12:00-13:00 LUNCH<br>13:00-15:00 Week review | JWT deep-dive | Custom lab: JWT exploitation practice | jwt_tool, Burp Suite JWT plugin | ☑ Algorithm confusion (RS256→HS256)<br>☑ None algorithm attack<br>☑ Key confusion<br>☑ JKU/KID injection<br>☑ Update knowledge base | Labs: 60 = 59+1<br>Reports: 40 = 39+1 | Practice JWT cracking with hashcat |

**Week 6 Summary:** Labs = 60, Reports = 40, Tools added = jwt_tool, Postman, ysoserial

---

### WEEK 7: Wireless & Cloud Security Basics

| Day | Type | Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 43** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | WiFi basics | TryHackMe: "Wifi Hacking 101" room | Aircrack-ng suite (theory), Wireshark | ☑ WiFi protocol fundamentals<br>☑ WEP/WPA/WPA2 overview<br>☑ Handshake capture theory<br>☑ Deauthentication attacks<br>☑ Document attack vectors | Labs: 61 = 60+1<br>Reports: 41 = 40+1 | Read WiFi security whitepapers |
| **Day 44** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Cloud intro | TryHackMe: "Introduction to AWS" room | AWS CLI, AWS console (free tier) | ☑ AWS fundamentals<br>☑ IAM concepts<br>☑ S3 bucket enumeration<br>☑ EC2 basics<br>☑ Cloud security misconfigs | Labs: 62 = 61+1<br>Reports: 42 = 41+1 | Create free AWS account + explore |
| **Day 45** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | S3 buckets | Practice lab: S3 bucket enumeration | aws-cli, s3scanner, bucket-stream | ☑ S3 bucket discovery<br>☑ ACL misconfiguration<br>☑ Public bucket enumeration<br>☑ Data exfiltration simulation<br>☑ Document findings | Labs: 63 = 62+1<br>Reports: 43 = 42+1 | Try AWS IAM privilege escalation scenarios |
| **Day 46** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Docker security | TryHackMe: "Docker Security" room or local Docker labs | Docker, docker-compose, Trivy | ☑ Container fundamentals<br>☑ Docker escape techniques<br>☑ Privileged containers<br>☑ Image vulnerability scanning<br>☑ Document container security | Labs: 64 = 63+1<br>Reports: 44 = 43+1 | Practice mounting host filesystem |
| **Day 47** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (Review)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Weekly retrospective | Kubernetes basics | TryHackMe: "Introduction to Kubernetes" room | kubectl, k9s | ☑ Kubernetes architecture<br>☑ Pod enumeration<br>☑ RBAC analysis<br>☑ Exposed API servers<br>☑ Document K8s attack surface | Labs: 65 = 64+1<br>Reports: 45 = 44+1 | Setup minikube locally for practice |
| **Day 48** | Weekend | 09:00-14:00 RED TEAM (5hrs)<br>14:00-15:00 LUNCH<br>15:00-17:00 Writeups | Web challenge | VulnHub: "Sunset: Midnight" | Nmap, Gobuster, MySQL, Hydra | ☑ Full reconnaissance<br>☑ MySQL enumeration<br>☑ Web exploitation<br>☑ Privilege escalation<br>☑ Professional writeup | Labs: 66 = 65+1<br>Reports: 46 = 45+1 | Try "Sunset: Decoy" VM |
| **Day 49** | Weekend | 09:00-12:00 RED TEAM (3hrs)<br>12:00-13:00 LUNCH<br>13:00-15:00 Week review | Python tooling | Custom Python: Subdomain enumeration tool | Python, dnspython, requests, threading | ☑ Build subdomain brute-forcer<br>☑ Add DNS resolution<br>☑ HTTP status checking<br>☑ Threading implementation<br>☑ GitHub documentation | Labs: 67 = 66+1<br>Reports: 46 (tool doc) | Add certificate transparency logs parsing |

**Week 7 Summary:** Labs = 67, Reports = 46, Tools added = AWS CLI, Docker, kubectl

---

### WEEK 8: Exploitation Development & Binary Analysis

| Day | Type | Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 50** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Buffer overflow 1 | TryHackMe: "Buffer Overflow Prep" (tasks 3-5) | Immunity Debugger, mona.py, msfvenom | ☑ Complete 3 more BoF challenges<br>☑ Perfect EIP overwrite<br>☑ JMP ESP technique<br>☑ NOP sled usage<br>☑ Document full exploit chain | Labs: 68 = 67+1<br>Reports: 47 = 46+1 | Practice without mona.py (manual) |
| **Day 51** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Buffer overflow 2 | TryHackMe: "Buffer Overflow Prep" (tasks 6-8) | Immunity Debugger, mona.py, msfvenom | ☑ Complete remaining BoF tasks<br>☑ Different badchar scenarios<br>☑ Shell stabilization<br>☑ Exploit reliability<br>☑ Write comprehensive report | Labs: 69 = 68+1<br>Reports: 48 = 47+1 | Try building reverse shell manually |
| **Day 52** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Brainpan | VulnHub: "Brainpan: 1" | Immunity Debugger, Metasploit, Python | ☑ Full machine exploitation<br>☑ Custom BoF exploit<br>☑ Linux privilege escalation<br>☑ Complete kill chain<br>☑ Professional report | Labs: 70 = 69+1<br>Reports: 49 = 48+1 | Research ASLR/DEP bypass techniques |
| **Day 53** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Format strings | Practice lab: Format string vulnerabilities | GDB, pwntools (Python) | ☑ Format string theory<br>☑ Memory leak via %x<br>☑ Arbitrary write<br>☑ GOT overwrite<br>☑ Document exploitation | Labs: 71 = 70+1<br>Reports: 50 = 49+1 | Read "The Art of Exploitation" chapter |
| **Day 54** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (Review)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Weekly retrospective | Reverse engineering | TryHackMe: "Reversing ELF" room | GDB, radare2, Ghidra | ☑ Complete all tasks<br>☑ Static analysis practice<br>☑ Dynamic analysis<br>☑ Crackme challenges<br>☑ Document methodology | Labs: 72 = 71+1<br>Reports: 51 = 50+1 | Try analyzing real malware (VirusTotal) |
| **Day 55** | Weekend | 09:00-14:00 RED TEAM (5hrs)<br>14:00-15:00 LUNCH<br>15:00-17:00 Writeups | HTB challenge | Hack The Box: "Shocker" (retired) or Starting Point "Tactics" | Nmap, Nikto, Burp Suite, Shellshock | ☑ Shellshock exploitation<br>☑ CGI vulnerability analysis<br>☑ Post-exploitation<br>☑ Privilege escalation<br>☑ Full writeup | Labs: 73 = 72+1<br>Reports: 52 = 51+1 | Research other Bash vulnerabilities |
| **Day 56** | Weekend | 09:00-12:00 RED TEAM (3hrs)<br>12:00-13:00 LUNCH<br>13:00-15:00 Week review | Python exploit | Custom Python: Exploit template builder | Python, pwntools, struct | ☑ Build exploit template generator<br>☑ Payload encoding functions<br>☑ Shellcode library<br>☑ Testing framework<br>☑ GitHub + documentation | Labs: 74 = 73+1<br>Reports: 52 (tool doc) | Add ROP chain generator |

**Week 8 Summary:** Labs = 74, Reports = 52, Tools added = Immunity Debugger, pwntools, Ghidra, radare2

---

### WEEK 9: Post-Exploitation & Lateral Movement

| Day | Type | Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 57** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Post-exploitation | TryHackMe: "Post-Exploitation Basics" room | Meterpreter, Empire, Covenant | ☑ Persistence mechanisms<br>☑ Credential harvesting<br>☑ Pivoting setup<br>☑ Data exfiltration<br>☑ Document techniques | Labs: 75 = 74+1<br>Reports: 53 = 52+1 | Research living-off-the-land binaries |
| **Day 58** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Pivoting | TryHackMe: "Wreath" network (Day 1) | Metasploit, Chisel, sshuttle | ☑ Network pivoting fundamentals<br>☑ Port forwarding<br>☑ SSH tunneling<br>☑ Proxychains setup<br>☑ Document pivot techniques | Labs: 76 = 75+1<br>Reports: 54 = 53+1 | Practice double pivoting scenarios |
| **Day 59** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Pivoting continued | TryHackMe: "Wreath" network (Day 2) | Metasploit, Chisel, Evil-WinRM | ☑ Multi-hop pivoting<br>☑ Lateral movement<br>☑ Credential reuse<br>☑ Complete network<br>☑ Professional report | Labs: 77 = 76+1<br>Reports: 55 = 54+1 | Try Ligolo-ng for pivoting |
| **Day 60** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | C2 frameworks | Practice lab: Covenant/Sliver setup (lab VMs only) | Covenant, Sliver, Mythic | ☑ C2 infrastructure basics<br>☑ Listener setup<br>☑ Agent deployment (lab only)<br>☑ Task execution<br>☑ Evasion basics | Labs: 78 = 77+1<br>Reports: 56 = 55+1 | Research C2 detection methods |
| **Day 61** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (Review)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Weekly retrospective | Mimikatz deep-dive | TryHackMe: "Dumping Windows Credentials" or local AD lab | Mimikatz, Impacket secretsdump, pypykatz | ☑ LSASS dumping<br>☑ SAM database extraction<br>☑ LSA secrets<br>☑ Ticket extraction<br>☑ Document defenses | Labs: 79 = 78+1<br>Reports: 57 = 56+1 | Research LSASS protection bypasses |
| **Day 62** | Weekend | 09:00-14:00 RED TEAM (5hrs)<br>14:00-15:00 LUNCH<br>15:00-17:00 Writeups | AD lab machine | VulnHub: "OSCP-like" VM or HTB "Forest" (retired) | Full toolkit | ☑ Complete AD exploitation<br>☑ Full attack chain<br>☑ Multiple privilege escalation<br>☑ Domain takeover<br>☑ Professional pentest report | Labs: 80 = 79+1<br>Reports: 58 = 57+1 | Build your own AD lab with VirtualBox |
| **Day 63** | Weekend | 09:00-12:00 RED TEAM (3hrs)<br>12:00-13:00 LUNCH<br>13:00-15:00 Week review | Report writing | Mock penetration test report | Markdown, LaTeX, or LibreOffice | ☑ Executive summary<br>☑ Technical findings<br>☑ Risk ratings (CVSS)<br>☑ Remediation recommendations<br>☑ Professional formatting | Labs: 80<br>Reports: 59 = 58+1 | Review real pentest report templates |

**Week 9 Summary:** Labs = 80, Reports = 59, Tools added = Chisel, Covenant/Sliver, Mimikatz

**Midpoint Check (Day 63):**
- Labs completed: 80
- Reports written: 59
- VulnHub VMs: ~12
- HTB machines: ~8
- Custom tools: 5
- Confidence target: 4/5

---

### WEEK 10: Web Security Advanced & Mobile Basics

| Day | Type | Time Blocks | Activity | Lab/Target | Tools | Tasks | Cumulative | Fallback |
|-----|------|-------------|----------|------------|-------|-------|------------|----------|
| **Day 64** | Weekday | 08:00-10:00 Classwork (CSC473+CSC410)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC413)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Race conditions | PortSwigger: "Limit overrun race conditions" + "Multi-endpoint race conditions" | Burp Suite Turbo Intruder, Python threading | ☑ Complete 2 race condition labs<br>☑ Turbo Intruder usage<br>☑ Multi-threaded attacks<br>☑ TOCTOU exploitation<br>☑ Document timing windows | Labs: 82 = 80+2<br>Reports: 60 = 59+1 | Build Python race condition tester |
| **Day 65** | Weekday | 08:00-10:00 Classwork (CSC411+CSC471)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC410)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | WebSockets | PortSwigger: WebSocket labs + OWASP Juice Shop WebSocket challenges | Burp Suite, wscat, Python websocket | ☑ WebSocket hijacking<br>☑ CSRF via WebSocket<br>☑ Message manipulation<br>☑ Authentication bypass<br>☑ Document findings | Labs: 84 = 82+2<br>Reports: 61 = 60+1 | Build WebSocket fuzzer |
| **Day 66** | Weekday | 08:00-10:00 Classwork (CSC412+CSC413)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC470+CSC471)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | GraphQL | OWASP Juice Shop GraphQL + public GraphQL endpoints | Burp Suite, GraphQL Voyager, Altair | ☑ GraphQL introspection<br>☑ Query manipulation<br>☑ Batching attacks<br>☑ Authorization bypass<br>☑ Document vulnerabilities | Labs: 85 = 84+1<br>Reports: 62 = 61+1 | Research GraphQL injection patterns |
| **Day 67** | Weekday | 08:00-10:00 Classwork (CSC470+CSC412)<br>10:00-10:10 BREAK<br>10:10-12:00 Classwork (CSC473+CSC411)<br>12:00-13:00 LUNCH<br>13:00-15:30 RED TEAM<br>15:30-17:00 Homework | Mobile OWASP | OWASP Mobile Top 10 study + DIVA Android app | Android Studio, ADB, Frida, Objection | ☑ Setup Android emulator
