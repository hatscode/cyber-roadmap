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

**Week 1: Foundation & Lab Environment Setup**

**Day 1 - Red Team Lab Environment**
- Install VMware Workstation or VirtualBox
- Download and install Kali Linux as attacking machine
- Download Windows Server 2019 evaluation ISO
- Install Windows Server 2019 VM with 4GB RAM
- Configure network adapters for isolated lab network
(Tools: VMware/VirtualBox)

**Day 2 - Active Directory Lab Setup**
- Promote Windows Server to Domain Controller
- Create new forest with domain name lab.local
- Configure DNS settings on Domain Controller
- Install Active Directory Users and Computers tools
- Create 5 test user accounts in Active Directory
(Tools: Active Directory)

**Day 3 - Additional Lab Machines**
- Install Windows 10 VM as domain workstation
- Join Windows 10 machine to lab.local domain
- Install Ubuntu Server VM for Linux targets
- Configure static IP addresses for all VMs
- Test connectivity between all lab machines
(Tools: Windows, Linux)

**Day 4 - Network Scanning Basics**
- Install nmap on Kali Linux
- Run nmap -sn 192.168.x.0/24 for host discovery
- Perform nmap -sV -sC on Domain Controller
- Scan for SMB with nmap -p 445 --script smb-os-discovery
- Document all open ports and services found
(Tools: nmap)

**Day 5 - Metasploit Framework Introduction**
- Launch msfconsole on Kali Linux
- Learn basic Metasploit commands: search, use, show options
- Search for SMB exploits with search smb
- Practice setting RHOSTS and LHOST parameters
- Run db_nmap scan and store results in database
(Tools: Metasploit)

**Day 6 - PowerShell Fundamentals**
- Open PowerShell on Windows machines
- Learn basic cmdlets: Get-Help, Get-Command, Get-Process
- Practice Get-ADUser to enumerate domain users
- Use Get-ADComputer to list domain computers
- Write simple PowerShell script to enumerate domain
(Tools: PowerShell)

**Day 7 - Week Review & Reconnaissance Practice**
- Run complete network scan of lab environment
- Enumerate all services on Domain Controller
- List all Active Directory users and computers
- Document network topology and trust relationships
- Create reconnaissance methodology checklist
(Tools: nmap, PowerShell)

**Week 2: Credential Access & Initial Compromise**

**Day 8 - Password Attacks Introduction**
- Install Hydra for credential brute-forcing
- Create small password list with common passwords
- Run hydra -L users.txt -P passwords.txt smb://DC-IP
- Install CrackMapExec tool
- Test crackmapexec smb 192.168.x.0/24 for SMB enumeration
(Tools: Hydra, CrackMapExec)

**Day 9 - Hash Cracking Basics**
- Install Hashcat on Kali Linux
- Learn NTLM hash format for Windows
- Create test NTLM hash from known password
- Run hashcat -m 1000 hash.txt rockyou.txt
- Practice cracking with different attack modes
(Tools: Hashcat)

**Day 10 - Responder & LLMNR Poisoning**
- Install Responder tool on Kali
- Run responder -I eth0 -wf on lab network
- Trigger LLMNR request from Windows 10 client
- Capture NTLMv2 hash from poisoned response
- Crack captured hash with Hashcat
(Tools: Responder, Hashcat)

**Day 11 - SMB Relay Attacks**
- Install impacket toolkit
- Disable SMB signing on Windows 10 client for testing
- Set up ntlmrelayx.py to relay captured credentials
- Trigger authentication and relay to another host
- Gain command execution through relayed authentication
(Tools: impacket, Responder)

**Day 12 - Phishing Simulation Basics**
- Install Social Engineering Toolkit (SET)
- Create credential harvester attack in SET
- Generate phishing page clone of fake internal portal
- Test credential capture on yourself
- Learn phishing email headers and detection evasion
(Tools: SET)

**Day 13 - Initial Access via Services**
- Scan for vulnerable services with nmap NSE scripts
- Use Metasploit to exploit EternalBlue on Windows 7 VM (add to lab)
- Practice exploiting known CVEs in lab environment
- Gain initial shell access on target machine
- Document exploitation process step-by-step
(Tools: Metasploit, nmap)

**Day 14 - Week Review & Credential Harvesting**
- Run LLMNR poisoning attack in lab
- Capture and crack credentials
- Use valid credentials with CrackMapExec
- Test password spraying against domain accounts
- Document all credential access techniques
(Tools: Responder, CrackMapExec, Hashcat)

