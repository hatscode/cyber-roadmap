# 🎯 Red Team Tool Mastery Roadmap
## *Master 1-2 Essential Tools Per Week*

> **Philosophy**: Deep mastery over broad surface knowledge. Each week focuses on truly understanding and becoming proficient with core tools before moving forward.

---

## 📅 12-Week Intensive Program

### **Week 1: Nmap - The Foundation**
**Goal**: Master network reconnaissance and enumeration

**Days 1-3: Core Scanning Techniques**
- Basic host discovery: `-sn`, `-sP`, ping sweeps
- Port scanning modes: `-sS`, `-sT`, `-sU`, `-sA`
- Service detection: `-sV` with intensity levels
- OS detection: `-O` and banner grabbing
- **Practice**: Scan your lab network with 10+ different scan combinations

**Days 4-5: NSE Scripts Mastery**
- Learn NSE script categories: vuln, exploit, discovery, auth
- Master key scripts: `smb-enum-shares`, `http-enum`, `ssl-cert`
- Create custom scan profiles for different scenarios
- **Practice**: Run vulnerability scans using NSE scripts

**Days 6-7: Advanced Techniques & Output**
- Timing templates: `-T0` through `-T5` for stealth vs speed
- Firewall/IDS evasion: fragmentation, decoys, spoofing
- Output formats: `-oN`, `-oX`, `-oG` for parsing
- Integration with Metasploit: `db_nmap`
- **Challenge**: Map entire lab network with comprehensive documentation

---

### **Week 2: Metasploit Framework - Exploitation Engine**
**Goal**: Master the exploitation framework

**Days 1-2: Framework Architecture**
- Database setup: `msfdb init` and workspace management
- Module types: exploits, auxiliary, payloads, encoders, post
- Core commands: `search`, `use`, `show`, `set`, `run`
- **Practice**: Navigate framework without looking up commands

**Days 3-4: Exploitation Workflow**
- Vulnerability scanning with auxiliary modules
- Exploit selection and configuration
- Payload generation and handlers
- Session management and interaction
- **Practice**: Exploit 5+ different vulnerabilities in lab

**Days 5-7: Advanced Metasploit**
- Meterpreter commands and post-exploitation
- Pivoting with `autoroute` and `portfwd`
- Resource scripts for automation
- Custom module development basics
- **Challenge**: Create automated exploit chain with resource script

---

### **Week 3: Burp Suite - Web Application Security**
**Goal**: Master web app testing platform

**Days 1-2: Proxy and Interception**
- Browser configuration and certificate setup
- HTTP/HTTPS interception and modification
- Understanding request/response structure
- Match and replace rules
- **Practice**: Intercept and modify 20+ requests

**Days 3-4: Scanner and Intruder**
- Active and passive scanning
- Intruder attack types: sniper, battering ram, pitchfork, cluster bomb
- Payload processing and grep extract
- **Practice**: Perform SQL injection and XSS discovery

**Days 5-7: Advanced Features**
- Repeater for manual testing
- Sequencer for session token analysis
- Collaborator for SSRF/XXE detection
- Extension development with Python/Java
- **Challenge**: Complete web app pentest from recon to exploitation

---

### **Week 4: PowerShell - Windows Offensive Operations**
**Goal**: Master PowerShell for red team ops

**Days 1-2: Fundamentals**
- Cmdlet syntax and pipeline operations
- Objects and properties manipulation
- Remote execution with `Invoke-Command`
- Script execution policies and bypasses
- **Practice**: Write 10 enumeration scripts

**Days 3-4: Active Directory Enumeration**
- `Get-ADUser`, `Get-ADGroup`, `Get-ADComputer`
- Domain trust enumeration
- ACL and permission analysis
- GPO enumeration
- **Practice**: Build complete AD enumeration script

**Days 5-7: Offensive PowerShell**
- PowerView for domain reconnaissance
- Invoke-Mimikatz for credential dumping
- PowerShell Empire basics
- AMSI bypass techniques
- Obfuscation with Invoke-Obfuscation
- **Challenge**: Create weaponized PowerShell toolkit

---

