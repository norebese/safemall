import * as boardData from '../data/boardData.js'

// 공지사항 목록
export async function getNoticeList(req, res){
  try {
    const lastNo = parseInt(req.query.lastNo) || 0;  // query에서 lastNo 파싱 없으면 0
    const data = await boardData.getboardList('Notice', lastNo);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'No notices found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 공지사항 상세
export async function getNoticeDetail(req, res){
  try {
    const data = await boardData.getBypostId('Notice', req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Notice not found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 예방법 목록
export async function getPreventList(req, res){
  try {
    const lastNo = parseInt(req.query.lastNo) || 0;
    const data = await boardData.getboardList('Prevent', lastNo);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'No preventions found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 예방법 상세
export async function getPreventDetail(req, res){
  try {
    const data = await boardData.getBypostId('Prevent', req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Prevention not found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 건의사항 목록
export async function getSuggestList(req, res){
  try {
    const lastNo = parseInt(req.query.lastNo) || 0;
    const data = await boardData.getboardList('Suggest', lastNo);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'No suggestions found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 건의사항 작성
export async function createSuggest(req, res){
  try {
    // jwt 토큰에서 nickname 값을 추출
    const nickname = '관리자'
    req.body.Author = nickname
    const postId = await boardData.Create('Suggest', req.body);
    res.status(201).json({ id: postId });
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error',e });
  }
};

// 건의사항 상세
export async function getSuggestDetail(req, res){
  try {
    const data = await boardData.getBypostId('Suggest', req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Suggestion not found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 건의사항 수정
export async function editSuggest(req, res){
  try {
    const result = await boardData.Edit('Suggest', req.body);
    if (result.nModified > 0) {
      res.status(200).json({ message: 'Suggestion updated' });
    } else {
      res.status(404).json({ message: 'Suggestion not found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 건의사항 삭제
export async function deleteSuggest(req, res){
  try {
    const result = await boardData.Deletepost('Suggest', req.params.id);
    if (result) {
      res.status(200).json({ message: 'Suggestion deleted' });
    } else {
      res.status(404).json({ message: 'Suggestion not found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 제보 목록
export async function getReportList(req, res){
  try {
    const lastNo = parseInt(req.query.lastNo) || 0;
    const data = await boardData.getboardList('Report', lastNo);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'No reports found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 제보 작성
export async function createReport(req, res){
  try {
    const postId = await boardData.Create('Report', req.body);
    res.status(201).json({ id: postId });
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 제보 상세
export async function getReportDetail(req, res){
  try {
    const data = await boardData.getBypostId('Report', req.params.id);
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: 'Report not found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 제보 수정
export async function editReport(req, res){
  try {
    const result = await boardData.Edit('Report', req.body);
    if (result.nModified > 0) {
      res.status(200).json({ message: 'Report updated' });
    } else {
      res.status(404).json({ message: 'Report not found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// 제보 삭제
export async function deleteReport(req, res){
  try {
    const result = await boardData.Deletepost('Report', req.params.id);
    if (result) {
      res.status(200).json({ message: 'Report deleted' });
    } else {
      res.status(404).json({ message: 'Report not found' });
    }
  } catch (e) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};