**Week 3: Post-Exploitation & Privilege Escalation**

**Day 15 - Windows Privilege Escalation Basics**
- Complete TryHackMe "Windows PrivEsc" room
- Install WinPEAS on target Windows machine
- Run winPEASany.exe and review output
- Look for unquoted service paths
- Check for weak service permissions with accesschk.exe
(Tools: WinPEAS)

**Day 16 - Service Exploitation for Privilege Escalation**
- Identify vulnerable service with sc qc servicename
- Replace service binary with malicious executable
- Generate payload with msfvenom -p windows/x64/shell_reverse_tcp
- Restart service and catch elevated shell
- Practice on multiple vulnerable services
(Tools: msfvenom, Metasploit)

**Day 17 - Token Impersonation**
- Learn about Windows access tokens and privileges
- Use Metasploit's incognito module
- List available tokens with list_tokens -u
- Impersonate SYSTEM or Administrator token
- Practice token manipulation techniques
(Tools: Metasploit, incognito)

**Day 18 - Mimikatz Introduction**
- Download and run Mimikatz on compromised Windows machine
- Execute privilege::debug and sekurlsa::logonpasswords
- Dump NTLM hashes from LSASS memory
- Extract Kerberos tickets with sekurlsa::tickets
- Save credentials for later use
(Tools: Mimikatz)

**Day 19 - Pass-the-Hash Attacks**
- Use captured NTLM hash with CrackMapExec
- Execute crackmapexec smb IP -u user -H hash
- Use impacket's psexec.py with NTLM hash
- Gain access without cracking password
- Practice lateral movement with Pass-the-Hash
(Tools: CrackMapExec, impacket)

**Day 20 - Linux Privilege Escalation**
- Install vulnerable Linux VM for practice
- Run LinPEAS enumeration script
- Check for sudo misconfigurations with sudo -l
- Look for SUID binaries with find / -perm -4000 2>/dev/null
- Exploit vulnerable SUID binary to get root
(Tools: LinPEAS)

**Day 21 - Week Review & Complete Privilege Escalation Path**
- Compromise low-privilege account on Windows machine
- Enumerate privilege escalation vectors
- Escalate to SYSTEM privileges
- Dump all credentials with Mimikatz
- Document complete attack chain
(Tools: WinPEAS, Mimikatz, Metasploit)

**Week 4: Active Directory Attacks**

**Day 22 - Active Directory Enumeration**
- Install BloodHound and neo4j database
- Install SharpHound data collector
- Run SharpHound.exe -c All on domain-joined machine
- Import collected data into BloodHound
- Analyze attack paths to Domain Admins
(Tools: BloodHound, SharpHound)

**Day 23 - Kerberoasting Attack**
- Learn about Service Principal Names (SPNs)
- Use impacket's GetUserSPNs.py to request service tickets
- Export Kerberos TGS tickets for cracking
- Crack service account password with Hashcat
- Use compromised service account credentials
(Tools: impacket, Hashcat)

**Day 24 - AS-REP Roasting**
- Identify users with "Do not require Kerberos preauthentication"
- Use impacket's GetNPUsers.py to request AS-REP
- Extract crackable hash from AS-REP response
- Crack hash offline with Hashcat
- Test on lab accounts with preauth disabled
(Tools: impacket, Hashcat)

**Day 25 - Golden Ticket Attack**
- Compromise Domain Controller or get krbtgt hash
- Extract krbtgt account hash with Mimikatz
- Create Golden Ticket with mimikatz kerberos::golden
- Use Golden Ticket for persistent domain access
- Test Golden Ticket against domain resources
(Tools: Mimikatz)

**Day 26 - Silver Ticket Attack**
- Extract service account hash from compromised machine
- Create Silver Ticket for specific service with Mimikatz
- Use Silver Ticket to access target service
- Test against CIFS, HTTP, and other services
- Compare Golden vs Silver ticket persistence
(Tools: Mimikatz)

**Day 27 - DCSync Attack**
- Learn about Directory Replication Service permissions
- Use Mimikatz lsadump::dcsync to replicate credentials
- Extract all domain user hashes from Domain Controller
- Dump krbtgt hash for Golden Ticket creation
- Practice DCSync with different user permissions
(Tools: Mimikatz)

