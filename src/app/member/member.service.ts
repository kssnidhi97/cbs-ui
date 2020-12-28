import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Configuration } from '../shared/constants';

@Injectable()
export class MemberService {
    
    constructor(private httpService: HttpService) { }

    public getMember(callback) {
        const url = Configuration.apiPath + "/member";
        this.httpService.get(url, callback);
    }

    public getAllMember(callback) {
        const url = Configuration.apiPath + "/member/all-member";
        this.httpService.get(url, callback);
    }

    public saveMember(data, callback) {
        const url = Configuration.apiPath + "/member";
        this.httpService.post(url, data, callback);
    }

    public getMemberById(id, callback) {
        const url = Configuration.apiPath + "/member/" + id;
        this.httpService.get(url, callback);
    }

    public deleteMemberById(id, callback) {
        const url = Configuration.apiPath + "/member/" + id;
        this.httpService.delete(url, callback);
    }

    public getUnApprovedMember(callback) {
        const url = Configuration.apiPath + "/member/unapproved-member";
        this.httpService.get(url, callback);
    }

    public approveMember(data, callback) {
        const url = Configuration.apiPath + "/member/approve-member";
        this.httpService.post(url, data, callback);
    }

    public getMemberFees(callback) {
        const url = Configuration.apiPath + "/member/member-fee";
        this.httpService.get(url, callback);
    }

    public saveMemberFee(data, memberId, callback) {
        const url = Configuration.apiPath + "/member/member-fee/" + memberId;
        this.httpService.post(url, data, callback);
    }

    public getAdditionalShares(callback) {
        const url = Configuration.apiPath + "/member/additional-share";
        this.httpService.get(url, callback);
    }

    public saveAdditionalShare(data, memberId, callback) {
        const url = Configuration.apiPath + "/member/add-shares/" + memberId;
        this.httpService.post(url, data, callback);
    }

    public getRefundShares(callback) {
        const url = Configuration.apiPath + "/member/refund-share";
        this.httpService.get(url, callback);
    }

    public saveRefundShares(data, memberId, callback) {
        const url = Configuration.apiPath + "/member/refund-share/" + memberId;
        this.httpService.post(url, data, callback);
    }

    public getDIvidendIssues(callback) {
        const url = Configuration.apiPath + "/member/dividend-issue";
        this.httpService.get(url, callback);
    }

    public getCurrentYearDividendIssues(callback) {
        const url = Configuration.apiPath + "/member/current-year-dividend-issue";
        this.httpService.get(url, callback);
    }

    public getDividendIssue(id, callback) {
        const url = Configuration.apiPath + "/member/dividend-issue/" + id;
        this.httpService.get(url, callback);
    }

    public saveDividendIssue(data, callback) {
        const url = Configuration.apiPath + "/member/dividend-issue";
        this.httpService.post(url, data, callback);
    }

    public saveDividendPayment(data, callback) {
        const url = Configuration.apiPath + "/member/dividend-payment";
        this.httpService.post(url, data, callback);
    }

    public getDividendPayments(callback) {
        const url = Configuration.apiPath + "/member/dividend-payment";
        this.httpService.get(url, callback);
    }

    public getShareMasterById(id, callback) {
        const url = Configuration.apiPath + "/member/share-master/" + id;
        this.httpService.get(url, callback);
    }

    public getActiveFinancialYear(callback) {
        const url = Configuration.apiPath + "/financial-year";
        this.httpService.get(url, callback);
    }

    public closeMemberShip(data, callback) {
        const url = Configuration.apiPath + "/member/close-member-ship";
        this.httpService.post(url, data, callback);
    }

    public getSavingBankAccountByMemberId(id, callback) {
        const url = Configuration.apiPath + "/member-saving-bank-account/" + id;
        this.httpService.get(url, callback);
    }

    public getCurrentBankAccountByMemberId(id, callback) {
        const url = Configuration.apiPath + "/member-current-account/" + id;
        this.httpService.get(url, callback);
    }

    public getSavingAccountTransaction(accountNumber, callback) {
        const url = Configuration.apiPath + "/saving-bank-account-transactions/" + accountNumber;
        this.httpService.get(url, callback);
    }