### **Week 5: BloodHound - Active Directory Attack Paths**
**Goal**: Master AD attack path analysis

**Days 1-2: Setup and Data Collection**
- Neo4j database installation and configuration
- SharpHound collector deployment
- Collection methods: `All`, `DCOnly`, `Session`
- **Practice**: Collect data from lab domain

**Days 3-4: Graph Analysis**
- Built-in queries for attack path discovery
- Understanding relationships: AdminTo, MemberOf, HasSession
- Shortest path to Domain Admins
- Kerberoastable and AS-REP roastable users
- **Practice**: Identify 5+ attack paths in your domain

**Days 5-7: Advanced Techniques**
- Custom Cypher queries
- ACL abuse path identification
- Computer object takeover paths
- Creating realistic attack scenarios
- **Challenge**: Document complete compromise path from user to DA

---

### **Week 6: Impacket - Network Protocol Exploitation**
**Goal**: Master Python-based network tools

**Days 1-2: Remote Execution**
- `psexec.py` for SMB-based execution
- `wmiexec.py` for WMI command execution
- `smbexec.py` for fileless attacks
- `atexec.py` for scheduled task execution
- **Practice**: Gain shells using each method

**Days 3-4: Credential Attacks**
- `GetUserSPNs.py` for Kerberoasting
- `GetNPUsers.py` for AS-REP roasting
- `secretsdump.py` for credential dumping
- **Practice**: Extract all credentials from lab domain

**Days 5-7: Advanced Protocols**
- `ntlmrelayx.py` for SMB relay attacks
- `getST.py` for Silver Ticket creation
- `ticketer.py` for Golden Ticket attacks
- MSSQL exploitation with `mssqlclient.py`
- **Challenge**: Execute complete Kerberos attack chain

---

### **Week 7: Mimikatz - Credential Access Master**
**Goal**: Master Windows credential extraction

**Days 1-2: Basic Credential Dumping**
- `privilege::debug` and permission requirements
- `sekurlsa::logonpasswords` for plaintext passwords
- `sekurlsa::msv` for NTLM hashes
- `sekurlsa::wdigest` for Wdigest credentials
- **Practice**: Dump credentials from multiple machines

**Days 3-4: Kerberos Attacks**
- `kerberos::list` for ticket enumeration
- `kerberos::ptt` for pass-the-ticket
- `kerberos::golden` for Golden Ticket creation
- `kerberos::silver` for Silver Ticket creation
- **Practice**: Create and use Kerberos tickets

**Days 5-7: Advanced Techniques**
- `lsadump::dcsync` for domain replication
- `lsadump::sam` for local account extraction
- `vault::cred` for Windows Vault passwords
- Token manipulation and impersonation
- Evasion techniques and obfuscation
- **Challenge**: Achieve domain persistence with tickets

---

### **Week 8: CrackMapExec - Network Enumeration Swiss Army Knife**
**Goal**: Master lateral movement and enumeration

**Days 1-2: Protocol Basics**
- SMB enumeration and authentication
- Password spraying across subnets
- Share enumeration and access
- **Practice**: Map all accessible shares in network

**Days 3-4: Command Execution**
- Remote command execution methods
- Module usage for common tasks
- Credential harvesting automation
- **Practice**: Execute commands on 10+ machines

**Days 5-7: Advanced Features**
- Database integration for tracking
- Custom module development
- BloodHound integration
- Credential validation and testing
- **Challenge**: Automate complete network compromise

---

### **Week 9: Cobalt Strike / Sliver - Command & Control**
**Goal**: Master C2 framework operations

**Days 1-2: Infrastructure Setup**
- Team server installation and configuration
- Listener creation (HTTP, HTTPS, DNS)
- Payload generation and delivery
- **Practice**: Deploy and catch multiple beacons

**Days 3-4: Beacon Operations**
- Core beacon commands
- File upload/download operations
- Process injection techniques
- Credential harvesting from beacon
- **Practice**: Operate 5+ simultaneous beacons

**Days 5-7: Advanced Operations**
- Pivoting through compromised hosts
- SOCKS proxy configuration
- Lateral movement via beacon
- Post-exploitation modules
- Evasion and OpSec considerations
- **Challenge**: Establish full C2 infrastructure in lab