**Day 28 - Week Review & Complete AD Attack Chain**
- Start with low-privilege domain user
- Enumerate domain with BloodHound
- Perform Kerberoasting to get service account
- Escalate privileges to Domain Admin
- Execute DCSync to dump all credentials
(Tools: BloodHound, impacket, Mimikatz)

**Week 5: Lateral Movement & Persistence**

**Day 29 - PsExec & Remote Execution**
- Use impacket's psexec.py for remote command execution
- Test psexec.py domain/user:password@target
- Use Metasploit's psexec module
- Practice with different credentials and targets
- Understand PsExec detection and alternative methods
(Tools: impacket, Metasploit)

**Day 30 - WMI & WinRM Lateral Movement**
- Use impacket's wmiexec.py for WMI command execution
- Test evil-winrm for WinRM-based access
- Execute commands with wmic on remote systems
- Use PowerShell remoting with Enter-PSSession
- Compare different lateral movement techniques
(Tools: impacket, evil-winrm, PowerShell)

**Day 31 - Registry & Scheduled Task Persistence**
- Create registry Run key persistence
- Use reg add for remote registry modification
- Create scheduled task with schtasks /create
- Test persistence survival across reboots
- Practice removal and cleanup of persistence
(Tools: Windows built-in tools)

**Day 32 - Service & DLL Hijacking Persistence**
- Create malicious Windows service for persistence
- Generate service binary with msfvenom
- Install service with sc create command
- Practice DLL hijacking in writable directories
- Test persistence across system restarts
(Tools: msfvenom, sc command)

**Day 33 - WMI Event Persistence**
- Learn WMI event subscription for persistence
- Create WMI event filter and consumer
- Bind filter to consumer for payload execution
- Test persistence triggering conditions
- Practice WMI persistence cleanup
(Tools: PowerShell, WMIC)

**Day 34 - Beacon & C2 Infrastructure Basics**
- Install Cobalt Strike trial or Sliver C2 framework
- Generate Sliver beacon payload
- Set up listener on team server
- Execute beacon on compromised machine
- Learn basic C2 commands and beacon management
(Tools: Sliver C2)

**Day 35 - Week Review & Establish Persistent Access**
- Compromise target machine in lab
- Establish multiple persistence mechanisms
- Test lateral movement to additional machines
- Deploy C2 beacon for command and control
- Document complete post-exploitation process
(Tools: impacket, Sliver, PowerShell)

**Week 6: Data Exfiltration & Covering Tracks**

**Day 36 - Data Discovery**
- Use PowerShell to search for sensitive files
- Search for passwords with findstr /si password *.txt
- Locate database files and configuration files
- Use Get-ChildItem recursively for file discovery
- Document sensitive data locations
(Tools: PowerShell, Windows commands)

**Day 37 - Credential Dumping Techniques**
- Dump SAM database with reg save HKLM\\sam sam.save
- Extract credentials from saved SAM file
- Dump LSASS process memory with procdump
- Use Mimikatz on dumped LSASS file
- Export browser saved passwords
(Tools: Mimikatz, ProcDump)

**Day 38 - Data Exfiltration Methods**
- Practice file transfer with SMB shares
- Use PowerShell download cradles for exfiltration
- Test DNS tunneling with dnscat2
- Exfiltrate data over HTTPS with curl or wget
- Practice ICMP tunneling for covert channels
(Tools: PowerShell, dnscat2, curl)

**Day 39 - Covering Tracks - Log Clearing**
- Learn Windows Event Log locations and types
- Clear Security logs with wevtutil cl Security
- Use PowerShell Clear-EventLog cmdlet
- Understand log clearing detection methods
- Practice selective log entry deletion
(Tools: wevtutil, PowerShell)

**Day 40 - Timestomping & Artifact Removal**
- Modify file timestamps with PowerShell
- Use timestomp from Metasploit meterpreter
- Remove command history from PowerShell
- Clear recently used files and jump lists
- Delete artifacts from temporary directories
(Tools: PowerShell, Metasploit)

**Day 41 - Anti-Forensics Techniques**
- Learn about Windows prefetch and its forensic value
- Clear prefetch files from C:\\Windows\\Prefetch
- Understand USN journal and its deletion
- Practice secure file deletion techniques
- Learn about Volume Shadow Copy deletion
(Tools: Windows commands, PowerShell)