    public getLoanDetailsByMemberId(customerId, callback) {
        const url = Configuration.apiPath + "/loan/customer-loan/" + customerId;
        this.httpService.get(url, callback);
    }

    public createBoardMeeting(data, callback) {
        const url = Configuration.apiPath + "/board-meeting";
        this.httpService.post(url, data, callback);
    }

    public getMeetings(callback) {
        const url = Configuration.apiPath + "/board-meeting";
        this.httpService.get(url, callback);
    }

    public getSavingBankAccountByMemberNumber(memberNumber, callback) {
        const url = Configuration.apiPath + "/saving-bank-account-member-number/" + memberNumber;
        this.httpService.get(url, callback);
    }
    public getRecurringByMemberNumber(memberNumber, callback) {
        const url = Configuration.apiPath + "/all-deposite/" + memberNumber;
        this.httpService.get(url, callback);
    }
    
    public getPigmyAccountByMemberId(id, callback) {
        const url = Configuration.apiPath + "/member-pigmy-deposit-account/" + id;
        this.httpService.get(url, callback);
    }

    public addNomineeByMemberId(dynamicUrl, data, memberId, callback) {
        const url = Configuration.apiPath + "/" + dynamicUrl + "/add-nominee/" + memberId;
        this.httpService.post(url, data, callback);
    }

    public getmeetingsList(callback) {
        const url = Configuration.apiPath + "/board-meeting";
        this.httpService.get(url, callback);
    }

    public getUnApprovedLoan(callback) {
        const url = Configuration.apiPath + "/loan/unapproved-loan";
        this.httpService.get(url, callback);
    }

    public closeSBAccountByAccountNumber(data, callback) {
        const url = Configuration.apiPath + "/saving-bank-deposit/deactivate";
        this.httpService.post(url, data, callback);
    }

    public closeCurrentAccountByAccountNumber(data, callback) {
        const url = Configuration.apiPath + "/current-account/deactivate";
        this.httpService.post(url, data, callback);
    }

    public getCurrentFinancialYear(callback) {
        const url = Configuration.apiPath + "/current-financial-year";
        this.httpService.get(url, callback);
    }

    public getApprovedMembers(callback) {
        const url = Configuration.apiPath + "/member";
        this.httpService.get(url, callback);
    }

    public getNominalMembers(callback) {
        const url = Configuration.apiPath + "/member/nominal-type";
        this.httpService.get(url, callback);
    }

    public getAllMembers(callback) {
        const url = Configuration.apiPath + "/member/all-member";
        this.httpService.get(url, callback);
    }

    public getPigmyAccountTransaction(accountNumber, callback) {
        const url = Configuration.apiPath + "/pigmy-deposit-transactions/" + accountNumber;
        this.httpService.get(url, callback);
    }

    editMemberFamilyDetail(memberFamilyDetail,memberId, callback)
    {
        const url = Configuration.apiPath + "/edit-member-family-detail/" + memberId;
        this.httpService.post(url, memberFamilyDetail, callback);
    }

    addMemberFamilyDetail(memberFamilyDetail,memberId, callback)
    {
        const url = Configuration.apiPath + "/add-member-family-detail/" + memberId;
        this.httpService.post(url, memberFamilyDetail, callback);
    }

    public deleteMemberFamilyDetail(memberId, memberFamilyDetailId, callback) {
        const url = Configuration.apiPath + "/member-family-detail/" + memberId + "/" +memberFamilyDetailId;
        this.httpService.delete(url, callback);
    }

    editMemberNomineeDetail(memberNomineeDetail,memberId, callback)
    {
        const url = Configuration.apiPath + "/edit-member-nominee-detail/" + memberId;
        this.httpService.post(url, memberNomineeDetail, callback);
    }

    addMemberNomineeDetail(memberNomineeDetail,memberId, callback)
    {
        const url = Configuration.apiPath + "/add-member-nominee-detail/" + memberId;
        this.httpService.post(url, memberNomineeDetail, callback);
    }

    public getMemberByCustomer(customerId, callback) {
        const url = Configuration.apiPath + "/member/member-by-customer/" + customerId;
        this.httpService.get(url, callback);
    }


    public getAsOnDateBoardMeeting(data, callback) {
        const url = Configuration.apiPath + "/board-meeting/date";
        this.httpService.post(url, data, callback);
    }
    
}