---

### **Week 10: Responder & NTLMRelayx - Network Poisoning**
**Goal**: Master man-in-the-middle attacks

**Days 1-2: Responder Fundamentals**
- LLMNR/NBT-NS poisoning mechanics
- Capture NTLMv1/v2 hashes
- Hash relay preparation
- **Practice**: Capture credentials from network traffic

**Days 3-4: Relay Attacks**
- SMB relay with `ntlmrelayx.py`
- LDAP relay for privilege escalation
- HTTP to SMB relay chains
- **Practice**: Relay credentials to gain access

**Days 5-7: Advanced Techniques**
- WebDAV exploitation
- IPv6 attacks with mitm6
- Coercion techniques for forced authentication
- **Challenge**: Complete authentication relay attack chain

---

### **Week 11: Social Engineering Toolkit - Human Exploitation**
**Goal**: Master phishing and social engineering

**Days 1-2: Credential Harvesting**
- Website cloning and credential capture
- Phishing page customization
- Email template creation
- **Practice**: Create 5 realistic phishing scenarios

**Days 3-4: Payload Delivery**
- Malicious Office document generation
- PDF exploitation
- Executable payload wrapping
- **Practice**: Generate undetected payloads

**Days 5-7: Infrastructure**
- Email spoofing and SMTP configuration
- Domain reputation management
- Campaign tracking and analytics
- **Challenge**: Execute end-to-end phishing campaign

---

### **Week 12: Integration & Advanced Operations**
**Goal**: Combine all tools for complete operations

**Days 1-3: Red Team Operation Planning**
- MITRE ATT&CK mapping
- Rules of Engagement documentation
- Infrastructure setup and testing
- **Deliverable**: Complete operation plan

**Days 4-6: Execute Full Red Team Assessment**
- Initial access via multiple vectors
- Privilege escalation to Domain Admin
- Lateral movement across network
- Data exfiltration simulation
- **Deliverable**: Complete attack chain

**Day 7: Professional Reporting**
- Executive summary creation
- Technical findings documentation
- Remediation recommendations
- Presentation preparation
- **Deliverable**: Professional red team report

---

## 🎯 Weekly Success Metrics

Each week you should be able to:
1. **Explain** the tool's purpose and use cases
2. **Demonstrate** 10+ different techniques with the tool
3. **Troubleshoot** common errors independently
4. **Integrate** the tool into your overall workflow
5. **Teach** someone else the basics

---

## 📚 Supplementary Resources

**Daily Practice** (30 minutes minimum):
- HackTheBox machines
- TryHackMe rooms
- Proving Grounds Practice

**Weekly Challenge** (4 hours):
- Complete CTF using the week's tools
- Document methodology and findings
- Create cheat sheet for reference

**Monthly Assessment**:
- Pentest a complete lab environment
- Use only tools mastered so far
- Write professional report

---

## 🔥 Pro Tips for Mastery

1. **Document Everything**: Create personal wiki with commands, techniques, and examples
2. **Build Muscle Memory**: Practice without looking at notes until commands are automatic
3. **Break Things**: Use tools incorrectly to understand their limitations
4. **Read Source Code**: Understand how tools work under the hood
5. **Contribute**: Submit bug reports, feature requests, or pull requests
6. **Create Challenges**: Build vulnerable labs to practice specific techniques
7. **Time Yourself**: Track how fast you can achieve objectives

---

## 📊 Certification Alignment

This roadmap prepares you for:
- **OSCP** (Offensive Security Certified Professional)
- **CRTP** (Certified Red Team Professional)
- **CRTO** (Certified Red Team Operator)
- **PNPT** (Practical Network Penetration Tester)

---

## ⚖️ Legal & Ethical Reminder

✅ **ONLY** use these tools on:
- Your own lab environment
- Authorized penetration tests with signed contracts
- Legal CTF platforms and training environments

❌ **NEVER** use on systems without explicit written permission

---

*"The expert in anything was once a beginner who refused to give up."*

**Start your journey today. Master one tool at a time. Become elite.** 🔴⚔️