**Day 42 - Week Review & Complete Red Team Operation**
- Execute full attack from initial access to exfiltration
- Dump credentials and sensitive data
- Exfiltrate data covertly from network
- Cover tracks by clearing logs
- Document complete operational chain
(Tools: Mimikatz, PowerShell, dnscat2)

**Week 7: Network Pivoting & Advanced Techniques**

**Day 43 - Port Forwarding & Tunneling**
- Learn SSH local and remote port forwarding
- Use ssh -L for local port forwarding
- Practice ssh -R for remote port forwarding
- Test ssh -D for SOCKS proxy creation
- Forward RDP through SSH tunnel
(Tools: SSH)

**Day 44 - Metasploit Pivoting**
- Set up routing through compromised meterpreter session
- Use run autoroute -s subnet command
- Configure auxiliary/server/socks_proxy module
- Scan internal network through pivot
- Exploit internal services via pivot
(Tools: Metasploit)

**Day 45 - Chisel & Ligolo Tunneling**
- Install Chisel for TCP/UDP tunneling
- Set up Chisel server and client
- Create SOCKS proxy with Chisel
- Install ligolo-ng for network pivoting
- Practice pivoting through multiple networks
(Tools: Chisel, ligolo-ng)

**Day 46 - Windows Defender Evasion**
- Learn about Windows Defender detection methods
- Use Veil framework to generate evasive payloads
- Test msfvenom encoders for AV evasion
- Practice obfuscation with Invoke-Obfuscation
- Test payloads against Windows Defender
(Tools: Veil, msfvenom, Invoke-Obfuscation)

**Day 47 - PowerShell AMSI Bypass**
- Learn about Anti-Malware Scan Interface (AMSI)
- Test AMSI bypass techniques in PowerShell
- Use obfuscation to evade AMSI detection
- Practice loading Mimikatz with AMSI bypass
- Test bypasses on updated Windows systems
(Tools: PowerShell)

**Day 48 - Application Whitelisting Bypass**
- Learn about AppLocker and Device Guard
- Test regsvr32 for bypassing application whitelisting
- Use mshta.exe for code execution
- Practice DLL side-loading techniques
- Test rundll32 and other LOLBins
(Tools: Windows LOLBins)

**Day 49 - Week Review & Advanced Red Team TTP**
- Establish pivot through compromised network
- Evade AV/EDR with obfuscated payloads
- Bypass application whitelisting controls
- Access internal network through tunnels
- Document advanced techniques used
(Tools: Chisel, Veil, Metasploit)

**Week 8: Cloud & Container Security**

**Day 50 - AWS Enumeration Basics**
- Create free AWS account for learning
- Install AWS CLI and configure credentials
- Practice aws s3 ls for bucket enumeration
- Use aws iam list-users to enumerate IAM
- Test aws ec2 describe-instances for EC2 discovery
(Tools: AWS CLI)

**Day 51 - AWS Exploitation Techniques**
- Test for publicly accessible S3 buckets
- Practice privilege escalation in AWS IAM
- Enumerate Lambda functions with aws lambda list-functions
- Test for overly permissive IAM policies
- Practice AWS metadata service exploitation
(Tools: AWS CLI, curl)

**Day 52 - Azure Security Testing**
- Create free Azure account for testing
- Install Azure CLI and authenticate
- Use az vm list to enumerate virtual machines
- Test az ad user list for AAD enumeration
- Practice Azure Blob storage enumeration
(Tools: Azure CLI)

**Day 53 - Docker Security Basics**
- Install Docker on Linux VM
- Run vulnerable Docker container for testing
- Test docker ps and docker exec commands
- Practice container escape techniques
- Mount host filesystem from privileged container
(Tools: Docker)

**Day 54 - Kubernetes Security**
- Install minikube for local Kubernetes cluster
- Learn kubectl basic commands
- Enumerate pods with kubectl get pods
- Test for exposed Kubernetes dashboard
- Practice accessing secrets with kubectl
(Tools: kubectl, minikube)

**Day 55 - Container Exploitation**
- Practice Docker privilege escalation
- Test for exposed Docker socket
- Use docker.sock to escape container
- Practice Kubernetes pod exploitation
- Test for overly permissive service accounts
(Tools: Docker, kubectl)

**Day 56 - Week Review & Cloud Penetration Test**
- Enumerate AWS or Azure test environment
- Identify misconfigurations and weak permissions
- Escalate privileges in cloud environment
- Access container environments
- Document cloud attack vectors
(Tools: AWS CLI, Azure CLI, Docker)

**Week 9: Wireless & Physical Security**

**Day 57 - WiFi Reconnaissance**
- Install aircrack-ng suite on Kali
- Put wireless adapter in monitor mode with airmon-ng
- Scan for access points with airodump-ng
- Capture WPA handshakes from network
- Analyze wireless traffic with Wireshark
(Tools: aircrack-ng, Wireshark)

**Day 58 - WiFi Attacks**
- Crack captured WPA handshake with aircrack-ng
- Practice deauthentication attack with aireplay-ng
- Test Evil Twin attack with hostapd
- Create rogue access point for credential capture
- Practice WPS PIN attack with reaver
(Tools: aircrack-ng, hostapd, reaver)

**Day 59 - Rogue Device Deployment**
- Learn about Raspberry Pi as implant device
- Configure Raspberry Pi for remote access
- Set up reverse SSH tunnel for persistence
- Practice WiFi Pineapple techniques
- Test USB Rubber Ducky payloads
(Tools: Raspberry Pi, WiFi Pineapple)

**Day 60 - Physical Security Bypass**
- Study lock picking basics and techniques
- Learn about RFID cloning and badge duplication
- Practice tailgating and social engineering scenarios
- Test USB drop attacks in safe environment
- Document physical security weaknesses
(Tools: lock picks, RFID tools)

**Day 61 - RFID & Badge Cloning**
- Learn about 125kHz and 13.56MHz RFID systems
- Install Proxmark3 software and tools
- Practice reading RFID badges with Proxmark3
- Clone RFID badge to blank card
- Test cloned badges on access control systems
(Tools: Proxmark3)

**Day 62 - Social Engineering Framework**
- Study pretexting and social engineering principles
- Create convincing phishing scenarios
- Practice vishing (voice phishing) techniques
- Develop social engineering assessment methodology
- Learn psychological manipulation tactics
(Tools: SET, Gophish)

**Day 63 - Week Review & Red Team Physical Assessment**
- Plan physical penetration test scenario
- Execute WiFi attack on test network
- Practice social engineering for physical access
- Deploy rogue device for persistence
- Document complete physical security assessment
(Tools: aircrack-ng, Raspberry Pi, SET)

**Week 10: Reporting & Professional Red Teaming**

**Day 64 - Red Team Report Writing**
- Study professional red team report templates
- Learn executive summary writing for non-technical audiences
- Document technical findings with evidence
- Create attack narrative and timeline
- Include remediation recommendations
(Tools: Word processor, markdown)

**Day 65 - Threat Intelligence & TTP Mapping**
- Learn MITRE ATT&CK framework
- Map your techniques to ATT&CK tactics
- Study APT group TTPs and campaigns
- Practice threat modeling exercises
- Create adversary emulation plan
(Tools: MITRE ATT&CK Navigator)

**Day 66 - Complete Red Team Operation Day 1**
- Execute full red team assessment on lab
- Start with external reconnaissance
- Gain initial access through phishing or exploitation
- Establish persistence on first compromised host
- Begin lateral movement to additional systems
(Tools: all previous tools)

**Day 67 - Complete Red Team Operation Day 2**
- Continue lateral movement to high-value targets
- Escalate privileges to Domain Admin
- Compromise Domain Controller
- Exfiltrate sensitive data from network
- Maintain covert access throughout operation
(Tools: all previous tools)

**Day 68 - Complete Red Team Operation Day 3**
- Complete final objectives of engagement
- Cover tracks and clean up artifacts
- Remove all persistence mechanisms
- Collect all evidence and screenshots
- Prepare debriefing materials
(Tools: all previous tools)

**Day 69 - Final Report & Presentation**
- Write comprehensive red team assessment report
- Include executive summary with business impact
- Detail all vulnerabilities and attack paths
- Provide prioritized remediation roadmap
- Create presentation for stakeholder briefing
(Tools: Word processor, presentation software)

**Day 70 - Career Development & Next Steps**
- Review OSCP, CRTP, or CRTO certification paths
- Join red team communities and forums
- Study advanced topics: EDR evasion, custom malware development
- Practice on HackTheBox Pro Labs
- Continue building home lab for advanced scenarios
(Tools: certification resources)

---

*"We don't rise to the level of our expectations; we fall to the level of our training."* - **Archilochus**

**Good luck, future red teamer! 🔴⚔️**


